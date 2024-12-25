import React from "react";
import Sidebar from "../components/sidebar";
import Canvas from "../components/canvas";
import Mobnav from "../components/mobnav";

const page = () => {
  return (
    <div className="w-full h-screen sm:flex">
      <Mobnav />
      <Sidebar />
      <Canvas />
    </div>
  );
};

export default page;
