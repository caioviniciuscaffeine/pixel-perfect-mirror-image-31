
import React, { useState } from "react";
import Logo from "./Logo";
import NavigationButtons from "./NavigationButtons";
import { useIsMobile } from "@/hooks/use-mobile";

interface QuizIntroProps {
  onStart: () => void;
}

const QuizIntro: React.FC<QuizIntroProps> = ({
  onStart
}) => {
  const isMobile = useIsMobile();
  
  // Mobile version has a more compact layout
  if (isMobile) {
    return (
      <div className="flex flex-col w-full px-4">
        <Logo />
        
        <div className="w-full mt-6">
          <img
            src="/lovable-uploads/9bc385b2-5fb3-41c6-8f09-8c08e3cc0cc6.png"
            alt="Immunity test"
            className="w-full h-64 object-cover"
          />
        </div>
        
        <div className="mt-8">
          <h1 className="text-3xl font-semibold text-[#212529]">
            Sua imunidade está precisando de reforço? Descubra agora.
          </h1>
          
          <p className="text-[#6C757D] mt-4">
            A correria do dia-a-dia, noites mal dormidas e até o estresse podem afetar a sua imunidade sem que você perceba. Responda algumas perguntas rápidas e descubra se o seu corpo está precisando de um reforço - e o que fazer para fortalecê-lo!
          </p>
          
          <div className="flex items-center gap-4 mt-6 bg-gray-50 p-4 rounded-lg">
            <img 
              src="https://cdn.builder.io/api/v1/image/assets/2e2aac027a9a4d32a285eb7e333fa9cf/797c9b32-4bca-4fe6-ae20-1f6bc738a97a?placeholderIfAbsent=true"
              alt="Thaisa Leal"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="text-[#212529] font-semibold">Por Thaisa Leal</h3>
              <p className="text-[#6C757D] text-xs mt-1">
                <span className="text-blue-500">CRN: 938593573</span>
              </p>
              <p className="text-[#6C757D] text-xs mt-1">
                Thaisa Leal é nutricionista especialista em neurociência do comportamento e apaixonada por desenvolvimento pessoal.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full mt-8 mb-8">
          <button
            onClick={onStart}
            className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-lg text-xl font-medium bg-[#F04E98] text-white"
          >
            Responder ao quiz
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.5 4.5L21 12M21 12L13.5 19.5M21 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    );
  }
  
  // Desktop version - same content and structure as mobile
  return (
    <div className="flex flex-col w-full max-w-[700px] mx-auto">
      <Logo />
      
      <div className="w-full mt-6 flex justify-center">
        <img
          src="/lovable-uploads/9bc385b2-5fb3-41c6-8f09-8c08e3cc0cc6.png"
          alt="Immunity test"
          className="h-80 object-cover"
        />
      </div>
      
      <div className="flex flex-col gap-6 mt-8">
        <h1 className="text-[40px] font-semibold text-[#212529] leading-tight">
          Sua imunidade está precisando de reforço? Descubra agora.
        </h1>
        
        <p className="text-[#6C757D] text-lg">
          A correria do dia-a-dia, noites mal dormidas e até o estresse podem afetar a 
          sua imunidade sem que você perceba. Responda algumas perguntas rápidas e 
          descubra se o seu corpo está precisando de um reforço - e o que fazer para 
          fortalecê-lo!
        </p>
        
        <div className="flex items-center gap-4 mt-4 bg-gray-50 p-4 rounded-lg">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/2e2aac027a9a4d32a285eb7e333fa9cf/797c9b32-4bca-4fe6-ae20-1f6bc738a97a?placeholderIfAbsent=true"
            alt="Thaisa Leal"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h3 className="text-[#212529] font-semibold">Por Thaisa Leal</h3>
            <p className="text-[#6C757D] mt-1">
              <span className="text-blue-500">CRN: 938593573</span>
            </p>
            <p className="text-[#6C757D] mt-1">
              Thaisa Leal é nutricionista especialista em neurociência do comportamento e 
              apaixonada por desenvolvimento pessoal.
            </p>
          </div>
        </div>
      </div>
      
      <div className="w-full mt-8">
        <button
          onClick={onStart}
          className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-lg text-xl font-medium bg-[#F04E98] text-white"
        >
          Responder ao quiz
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 4.5L21 12M21 12L13.5 19.5M21 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default QuizIntro;
