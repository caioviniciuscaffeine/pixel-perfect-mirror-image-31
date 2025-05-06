import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "sonner";
import Logo from "./Logo";
import ProgressBar from "./ProgressBar";
import QuizQuestion from "./QuizQuestion";
import NavigationButtons from "./NavigationButtons";
import QuizIntro from "./QuizIntro";
import LoadingScreen from "./LoadingScreen";
import { useIsMobile } from "@/hooks/use-mobile";

// Define webhook URLs
const EMAIL_WEBHOOK_URL = "https://www.caffeinearmy.com.br/";
const QUIZ_COMPLETION_WEBHOOK_URL = "https://www.caffeinearmy.com.br/";

// Define quiz questions
const quizQuestions = [
  {
    id: "sleep-tired",
    question: "Você costuma se sentir cansado(a) mesmo após uma boa noite de sono?",
    type: "options" as const,
    options: [
      { value: "often", label: "Sim, com frequência", points: 1 },
      { value: "sometimes", label: "Às vezes, depende do dia", points: 2 },
      { value: "rarely", label: "Raramente, acordo bem disposto(a)", points: 3 },
    ],
    image: "https://cdn.builder.io/api/v1/image/assets/2e2aac027a9a4d32a285eb7e333fa9cf/148d5693-c767-4219-96a3-139690352b82.png?placeholderIfAbsent=true"
  },
  {
    id: "energy-level",
    question: "Como está sua energia e disposição no dia-a-dia?",
    type: "slider" as const,
    options: [
      { value: "low", label: "Baixa, sinto cansaço frequente", points: 1 },
      { value: "normal", label: "Normal, mas oscila bastante", points: 2 },
      { value: "high", label: "Boa, me sinto produtivo(a) e ativo(a)", points: 3 },
    ],
    image: "public/lovable-uploads/160eec5c-6cf2-4da1-bd51-58ad71ca4faa.png"
  },
  {
    id: "illness-frequency",
    question: "Com que frequência você costuma ter episódios de gripe, resfriado e/ou dor de garganta?",
    type: "options" as const,
    options: [
      { value: "often", label: "Frequentemente, pelo menos uma vez por mês", points: 1 },
      { value: "sometimes", label: "Algumas vezes no ano", points: 2 },
      { value: "rarely", label: "Raramente ou quase nunca", points: 3 },
    ],
    image: "public/lovable-uploads/81bfe912-c434-473c-bed0-d358d4c98caa.png"
  },
  {
    id: "digestion",
    question: "Como está a sua digestão?",
    type: "options" as const,
    options: [
      { value: "poor", label: "Quase sempre sinto inchaço, gases ou aquela sensação de peso na barriga", points: 1 },
      { value: "moderate", label: "Às vezes sinto desconfortos", points: 2 },
      { value: "good", label: "Regular e sem incômodos", points: 3 },
    ],
    image: "public/lovable-uploads/201f4a9c-274c-4cd2-932d-518c39237af2.png"
  },
  {
    id: "sleep-hours",
    question: "Você dorme, em média, quantas horas por noite?",
    type: "slider" as const,
    options: [
      { value: "less-than-5", label: "Menos de 5h", points: 1 },
      { value: "5-to-7", label: "Entre 5h e 7h", points: 2 },
      { value: "more-than-7", label: "Mais de 7h", points: 3 },
    ],
    image: "public/lovable-uploads/ed878138-025a-4627-9fb0-9839dcffba31.png"
  },
  {
    id: "diet",
    question: "Como você descreveria a sua alimentação?",
    type: "options" as const,
    options: [
      { value: "processed", label: "Mais industrializados, pouca água e quase nada de fibras", points: 1 },
      { value: "mixed", label: "Um pouco de tudo, às vezes saudável, às vezes nem tanto", points: 2 },
      { value: "balanced", label: "Bem equilibrada: com frutas, vegetais e bastante água", points: 3 },
    ],
    image: "public/lovable-uploads/a93ba6f4-9ac7-4ba2-ae5b-0a37c81bbe0b.png"
  },
  {
    id: "water-intake",
    question: "Quanto de água você costuma beber por dia?",
    type: "slider" as const,
    options: [
      { value: "less-than-1", label: "Menos de 1 litro", points: 1 },
      { value: "1-to-2", label: "Entre 1 litro e 2 litros", points: 2 },
      { value: "more-than-2", label: "Mais de 2 litros", points: 3 },
    ],
    image: "public/lovable-uploads/06849b26-f6af-470f-beba-08de19290a0f.png"
  },
  {
    id: "physical-activity",
    question: "Com que frequência você pratica atividade física?",
    type: "options" as const,
    options: [
      { value: "rarely", label: "Raramente ou nunca (0 a 1 vez por semana)", points: 1 },
      { value: "sometimes", label: "Às vezes (2 ou 3 vezes por semana)", points: 2 },
      { value: "regularly", label: "Com regularidade (4 ou mais vezes por semana)", points: 3 },
    ],
    image: "public/lovable-uploads/13a28919-c5ce-4f70-a189-551667c5dcff.png"
  },
  {
    id: "immune-supplements",
    question: "Você costuma tomar algo para fortalecer a imunidade? (ex: vitaminas, shots naturais, suplementos...)",
    type: "options" as const,
    options: [
      { value: "never", label: "Nunca", points: 1 },
      { value: "sometimes", label: "Já tomei algumas vezes, mas não tenho constância", points: 2 },
      { value: "regularly", label: "Sim, tenho esse cuidado", points: 3 },
    ],
    image: "public/lovable-uploads/91eb90b2-de08-4e5f-b41f-2186a4e48d3b.png"
  },
];

interface QuizProps {
  startWithEmail?: string;
}

const Quiz: React.FC<QuizProps> = ({ startWithEmail = "" }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showIntro, setShowIntro] = useState(startWithEmail ? false : true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: { value: string; points: number } }>({});
  const [email, setEmail] = useState(startWithEmail);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");
  const isMobile = useIsMobile();

  // Extract UTM parameters from URL
  const getUtmParams = () => {
    const searchParams = new URLSearchParams(location.search);
    const utmParams: Record<string, string> = {};
    
    // Common UTM parameters
    const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
    
    utmKeys.forEach(key => {
      const value = searchParams.get(key);
      if (value) {
        utmParams[key] = value;
      }
    });
    
    return utmParams;
  };

  const sendEmailWebhook = async (email: string) => {
    try {
      const utmParams = getUtmParams();
      
      await fetch(EMAIL_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          ...utmParams,
          timestamp: new Date().toISOString(),
          source: 'quiz_email_submission'
        }),
        mode: 'no-cors' // Using no-cors to handle CORS restrictions
      });
      
      console.log('Email webhook sent successfully');
    } catch (error) {
      console.error('Error sending email webhook:', error);
      toast.error('Houve um erro ao processar seu e-mail, mas você pode continuar o quiz.');
    }
  };

  const sendQuizCompletionWebhook = async (email: string, score: number, resultType: string) => {
    try {
      await fetch(QUIZ_COMPLETION_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          score,
          resultType,
          answers,
          timestamp: new Date().toISOString(),
          source: 'quiz_completion'
        }),
        mode: 'no-cors' // Using no-cors to handle CORS restrictions
      });
      
      console.log('Quiz completion webhook sent successfully');
    } catch (error) {
      console.error('Error sending quiz completion webhook:', error);
      // Continue with navigation even if webhook fails
    }
  };

  const handleStart = async (emailInput: string) => {
    setEmail(emailInput);
    setShowIntro(false);
    
    // Send email webhook when user starts the quiz
    await sendEmailWebhook(emailInput);
  };

  const handleSelectOption = (questionId: string, value: string, points: number) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: { value, points },
    }));
  };

  const handleNext = async () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      // Show loading screen when calculating result on mobile
      if (isMobile) {
        setLoadingMessage("Gerando seu resultado...");
        setIsSubmitting(true);
      }
      
      // Calculate score and navigate to result
      const totalPoints = Object.values(answers).reduce(
        (sum, answer) => sum + answer.points,
        0
      );
      
      let resultType;
      if (totalPoints >= 21 && totalPoints <= 27) {
        resultType = "success"; // Imune ON!
      } else if (totalPoints >= 15 && totalPoints <= 20) {
        resultType = "warning"; // Zona de Atenção!
      } else {
        resultType = "danger"; // Imunidade em Alerta!
      }
      
      // Send quiz completion webhook
      await sendQuizCompletionWebhook(email, totalPoints, resultType);
      
      // Add a slight delay before navigation for better mobile UX
      setTimeout(() => {
        setIsSubmitting(false);
        // Navigate to the results page with the correct result type
        navigate(`/?result=${resultType}`);
      }, 2000);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    } else {
      setShowIntro(true);
    }
  };

  if (isSubmitting && loadingMessage) {
    return <LoadingScreen message={loadingMessage} />;
  }

  if (showIntro) {
    return <QuizIntro onStart={handleStart} />;
  }

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const questionId = currentQuestion.id;
  const canProceed = answers[questionId] !== undefined;

  return (
    <div className="flex flex-col w-full max-w-[700px] mx-auto">
      <Logo />
      
      <div className="mt-4 mb-6">
        <ProgressBar 
          currentStep={currentQuestionIndex + 1} 
          totalSteps={quizQuestions.length} 
        />
      </div>
      
      {isMobile && currentQuestion.image && (
        <div className="w-full h-56 mb-4 overflow-hidden">
          <img 
            src={currentQuestion.image} 
            alt="Question illustration" 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <QuizQuestion
        question={currentQuestion.question}
        type={currentQuestion.type}
        options={currentQuestion.options}
        selectedValue={answers[questionId]?.value || null}
        onSelect={(value, points) => handleSelectOption(questionId, value, points)}
      />
      
      <NavigationButtons
        onNext={handleNext}
        onPrev={handlePrev}
        canProceed={canProceed}
      />
    </div>
  );
};

export default Quiz;
