
import React from "react";
import { Check } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface QuizOptionProps {
  value: string;
  label: React.ReactNode;
  points: number;
  selected: boolean;
  onSelect: (value: string, points: number) => void;
}

const QuizOption: React.FC<QuizOptionProps> = ({
  value,
  label,
  points,
  selected,
  onSelect,
}) => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <button
        className={`flex w-full items-center gap-3 rounded-lg border text-left px-4 py-5 transition mb-4 ${
          selected
            ? "border-[#F04E98] bg-[#FFF1F7]"
            : "border-[#E9ECEF] bg-white hover:border-[#F04E98]"
        }`}
        onClick={() => onSelect(value, points)}
      >
        <div className="flex h-6 w-6 shrink-0 items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 5L16 12L9 19" stroke="#97D700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="text-[#495057] text-base">{label}</div>
      </button>
    );
  }

  return (
    <button
      className={`flex w-full items-center gap-3 rounded-lg border text-left px-4 py-5 transition ${
        selected
          ? "border-[#F04E98] bg-[#FFF1F7]"
          : "border-[#E9ECEF] bg-white hover:border-[#F04E98]"
      }`}
      onClick={() => onSelect(value, points)}
    >
      <div
        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
          selected ? "bg-[#F04E98]" : "bg-[#F8F9FA]"
        }`}
      >
        {selected && <Check className="h-4 w-4 text-white" />}
      </div>
      <div className="text-[#495057] text-base">{label}</div>
    </button>
  );
};

export default QuizOption;
