"use client";
import Image from "next/image";
import React from "react";

interface Auth_logic_headingProps {
  selectedButton: string;
  setSelectedButton: React.Dispatch<React.SetStateAction<string>>;
}

const Auth_logic_heading: React.FC<Auth_logic_headingProps> = ({
  selectedButton,
  setSelectedButton,
}) => {
  return (
    <div className="w-full h-[40%] flex flex-col sm:gap-6 gap-5 justify-center items-center sm:px-5 px-3">
      <div className="flex items-center gap-3">
        <Image
          src="assets/ant_bold.svg"
          alt="CodeAnt AI Logo"
          width={30}
          height={30}
          loading="lazy"
        />
        <h2 className="sm:text-2xl font-semibold">CodeAnt AI</h2>
      </div>
      <h1 className="font-semibold sm:text-3xl text-center">
        Welcome to CodeAnt AI
      </h1>
      <div className="flex w-full">
        {["SAAS", "Self Hosted"].map((button) => (
          <button
            key={button}
            className={`sm:w-1/2 w-full sm:p-4 p-2 rounded-xl font-semibold border transition duration-300 ${
              selectedButton === button
                ? "bg-blue-500 text-white"
                : "bg-[#FAFAFA]"
            }`}
            onClick={() => setSelectedButton(button)}
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Auth_logic_heading;
