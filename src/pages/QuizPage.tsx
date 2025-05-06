
import React from "react";
import Quiz from "@/components/quiz/Quiz";
import { useIsMobile } from "@/hooks/use-mobile";

const QuizPage: React.FC = () => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="flex min-h-screen w-full bg-white">
        <div className="w-full px-2 py-4">
          <Quiz />
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen w-full">
      <div className="w-full md:w-1/2 p-8 flex items-center justify-center">
        <Quiz />
      </div>
      <div className="hidden md:block md:w-1/2 bg-cover bg-center" style={{ 
        backgroundImage: "url('https://cdn.builder.io/api/v1/image/assets/2e2aac027a9a4d32a285eb7e333fa9cf/148d5693-c767-4219-96a3-139690352b82.png?placeholderIfAbsent=true')" 
      }}>
      </div>
    </div>
  );
};

export default QuizPage;
