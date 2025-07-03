"use client";
import React, { useState } from "react";

interface ColorfulHoverTextProps {
  text: string;
  className?: string;
  fontSize?: string;
}

const ColorfulHoverText: React.FC<ColorfulHoverTextProps> = ({
  text,
  className = "",
  fontSize = "3rem",
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const letters = text.split("");

  const colors = [
    "#ff6b6b",
    "#4ecdc4",
    "#45b7d1",
    "#399918",
    "#0D5EA6",
    "#eb4d4b",
    "#6c5ce7",
  ];

  return (
    <div className={`flex flex-wrap items-center justify-center ${className}`}>
      {letters.map((letter: string, index: number) => (
        <span
          key={index}
          className="inline-block cursor-pointer"
          style={{
            fontSize: fontSize,
            transition: "all 0.4s ease-out",
            transform:
              hoveredIndex === index
                ? "scale(1.2) rotate(10deg)"
                : "scale(1) rotate(0deg)",
            color:
              hoveredIndex === index
                ? colors[index % colors.length]
                : "inherit",
            filter:
              hoveredIndex === index
                ? "drop-shadow(0 6px 12px rgba(0,0,0,0.4))"
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

export default ColorfulHoverText;
