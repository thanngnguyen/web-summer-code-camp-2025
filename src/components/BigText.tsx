"use client"; // Chạy ở client-side

import React, { useState } from "react";

type WaveHoverTextProps = {
  text: string;
  className?: string;
  fontSize?: string;
};

const WaveHoverText: React.FC<WaveHoverTextProps> = ({
  text,
  className = "",
  fontSize = "3rem",
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const letters = text.split("");

  return (
    <div className={`flex flex-wrap items-center justify-center ${className}`}>
      {letters.map((letter, index) => (
        <span
          key={index}
          className="inline-block cursor-pointer"
          style={{
            fontSize: fontSize,
            transition: "all 0.2s ease-out",
            transform:
              hoveredIndex === index
                ? "scale(1.4) translateY(-10px)"
                : "scale(1) translateY(0px)",
            color: hoveredIndex === index ? "#0065F8" : "inherit",
            filter:
              hoveredIndex === index
                ? "drop-shadow(0 4px 8px rgba(0,101,248,0.4))"
                : "none",
            transformOrigin: "center",
            width: letter === " " ? "0.5em" : "auto",
          }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </div>
  );
};

export default WaveHoverText;
