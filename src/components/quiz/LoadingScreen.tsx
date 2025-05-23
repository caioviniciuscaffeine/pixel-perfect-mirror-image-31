
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface LoadingScreenProps {
  message: string;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ message }) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#F04E98] text-white z-50">
      <div className="flex flex-col items-center justify-center h-screen w-full px-6">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/2e2aac027a9a4d32a285eb7e333fa9cf/ba32556d964df1022d3f2db86164802b682ecb9a?placeholderIfAbsent=true"
          alt="Sublyme"
          className={`${isMobile ? 'w-32 mb-12' : 'w-40 mb-24'}`}
        />
        <div className="flex flex-col items-center space-y-3">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
          <p className={`${isMobile ? 'text-xl' : 'text-2xl'} font-medium`}>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
