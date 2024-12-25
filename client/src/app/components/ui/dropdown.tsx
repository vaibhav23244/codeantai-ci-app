"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string>("Vaibhav Verma");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const options = [
    "RandomUser1",
    "RandomUser2",
    "RandomUser3",
    "RandomUser4",
    "Vaibhav Verma",
  ];
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative">
      <button
        className="w-full px-3 py-2 text-left border border-gray-300 rounded-md shadow-sm bg-white flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className="truncate">{selected}</span>
        <Image
          src="/assets/drop.svg"
          alt="Dropdown Icon"
          width={20}
          height={20}
          priority
        />
      </button>
      <ul
        className={`absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto transition-all duration-300 origin-top ${
          isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
        }`}
        role="listbox"
      >
        {options.map((option, index) => (
          <li
            key={index}
            className={`px-3 py-2 cursor-pointer truncate ${
              option === selected
                ? "text-gray-400 cursor-not-allowed"
                : "hover:bg-gray-100"
            }`}
            onClick={() => option !== selected && handleSelect(option)}
            role="option"
            aria-selected={option === selected}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
