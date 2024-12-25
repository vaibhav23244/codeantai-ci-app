"use client";
import React, { useState } from "react";
import Auth_logic_heading from "./ui/auth_logic_heading";
import Auth_logic_login from "./ui/auth_logic_login";

const Auth_logic: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState<string>("SAAS");

  return (
    <div className="sm:w-1/2 h-full sm:px-12 px-5 bg-[#FAFAFA] flex flex-col justify-center items-center gap-5">
      <div className="w-full sm:h-[80vh] h-[60vh] flex flex-col bg-white rounded-2xl border overflow-hidden">
        <Auth_logic_heading
          selectedButton={selectedButton}
          setSelectedButton={setSelectedButton}
        />
        <Auth_logic_login selectedButton={selectedButton} />
      </div>
      <p className="sm:text-sm text-[11px] tracking-tight">
        By signing up, you agree to the{" "}
        <span className="font-semibold cursor-pointer hover:underline">
          Privacy Policy
        </span>
        .
      </p>
    </div>
  );
};

export default Auth_logic;
