
import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface NavigationButtonsProps {
  onNext: () => void;
  onPrev: () => void;
  nextLabel?: string;
  canProceed: boolean;
  showPrev?: boolean;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  onNext,
  onPrev,
  nextLabel = "Continuar",
  canProceed,
  showPrev = true,
}) => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="flex gap-4 w-full fixed bottom-0 left-0 p-4 bg-white">
        {showPrev && (
          <button
            onClick={onPrev}
            className="w-16 h-16 flex items-center justify-center border border-[#F04E98] rounded-lg"
          >
            <ArrowLeft className="h-6 w-6 text-[#F04E98]" />
          </button>
        )}
        <button
          onClick={onNext}
          disabled={!canProceed}
          className={`flex-1 flex items-center justify-center gap-2 rounded-lg py-4 transition-colors ${
            canProceed
              ? "bg-[#F04E98] text-white"
              : "bg-[#F8F9FA] text-[#ADB5BD] cursor-not-allowed"
          }`}
        >
          {nextLabel}
          <ArrowRight className="h-6 w-6" />
        </button>
      </div>
    );
  }

  return (
    <div className="flex gap-4 w-full mt-8">
      {showPrev && (
        <button
          onClick={onPrev}
          className="flex items-center justify-center border border-[#F8F9FA] rounded-lg px-8 py-4 hover:bg-[#F8F9FA] transition-colors"
        >
          <ArrowLeft className="h-6 w-6 text-[#F04E98]" />
        </button>
      )}
      <button
        onClick={onNext}
        disabled={!canProceed}
        className={`flex-1 flex items-center justify-center gap-2 rounded-lg px-8 py-4 transition-colors ${
          canProceed
            ? "bg-[#F04E98] text-white hover:bg-[#e03183]"
            : "bg-[#F8F9FA] text-[#ADB5BD] cursor-not-allowed"
        }`}
      >
        {nextLabel}
        <ArrowRight className="h-6 w-6" />
      </button>
    </div>
  );
};

export default NavigationButtons;
