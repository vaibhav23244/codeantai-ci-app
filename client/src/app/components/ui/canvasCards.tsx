import { cardContent } from "@/app/home/Slug/cardContent";
import Image from "next/image";
import React from "react";

interface CardItemProps {
  lang: string;
  size: string;
  date: string;
}

const CardItem: React.FC<CardItemProps> = ({ lang, size, date }) => (
  <div className="flex sm:gap-7 gap-3">
    <div className="flex gap-2 items-center">
      <h5 className="sm:text-[14px] text-[12px]">{lang}</h5>
      <div className="w-2 h-2 rounded-full bg-[#1570EF]"></div>
    </div>
    <div className="flex gap-2 items-center">
      <Image src="/assets/db.svg" alt="database_logo" width={11} height={11} />
      <h5 className="sm:text-[14px] text-[12px]">{size}</h5>
    </div>
    <h5 className="sm:text-[14px] text-[12px]">{date}</h5>
  </div>
);

const CanvasCards = () => {
  return (
    <div className="w-full h-full mt-7 overflow-auto custom-scrollbar">
      {cardContent.map((e, index) => (
        <div
          key={index}
          className="w-full sm:px-5 px-3 sm:py-3 py-2 border-t-[1px] flex flex-col gap-3 tracking-tight hover:bg-[#F5F5F5] transition-colors duration-200"
        >
          <div className="flex gap-3">
            <h1 className="sm:text-lg text-[17px] font-semibold">{e.title}</h1>
            <div className="flex justify-center items-center rounded-xl sm:px-3 px-1 bg-[#EFF8FF] border-2 border-[#D8EEFF]">
              <p className="text-[#83AAE9] sm:text-[13px] text-[10px] font-semibold">
                {e.type}
              </p>
            </div>
          </div>
          <CardItem lang={e.lang} size={e.size} date={e.date} />
        </div>
      ))}
    </div>
  );
};

export default CanvasCards;
