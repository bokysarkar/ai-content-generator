"use client";
import React, { useContext, useState } from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Template from "@/app/(data)/Template";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { chatSession } from "@/utils/AiModel";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { useRouter } from "next/navigation";
import { UpdateCreditUsageContext } from "@/app/(context)/UpdateCreditUsageContext";

interface PROPS {
  params: {
    "template-slug": string;
  };
}

function CreateNewContent(props: PROPS) {
  const selectedTemplate: TEMPLATE | undefined = Template?.find(
    (item) => item.slug == props.params["template-slug"]
  );

  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>("");
  const { user } = useUser();
  const router = useRouter();
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
  const {updateCreditUsage, setUpdateCreditUsage} = useContext(UpdateCreditUsageContext);

/**
 *  used to generate content from AI
 * @param formData 
 * @returns 
 */

  const generateAIContent = async (formData: any) => {
    if (totalUsage >= 30000) {
      router.push("dashboard/billing");
      console.log("please ugrade");
      return;
    }

    setLoading(true);
    const SelectedPrompt = selectedTemplate?.aiPrompt;

    const FinalAIPrompt = JSON.stringify(formData) + ", " + SelectedPrompt;

    const result = await chatSession.sendMessage(FinalAIPrompt);
    setAiOutput(result?.response.text());
    await SaveInDb(formData, selectedTemplate?.slug, result?.response.text());
    setLoading(false);
    setUpdateCreditUsage(Date.now());
  };

  const SaveInDb = async (formData: any, slug: any, aiOutput: string) => {
    const result = await db.insert(AIOutput).values({
      formData: formData,
      templateSlug: slug,
      aiResponse: aiOutput,
      // createdBy: 'someone',
      createdBy: user?.primaryEmailAddress?.emailAddress || "unknown",
      createdAt: moment().format("DD/MM/yyyy"),
    });
  };

  return (
    <div className="p-2">
      <Link href="/dashboard">
        <Button
          variant="link"
          className="flex gap-2 ml-4 hover:no-underline hover:cursor-pointer"
        >
          <ArrowLeft height={20} width={20} />
          Back
        </Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-5 py-2">
        <FormSection
          selectedTemplate={selectedTemplate}
          useFormInput={(v: any) => generateAIContent(v)}
          loading={loading}
        />
        <OutputSection aiOutput={aiOutput} />
      </div>
    </div>
  );
}

export default CreateNewContent;