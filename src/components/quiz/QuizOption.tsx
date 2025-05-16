
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

  return (
    <button
      className={`flex w-full items-center gap-3 rounded-lg border text-left px-3 py-3 md:px-4 md:py-5 transition mb-3 md:mb-4 ${
        selected
          ? "border-[#F04E98] bg-[#FFF1F7]"
          : "border-[#E9ECEF] bg-white hover:border-[#F04E98]"
      }`}
      onClick={() => onSelect(value, points)}
    >
      <div
        className={`flex h-5 w-5 md:h-6 md:w-6 shrink-0 items-center justify-center rounded-full ${
          selected ? "bg-[#F04E98]" : "bg-[#F8F9FA]"
        }`}
      >
        {selected && <Check className="h-3 w-3 md:h-4 md:w-4 text-white" />}
      </div>
      <div className="text-[#495057] text-sm md:text-base">{label}</div>
    </button>
  );
};

export default QuizOption;
