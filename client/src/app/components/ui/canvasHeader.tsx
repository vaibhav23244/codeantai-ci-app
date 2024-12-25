"use client";
import React from "react";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";
import Image from "next/image";

const CanvasHeader = () => {
  const placeholders = [
    "Dynamic search field...",
    "Has vanishing inputs...",
    "Creates a good UI/UX...",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  const buttonClasses =
    "flex items-center px-3 py-2 gap-3 rounded-lg shadow-sm text-sm";

  return (
    <div className="w-full sm:pt-5 pt-3 px-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
      <div className="flex flex-col sm:gap-3 gap-1">
        <h1 className="font-semibold text-lg sm:text-2xl">Repositories</h1>
        <p className="text-xs sm:text-sm opacity-70">33 total repositories</p>
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
      </div>
      <div className="flex gap-2 sm:gap-3">
        <button
          className={`${buttonClasses} border border-gray-300`}
          aria-label="Refresh All Repositories"
        >
          <Image
            src="/assets/refresh.svg"
            alt="Refresh Icon"
            width={15}
            height={15}
          />
          <p>Refresh All</p>
        </button>
        <button
          className={`${buttonClasses} bg-blue-500 text-white`}
          aria-label="Add New Repository"
        >
          <Image src="/assets/add.svg" alt="Add Icon" width={15} height={15} />
          <p>Add Repository</p>
        </button>
      </div>
    </div>
  );
};

export default CanvasHeader;
