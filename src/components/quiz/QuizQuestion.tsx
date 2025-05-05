
import React from "react";
import QuizOption from "./QuizOption";
import QuizSlider from "./QuizSlider";

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
  return (
    <div className="w-full">
      <h2 className="text-[32px] font-semibold text-[#212529] leading-tight mb-8">
        {question}
      </h2>

      {type === "options" ? (
        <div className="space-y-4">
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
  );
};

export default QuizQuestion;
