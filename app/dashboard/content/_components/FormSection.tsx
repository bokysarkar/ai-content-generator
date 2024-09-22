'use client';

import React from "react";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Loader2Icon } from "lucide-react";

interface PROPS {
  selectedTemplate?: TEMPLATE;
  useFormInput: any;
  loading: boolean;
}

function FormSection({ selectedTemplate, useFormInput, loading }: PROPS) {
  const [formData, setFormData] = useState<any>();
  const handleInputChange = (event: any) => {
    const {name, value} = event.target;
    setFormData({...formData, [name]:value});
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    useFormInput(formData);
  };

  return (
    <div className="p-5 shadow-md border rounded-lg bg-white">
      {/* @ts-ignore */}
      <Image src={selectedTemplate?.icon} alt="icon" width={64} height={64} />
      <h2 className="text-2xl mb-2">{selectedTemplate?.name}</h2>
      <p className="text-sm text-gray-500">{selectedTemplate?.desc}</p>
      <form className="mt-6" action="" onSubmit={onSubmit}>
        {selectedTemplate?.form?.map((item, index) => (
          <div key={item.name} className="flex flex-col gap-2 my-2 mb-7">
            <label htmlFor="">
              {item.label}
            </label>
            {item.field == "input" ? (
              <Input
                name={item.name}
                required={item?.required}
                onChange={handleInputChange}
              />
            ) : item.field == "textarea" ? (
              <Textarea
                name={item.name}
                required={item?.required}
                onChange={handleInputChange}
              />
            ) : null}
          </div>
        ))}
        <Button className="w-full py-6 font-semibold cursor-pointer" type="submit" disabled={loading}>
          {loading && <Loader2Icon className="animate-spin"/>}
          Generate Content
        </Button>
      </form>
    </div>
  );
}

export default FormSection;
