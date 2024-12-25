"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navbar from "./ui/navbar";

const Mobnav = () => {
  return (
    <div className="sm:hidden flex py-3 border-b-2 justify-between items-center">
      <Link className="flex items-center gap-1 px-5" href="/">
        <Image
          src="assets/ant_bold.svg"
          alt="CodeAnt AI Logo"
          width={23}
          height={23}
          priority
        />
        <h2 className="text-lg">CodeAnt AI</h2>
      </Link>
      <Navbar />
    </div>
  );
};

export default Mobnav;
