import React from "react";

interface CTAButtonProps {
  text: string;
  bgColor?: string;
  textColor?: string;
  className?: string;
  onClick?: () => void;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  text,
  bgColor = "#F04E98",
  textColor = "white",
  className = "",
  onClick,
}) => {
  return (
    <button
      className={`min-h-14 w-full gap-2 text-xl font-medium leading-[1.2] px-6 py-4 rounded-lg ${className}`}
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default CTAButton;