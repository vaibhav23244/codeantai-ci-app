import Auth_logic from "@/app/components/auth_logic";
import Auth_ui from "@/app/components/auth_ui";
import React from "react";

const Auth = () => {
  return (
    <div className="w-full h-screen sm:flex">
      <Auth_ui />
      <Auth_logic />
    </div>
  );
};

export default Auth;
