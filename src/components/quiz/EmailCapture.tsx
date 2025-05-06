
import React, { useState } from "react";
import Logo from "./Logo";
import EmailInput from "./EmailInput";

interface EmailCaptureProps {
  onSubmit: (email: string) => void;
}

const EmailCapture: React.FC<EmailCaptureProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  
  return (
    <div className="flex flex-col min-h-screen w-full px-4 bg-white">
      <Logo />
      
      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-3xl font-semibold text-[#212529] text-center">
          Antes de continuar
        </h1>
        
        <p className="text-xl text-[#6C757D] mt-2 mb-8 text-center">
          Qual o seu melhor e-mail?
        </p>
        
        <div className="w-full">
          <EmailInput value={email} onChange={setEmail} />
        </div>
        
        <div className="w-full mt-6">
          <button
            onClick={() => onSubmit(email)}
            disabled={!email.includes('@')}
            className={`w-full flex items-center justify-center gap-2 py-4 px-6 rounded-lg text-xl font-medium ${
              email.includes('@')
                ? "bg-[#F04E98] text-white"
                : "bg-[#F8F9FA] text-[#ADB5BD] cursor-not-allowed"
            }`}
          >
            Continuar
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.5 4.5L21 12M21 12L13.5 19.5M21 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailCapture;
