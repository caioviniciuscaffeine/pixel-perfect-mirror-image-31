
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  const percentage = (currentStep / totalSteps) * 100;
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full">
        <div className="flex justify-between items-center mb-2">
          <p className="text-[#6C757D] text-base">Como está sua imunidade?</p>
          <span className="text-[#6C757D] text-base bg-[#E9FAC8] rounded-full px-3 py-1">
            <span className="inline-flex items-center gap-1">
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="animate-spin">
                <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
              </svg>
              ETAPA {currentStep} DE {totalSteps}
            </span>
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
  }

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
