
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";
import ProgressBar from "./ProgressBar";
import QuizQuestion from "./QuizQuestion";
import NavigationButtons from "./NavigationButtons";
import QuizIntro from "./QuizIntro";

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
  },
  {
    id: "energy-level",
    question: "Como está sua energia e disposição no dia-a-dia?",
    type: "options" as const,
    options: [
      { value: "low", label: "Baixa, sinto cansaço frequente", points: 1 },
      { value: "normal", label: "Normal, mas oscila bastante", points: 2 },
      { value: "high", label: "Boa, me sinto produtivo(a) e ativo(a)", points: 3 },
    ],
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
  },
];

const Quiz: React.FC = () => {
  const navigate = useNavigate();
  const [showIntro, setShowIntro] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: { value: string; points: number } }>({});
  const [email, setEmail] = useState("");

  const handleStart = (email: string) => {
    setEmail(email);
    setShowIntro(false);
  };

  const handleSelectOption = (questionId: string, value: string, points: number) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: { value, points },
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      // Calculate score and navigate to result
      const totalPoints = Object.values(answers).reduce(
        (sum, answer) => sum + answer.points,
        0
      );
      
      let resultType;
      if (totalPoints >= 12 && totalPoints <= 15) {
        resultType = "success"; // Imune ON!
      } else if (totalPoints >= 8 && totalPoints <= 11) {
        resultType = "warning"; // Zona de Atenção!
      } else {
        resultType = "danger"; // Imunidade em Alerta!
      }
      
      // Navigate to the results page
      navigate("/?result=" + resultType);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    } else {
      setShowIntro(true);
    }
  };

  if (showIntro) {
    return <QuizIntro onStart={handleStart} />;
  }

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const questionId = currentQuestion.id;
  const canProceed = answers[questionId] !== undefined;

  return (
    <div className="flex flex-col w-full max-w-[700px] mx-auto">
      <Logo />
      
      <div className="mt-4 mb-10">
        <ProgressBar 
          currentStep={currentQuestionIndex + 1} 
          totalSteps={quizQuestions.length} 
        />
      </div>
      
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
