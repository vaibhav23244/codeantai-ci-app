"use client";
import Image from "next/image";
import React from "react";
import { FaArrowUp } from "react-icons/fa";
import Stat from "./count_up_stats";

const Auth_pie_board: React.FC = () => {
  return (
    <div className="flex flex-col bg-white py-5 px-9 rounded-2xl shadow-xl">
      <div className="flex items-center gap-10">
        <div className="w-12 h-12 rounded-full bg-[#E6E3FD] flex justify-center items-center">
          <Image
            src="/assets/pie.svg"
            alt="Pie chart icon"
            width={25}
            height={25}
            className="object-cover"
          />
        </div>
        <div className="flex flex-col tracking-tight">
          <div className="flex items-center gap-2">
            <FaArrowUp className="text-[#0049C6]" />
            <p className="font-semibold text-[#0049C6]">14%</p>
          </div>
          <p className="text-sm">This week</p>
        </div>
      </div>
      <div className="flex flex-col mt-5 tracking-tight">
        <p className="text-sm font-semibold">Issues Fixed</p>
        <div className="flex justify-start">
          <Stat num={500} suffix="K+" variant="3xl" />
        </div>
      </div>
    </div>
  );
};

export default Auth_pie_board;
