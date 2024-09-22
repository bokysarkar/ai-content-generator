"use client";
import React, { useContext, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { AIOutput } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { db } from "@/utils/db";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { UpdateCreditUsageContext } from "@/app/(context)/UpdateCreditUsageContext";

export interface HISTORY {
  id: Number;
  formData: string;
  aiResponse: string | null;
  templateSlug: string;
  createdBy: string;
  createdAt: string;
}

function UsageTrack() {
  const { user } = useUser();
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
  const [updateCreditUsage, setUpdateCreditUsage] = useState(
    UpdateCreditUsageContext
  );

  useEffect(() => {
    user && GetData();
  }, [user]);

  useEffect(() => {
    user && GetData();
  }, [updateCreditUsage && user]);

  const GetData = async () => {
    {
      /* @ts-igonre */
    }
    const result: HISTORY[] = await db
      .select()
      .from(AIOutput)
      .where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress));

    GetTotalUsage(result);
  };

  const GetTotalUsage = (result: HISTORY[]) => {
    let total: number = 0;
    result.forEach((element) => {
      total = total + Number(element.aiResponse?.length);
    });
    setTotalUsage(total);
    console.log(total);
  };

  return (
    <div className="m-5">
      <div className="bg-[#100732] p-3 text-white rounded-md">
        <h2>Credit Used</h2>
        <div className="h-2 bg-[#524e64] rounded-full mt-5">
          <div
            className="h-2 bg-white rounded-full w-full"
            style={{ width: (totalUsage / 30000) * 100 + "%" }}
          ></div>
        </div>
        <h3 className="text-sm my-2">{totalUsage}/30,000 Credits Used</h3>
      </div>
      <Button
        variant={"secondary"}
        className="w-full my-3 text-primary font-semibold"
      >
        Upgrade
      </Button>
    </div>
  );
}

export default UsageTrack;
