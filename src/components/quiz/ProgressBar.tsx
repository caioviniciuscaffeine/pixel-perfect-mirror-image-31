
import React from "react";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  const percentage = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <p className="text-[#6C757D] text-base">Como está sua imunidade?</p>
        <span className="text-[#6C757D] text-base bg-[#E9FAC8] rounded-full px-3 py-1">
          ETAPA {currentStep} DE {totalSteps}
        </span>
      </div>
      <div className="w-full h-1 bg-[#F8F9FA] overflow-hidden rounded-full">
        <div
          style={{ width: `${percentage}%` }}
          className="h-full bg-[#F04E98]"
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
