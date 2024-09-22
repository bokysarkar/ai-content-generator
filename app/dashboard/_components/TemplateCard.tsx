import React from "react";
import { TEMPLATE } from "./TemplateListSection";
import Image from "next/image";
import Link from "next/link";

function TemplateCard(item: TEMPLATE) {
  return (
    <Link href={"/dashboard/content/" + item.slug}>
      <div className="p-5 shadow-md rounded-md border bg-white flex flex-col justify-start gap-2 cursor-pointer hover:scale-[102%] hover:bg-slate-50 hover:shadow-md transition-all">
        <Image src={item.icon} alt="icon" width={50} height={50} />
        <h2 className="font-semibold text-lg">{item?.name}</h2>
        <p className="text-gray-600 line-clamp-3 md:line-clamp-2">
          {item.desc}
        </p>
      </div>
    </Link>
  );
}

export default TemplateCard;
