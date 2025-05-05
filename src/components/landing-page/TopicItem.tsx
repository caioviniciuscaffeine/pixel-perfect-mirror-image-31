import React from "react";

interface TopicItemProps {
  icon: string;
  text: string;
  className?: string;
}

export const TopicItem: React.FC<TopicItemProps> = ({ 
  icon, 
  text,
  className = "" 
}) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="self-stretch flex items-center justify-center w-8 my-auto">
        <img
          src={icon}
          className="aspect-[1] object-contain w-8 self-stretch my-auto"
          alt=""
        />
      </div>
      <div className="text-[#495057] text-xl font-normal leading-[1.2] self-stretch my-auto">
        {text}
      </div>
    </div>
  );
};

export default TopicItem;