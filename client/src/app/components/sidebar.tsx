"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { sidebarContent } from "../home/Slug/sidebarContent";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const Dropdown = dynamic(() => import("./ui/dropdown"), { ssr: false });

const Sidebar = () => {
  const [selected, setSelected] = useState("Repositories");
  const router = useRouter();

  return (
    <div className="w-[17%] h-screen py-5 px-3 sm:flex hidden flex-col justify-between items-center border-r-[1px]">
      <div className="w-full flex flex-col gap-5">
        <Link className="flex items-center gap-3" href="/">
          <Image
            src="assets/ant_bold.svg"
            alt="CodeAnt AI Logo"
            width={30}
            height={30}
            priority
          />
          <h2 className="text-xl">CodeAnt AI</h2>
        </Link>
        <div className="w-full flex flex-col gap-3">
          <Dropdown />
          {sidebarContent.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelected(item.title)}
              className={`w-full flex items-center p-3 gap-3 rounded-lg font-semibold tracking-tight transition-colors duration-300 ${
                selected === item.title
                  ? "bg-blue-500 text-white"
                  : "bg-transparent text-black"
              }`}
            >
              <Image
                src={item.image}
                alt={item.alt}
                width={20}
                height={20}
                priority
              />
              <p>{item.title}</p>
            </button>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col gap-3">
        <button
          className="w-full flex items-center p-3 gap-3 rounded-lg font-semibold tracking-tight transition-colors duration-300"
          aria-label="Support"
        >
          <Image
            src="/assets/phone.svg"
            alt="Support Icon"
            width={20}
            height={20}
            priority
          />
          <p>Support</p>
        </button>
        <button
          onClick={() => router.push("/")}
          className="w-full flex items-center p-3 gap-3 rounded-lg font-semibold tracking-tight transition-colors duration-300"
          aria-label="Logout"
        >
          <Image
            src="/assets/logout.svg"
            alt="Logout Icon"
            width={20}
            height={20}
            priority
          />
          <p>Logout</p>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
