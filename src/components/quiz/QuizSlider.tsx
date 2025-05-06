
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface QuizSliderOptionProps {
  value: string;
  label: React.ReactNode;
  points: number;
}

interface QuizSliderProps {
  options: QuizSliderOptionProps[];
  selectedValue: string | null;
  onSelect: (value: string, points: number) => void;
}

const QuizSlider: React.FC<QuizSliderProps> = ({ options, selectedValue, onSelect }) => {
  const selectedIndex = options.findIndex(option => option.value === selectedValue);
  const isMobile = useIsMobile();

  return (
    <div className="w-full">
      <div className="relative w-full h-2 bg-[#F8F9FA] rounded-full mb-4">
        {/* Colored bar */}
        <div 
          className="absolute top-0 left-0 h-2 bg-[#97D700] rounded-full" 
          style={{ width: selectedIndex >= 0 ? `${(selectedIndex / (options.length - 1)) * 100}%` : "0%" }}
        />
        
        {/* Slider dots */}
        <div className="relative flex justify-between">
          {options.map((option, index) => (
            <button
              key={option.value}
              onClick={() => onSelect(option.value, option.points)}
              className={`absolute top-0 transform -translate-y-1/2 rounded-full ${
                selectedValue === option.value
                  ? "bg-[#F04E98] border-4 border-white ring-2 ring-[#F04E98] z-10"
                  : index <= selectedIndex
                  ? "bg-[#97D700]"
                  : "bg-[#DEE2E6]"
              } ${isMobile ? "w-4 h-4" : "w-4 h-4"}`}
              style={{ left: `calc(${(index / (options.length - 1)) * 100}% - ${index === 0 ? 0 : index === options.length - 1 ? (isMobile ? 8 : 8) : (isMobile ? 8 : 8) / 2}px)` }}
            />
          ))}
        </div>
      </div>

      {/* Option labels */}
      <div className={`flex justify-between ${isMobile ? "mt-6" : "mt-6"}`}>
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => onSelect(option.value, option.points)}
            className={`py-1 px-1 rounded-lg text-center ${isMobile ? "text-xs flex-1 mx-0.5" : "text-sm"} ${
              selectedValue === option.value
                ? "bg-white border border-[#F04E98] text-[#212529]"
                : "bg-white border border-[#E9ECEF] text-[#212529] hover:border-[#F04E98]"
            }`}
          >
            <span>{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizSlider;
