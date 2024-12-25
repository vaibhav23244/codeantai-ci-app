"use client";
import React, { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

interface StatProps {
  num: number;
  suffix: string;
  decimals?: number;
  subheading?: string;
  className?: string;
  variant?: "xl" | "2xl" | "3xl" | "4xl";
}

const Stat: React.FC<StatProps> = ({
  num,
  suffix,
  decimals = 0,
  subheading,
  className = "",
  variant = "xl",
}) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView) return;
    animate(0, num, {
      duration: 2.5,
      onUpdate(value) {
        if (ref.current) {
          ref.current.textContent = value.toFixed(decimals);
        }
      },
    });
  }, [num, decimals, isInView]);

  const variantClass = {
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
  }[variant];

  return (
    <div className={`flex flex-col items-center py-8 sm:py-0 ${className}`}>
      <p className={`text-center font-semibold ${variantClass}`}>
        <span ref={ref}></span>
        {suffix}
      </p>
      {subheading && <p className="text-center text-[15px]">{subheading}</p>}
    </div>
  );
};

export default React.memo(Stat);
