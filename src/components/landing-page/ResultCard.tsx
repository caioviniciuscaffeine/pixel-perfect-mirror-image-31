
import React from "react";
import CTAButton from "./CTAButton";

interface TipItem {
  icon: string;
  text: React.ReactNode;
  isBold?: boolean;
}

interface ResultCardProps {
  status: "success" | "warning" | "danger";
  icon: string;
  title: string;
  description: React.ReactNode;
  tips: TipItem[];
  productImage: string;
  ctaTitle: string;
  ctaDescription: string;
  bgColor: string;
}

export const ResultCard: React.FC<ResultCardProps> = ({
  status,
  icon,
  title,
  description,
  tips,
  productImage,
  ctaTitle,
  ctaDescription,
  bgColor,
}) => {
  // Define colors based on status
  const statusColors = {
    success: {
      title: "#497C00",
      background: "#E0F3B3",
    },
    warning: {
      title: "#E67700",
      background: "#FFE3B2",
    },
    danger: {
      title: "#C92A2A",
      background: "#FFCED9",
    },
  };

  const titleColor = statusColors[status].title;

  return (
    <div className="items-stretch shadow-[0px_7px_7px_-5px_rgba(0,0,0,0.04),0px_10px_15px_-5px_rgba(0,0,0,0.10),0px_1px_3px_0px_rgba(0,0,0,0.05)] flex w-full overflow-hidden flex-wrap rounded-2xl">
      <div className="min-w-60 w-[434px] bg-white p-8 max-md:max-w-full max-md:px-5">
        <div className="flex w-full flex-col items-stretch">
          <div className="self-center flex items-center gap-2 justify-center">
            <div className="items-center self-stretch flex gap-2.5 w-10 h-10 bg-[#F6F0D8] my-auto p-1 rounded-full">
              <div className="self-stretch flex w-8 items-center justify-center my-auto">
                <img
                  src={icon}
                  className="aspect-[1] object-contain w-8 self-stretch my-auto"
                  alt={title}
                />
              </div>
            </div>
            <div
              className={`text-[${titleColor}] text-center text-[32px] font-semibold leading-none self-stretch my-auto`}
              style={{ color: titleColor }}
            >
              {title}
            </div>
          </div>
          <div className="text-[#495057] text-center text-lg font-normal leading-5 mt-3">
            {description}
          </div>
        </div>
        <div className="items-stretch border border-[color:var(--default-colors-grey-500,#ADB5BD)] flex w-full flex-col mt-6 p-4 rounded-2xl border-solid">
          {tips.map((tip, index) => (
            <div
              key={index}
              className={`flex w-full gap-2 ${
                index < tips.length - 1
                  ? "border-b-[color:var(--default-colors-grey-200,#E9ECEF)] border-b border-solid"
                  : ""
              } ${index > 0 ? "mt-2.5" : ""} pt-2 pb-3`}
            >
              <div className="flex items-center justify-center w-6">
                <img
                  src={tip.icon}
                  className="aspect-[1] object-contain w-6 self-stretch my-auto"
                  alt=""
                />
              </div>
              <div className="text-[#495057] text-base font-normal leading-[18px] flex-1 shrink basis-[0%]">
                {tip.text}
              </div>
            </div>
          ))}
          {/* Removed the error message text */}
        </div>
      </div>
      <div
        className="items-stretch flex min-w-60 gap-10 flex-wrap h-full flex-1 shrink basis-[0%] pl-6 pr-10 py-8 max-md:max-w-full max-md:px-5"
        style={{ backgroundColor: bgColor }}
      >
        <img
          src={productImage}
          className="aspect-[0.92] object-contain w-[286px] min-w-60 my-auto"
          alt="Product"
        />
        <div className="min-w-60 flex-1 shrink basis-[0%] max-md:max-w-full">
          <div className="w-full max-md:max-w-full">
            <div className="text-[#212529] text-[32px] font-semibold leading-10 max-md:max-w-full">
              {ctaTitle}
            </div>
            <div className="text-[#495057] text-xl font-normal leading-6 mt-4 max-md:max-w-full">
              {ctaDescription}
            </div>
          </div>
          <CTAButton
            text="Conheça Morning Shot"
            className="mt-20 max-md:mt-10"
          />
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
