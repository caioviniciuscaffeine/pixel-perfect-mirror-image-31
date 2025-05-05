import React from "react";

interface SignalCardProps {
  icon: string;
  title: string;
}

export const SignalCard: React.FC<SignalCardProps> = ({ icon, title }) => {
  return (
    <div className="items-stretch border-[color:var(--brand-colors-sublyme-main-colors-rosa,#F04E98)] self-stretch flex flex-col w-[190px] bg-[#F6F0D8] my-auto px-4 py-6 rounded-2xl border-2 border-solid">
      <div className="self-center flex items-center gap-4 p-1.5 rounded-[15998px]">
        <div className="self-stretch flex w-[51px] items-center justify-center my-auto">
          <img
            src={icon}
            className="aspect-[1] object-contain w-[52px] self-stretch my-auto"
            alt={title}
          />
        </div>
      </div>
      <div className="text-[#212529] text-center text-xl font-semibold leading-6 mt-2">
        {title}
      </div>
    </div>
  );
};

export default SignalCard;