"use client";
import Image from "next/image";
import React from "react";
import Auth_ui_stats from "./ui/auth_ui_stats";
import Auth_pie_board from "./ui/auth_pie_board";

const Auth_ui: React.FC = () => {
  return (
    <div className="w-1/2 h-full border-r border-gray-300 relative sm:flex hidden justify-center items-center">
      <Auth_ui_stats />
      <div className="absolute right-[21%] top-[61%]">
        <Auth_pie_board />
      </div>
      <div className="absolute left-0 bottom-0">
        <Image
          src="/assets/ant.svg"
          alt="Ant branding logo"
          width={200}
          height={200}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Auth_ui;
