"use client";
import Image from "next/image";
import React from "react";
import Stat from "./count_up_stats";

const Auth_ui_stats: React.FC = () => {
  const stats = [
    { num: 30, suffix: "+", subheading: "Language Support" },
    { num: 10, suffix: "K+", subheading: "Developers" },
    { num: 100, suffix: "K+", subheading: "Hours Saved" },
  ];

  return (
    <div className="flex flex-col rounded-2xl shadow-xl bg-white">
      <div className="flex items-center gap-3 p-5">
        <Image
          src="/assets/ant_bold.svg"
          alt="Ant bold logo"
          width={30}
          height={30}
          loading="lazy"
        />
        <h3 className="font-bold text-lg tracking-tight">
          AI to Detect & Autofix Bad Code
        </h3>
      </div>
      <div className="flex items-center justify-center gap-5 border-t p-7">
        {stats.map((stat, index) => (
          <Stat
            key={index}
            num={stat.num}
            suffix={stat.suffix}
            subheading={stat.subheading}
          />
        ))}
      </div>
    </div>
  );
};

export default Auth_ui_stats;
