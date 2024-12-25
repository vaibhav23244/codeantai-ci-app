"use client";
import { saasContent } from "@/app/authentication/Slug/saas_content";
import { selfhostedContent } from "@/app/authentication/Slug/selfhosted_content";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

interface Auth_logic_loginProps {
  selectedButton: string;
}

const Auth_logic_login: React.FC<Auth_logic_loginProps> = ({
  selectedButton,
}) => {
  const router = useRouter();
  const content = selectedButton === "SAAS" ? saasContent : selfhostedContent;

  return (
    <div className="w-full h-[60%] flex flex-col justify-center items-center sm:gap-5 gap-3 border-t">
      {content.map((item, index) => (
        <button
          key={index}
          onClick={() => router.push("/home")}
          className="sm:w-1/2 w-[90%] px-4 py-2 sm:rounded-xl rounded-lg font-semibold border flex gap-3 justify-center items-center hover:bg-blue-100 transition"
        >
          <div className="sm:w-9 sm:h-9 w-6 h-6 rounded-full flex justify-center items-center overflow-hidden">
            <Image
              src={item.image}
              alt={item.alt}
              width={30}
              height={30}
              loading="lazy"
              className="object-cover"
            />
          </div>
          <p className="sm:text-sm text-[11px]">{item.title}</p>
        </button>
      ))}
    </div>
  );
};

export default Auth_logic_login;
