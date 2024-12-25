"use client";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import { sidebarContent } from "@/app/home/Slug/sidebarContent";
import Dropdown from "./dropdown";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  const router = useRouter();
  return (
    <div className="relative">
      <button onClick={toggleMenu} className="text-2xl text-gray-800 px-5">
        {isOpen ? <FiX /> : <FiMenu />}
      </button>
      <div
        className={`absolute flex flex-col gap-5 p-5 right-0 mt-2 w-screen bg-white border z-50 transform transition-all duration-300 origin-top ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-5 opacity-0 pointer-events-none"
        }`}
      >
        <Dropdown />
        {sidebarContent.map((item, index) => (
          <button
            key={index}
            className="w-full flex items-center px-3 py-1 gap-3 rounded-lg font-semibold tracking-tight transition-colors duration-300 "
          >
            <Image
              src={item.image}
              alt={item.alt}
              width={17}
              height={17}
              priority
            />
            <p className="text-[15px]">{item.title}</p>
          </button>
        ))}
        <button className="w-full flex items-center px-3 py-1 gap-3 rounded-lg font-semibold tracking-tight transition-colors duration-300">
          <Image
            src="/assets/phone.svg"
            alt="Support Icon"
            width={17}
            height={17}
            priority
          />
          <p className="text-[15px]">Support</p>
        </button>
        <button
          onClick={() => router.push("/")}
          className="w-full flex items-center px-3 py-1 gap-3 rounded-lg font-semibold tracking-tight transition-colors duration-300"
        >
          <Image
            src="/assets/logout.svg"
            alt="Logout Icon"
            width={17}
            height={17}
            priority
          />
          <p className="text-[15px]">Logout</p>
        </button>
      </div>
      {isOpen && (
        <div
          className="fixed top-14 inset-0 z-40 bg-[#D3D3D3] opacity-[0.5]"
          onClick={closeMenu}
        />
      )}
    </div>
  );
};

export default Navbar;
