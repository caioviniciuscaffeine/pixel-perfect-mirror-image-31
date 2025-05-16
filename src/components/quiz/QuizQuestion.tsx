
import React from "react";
import QuizOption from "./QuizOption";
import QuizSlider from "./QuizSlider";
import { useIsMobile } from "@/hooks/use-mobile";

interface Option {
  value: string;
  label: React.ReactNode;
  points: number;
}

interface QuestionProps {
  question: string;
  type: "options" | "slider";
  options: Option[];
  selectedValue: string | null;
  onSelect: (value: string, points: number) => void;
}

const QuizQuestion: React.FC<QuestionProps> = ({
  question,
  type,
  options,
  selectedValue,
  onSelect,
}) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="w-full">
      <h2 className="text-xl md:text-[32px] font-semibold text-[#212529] leading-tight mb-4 md:mb-8">
        {question}
      </h2>

      <div className="max-h-[60vh] md:max-h-none overflow-y-auto md:overflow-visible pb-4">
        {type === "options" ? (
          <div className="space-y-2 md:space-y-4">
            {options.map((option) => (
              <QuizOption
                key={option.value}
                value={option.value}
                label={option.label}
                points={option.points}
                selected={selectedValue === option.value}
                onSelect={onSelect}
              />
            ))}
          </div>
        ) : (
          <QuizSlider
            options={options}
            selectedValue={selectedValue}
            onSelect={onSelect}
          />
        )}
      </div>
    </div>
  );
};

export default QuizQuestion;
