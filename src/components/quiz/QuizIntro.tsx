import React, { useState } from "react";
import Logo from "./Logo";
import NavigationButtons from "./NavigationButtons";
import EmailInput from "./EmailInput";
interface QuizIntroProps {
  onStart: (email: string) => void;
}
const QuizIntro: React.FC<QuizIntroProps> = ({
  onStart
}) => {
  const [email, setEmail] = useState("");
  return <div className="flex flex-col w-full max-w-[700px] mx-auto">
      <Logo />
      
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
        
        <div className="flex items-center gap-4 mt-4">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img src="https://cdn.builder.io/api/v1/image/assets/2e2aac027a9a4d32a285eb7e333fa9cf/797c9b32-4bca-4fe6-ae20-1f6bc738a97a?placeholderIfAbsent=true" alt="Thaisa Leal" className="w-full h-full object-cover" />
          </div>
          <div>
            <h3 className="text-[#212529] font-semibold text-base mx-[88px]">Criado por Thaisa Leal</h3>
            <p className="text-[#6C757D] text-sm mx-[87px]">
              Thaisa Leal é nutricionista especialista em neurociência do comportamento e 
              apaixonada por desenvolvimento pessoal. Sua missão é ajudar mulheres a se 
              tornarem leais a si mesmas, alcançando felicidade plena e equilíbrio em todas.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-12">
        <h3 className="text-[32px] font-semibold text-[#212529] leading-tight mb-6">
          Antes de continuar, qual o seu melhor e-mail?
        </h3>
        <EmailInput value={email} onChange={setEmail} />
      </div>
      
      <NavigationButtons onNext={() => onStart(email)} onPrev={() => {}} nextLabel="Ok, vamos lá" canProceed={email.includes('@')} showPrev={false} />
    </div>;
};
export default QuizIntro;