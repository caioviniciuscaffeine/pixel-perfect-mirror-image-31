
import React from "react";

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
              className={`absolute top-0 transform -translate-y-1/2 w-4 h-4 rounded-full ${
                selectedValue === option.value
                  ? "bg-[#F04E98] border-2 border-white ring-2 ring-[#F04E98] z-10"
                  : index <= selectedIndex
                  ? "bg-[#97D700]"
                  : "bg-[#DEE2E6]"
              }`}
              style={{ left: `calc(${(index / (options.length - 1)) * 100}% - ${index === 0 ? 0 : index === options.length - 1 ? 16 : 8}px)` }}
            />
          ))}
        </div>
      </div>

      {/* Option labels */}
      <div className="flex justify-between mt-6">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => onSelect(option.value, option.points)}
            className={`py-3 px-4 rounded-lg text-center ${
              selectedValue === option.value
                ? "bg-white border border-[#F04E98] text-[#212529]"
                : "bg-white border border-[#E9ECEF] text-[#212529] hover:border-[#F04E98]"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizSlider;
