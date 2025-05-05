
import React from "react";
import { Input } from "@/components/ui/input";

interface EmailInputProps {
  value: string;
  onChange: (value: string) => void;
}

const EmailInput: React.FC<EmailInputProps> = ({ value, onChange }) => {
  return (
    <div className="w-full">
      <Input
        type="email"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Digite seu melhor email"
        className="w-full px-4 py-6 text-base border border-[#E9ECEF] rounded-lg focus:border-[#F04E98] focus:ring-[#F04E98]"
      />
    </div>
  );
};

export default EmailInput;
