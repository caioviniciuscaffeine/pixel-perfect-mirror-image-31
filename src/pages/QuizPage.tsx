
import React, { useState, useEffect } from "react";
import Quiz from "@/components/quiz/Quiz";
import { useIsMobile } from "@/hooks/use-mobile";
import LoadingScreen from "@/components/quiz/LoadingScreen";
import QuizIntro from "@/components/quiz/QuizIntro";
import EmailCapture from "@/components/quiz/EmailCapture";

const QuizPage: React.FC = () => {
  const isMobile = useIsMobile();
  const [loadingState, setLoadingState] = useState<"initial" | "completed">("initial");
  const [showQuizIntro, setShowQuizIntro] = useState(false);
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Show loading screen first, then quiz intro for all devices
    const timer = setTimeout(() => {
      setLoadingState("completed");
      setShowQuizIntro(true);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleStartQuiz = () => {
    setShowQuizIntro(false);
    setShowEmailCapture(true);
  };

  const handleEmailSubmit = (email: string) => {
    setEmail(email);
    setShowEmailCapture(false);
  };

  if (loadingState === "initial") {
    return <LoadingScreen message="Preparando o seu quiz..." />;
  }
  
  if (showQuizIntro) {
    return <QuizIntro onStart={handleStartQuiz} />;
  }
  
  if (showEmailCapture) {
    return <EmailCapture onSubmit={handleEmailSubmit} />;
  }

  // Render the same quiz view for both mobile and desktop
  return (
    <div className="flex min-h-screen w-full bg-white">
      {isMobile ? (
        <div className="w-full px-2 py-4">
          <Quiz startWithEmail={email} />
        </div>
      ) : (
        <div className="flex min-h-screen w-full">
          <div className="w-full md:w-1/2 p-8 flex items-center justify-center">
            <Quiz startWithEmail={email} />
          </div>
          <div className="hidden md:block md:w-1/2 bg-cover bg-center" style={{ 
            backgroundImage: "url('https://cdn.builder.io/api/v1/image/assets/2e2aac027a9a4d32a285eb7e333fa9cf/148d5693-c767-4219-96a3-139690352b82.png?placeholderIfAbsent=true')" 
          }}>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
