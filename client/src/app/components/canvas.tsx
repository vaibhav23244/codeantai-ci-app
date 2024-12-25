import React from "react";
import CanvasHeader from "./ui/canvasHeader";
import CanvasCards from "./ui/canvasCards";

const Canvas = () => {
  return (
    <div className="sm:w-[85%] h-screen bg-[#FAFAFA] flex justify-center items-center">
      <div className="sm:w-[95%] sm:h-[93%] w-full h-full mx-auto bg-white sm:rounded-2xl sm:shadow-xl flex flex-col overflow-hidden">
        <CanvasHeader />
        <CanvasCards />
      </div>
    </div>
  );
};

export default Canvas;
