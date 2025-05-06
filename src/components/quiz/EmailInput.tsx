
import React from "react";
import { Input } from "@/components/ui/input";
import { useIsMobile } from "@/hooks/use-mobile";

interface EmailInputProps {
  value: string;
  onChange: (value: string) => void;
}

const EmailInput: React.FC<EmailInputProps> = ({ value, onChange }) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="w-full">
      <div className="relative">
        {isMobile && (
          <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
            @
          </span>
        )}
        <Input
          type="email"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={isMobile ? "Digite seu melhor email" : "Digite seu melhor email"}
          className={`w-full ${isMobile ? "pl-10 py-6 text-base" : "px-4 py-6 text-base"} border border-[#E9ECEF] rounded-lg focus:border-[#F04E98] focus:ring-[#F04E98]`}
        />
      </div>
    </div>
  );
};

export default EmailInput;
