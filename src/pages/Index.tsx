import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import LPDesktop from "@/components/landing-page/LPDesktop";
import LoadingScreen from "@/components/quiz/LoadingScreen";
import { useIsMobile } from "@/hooks/use-mobile";

// Define result card data
const resultCards = {
  success: {
    status: "success" as const,
    icon: "https://cdn.builder.io/api/v1/image/assets/2e2aac027a9a4d32a285eb7e333fa9cf/e31516efbc660cf3bc328395aa302fa9d515573b?placeholderIfAbsent=true",
    title: "Imune ON!",
    description: (
      <>
        Parabéns,{" "}
        <span className="font-bold">
          sua imunidade está em dia!
        </span>{" "}
        Seu corpo está mostrando que você tem mantido bons hábitos e
        cuidando bem da sua saúde.
      </>
    ),
    tips: [
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/2e2aac027a9a4d32a285eb7e333fa9cf/ac138dbec31241cb9b0fd64c698048fb905e830e?placeholderIfAbsent=true",
        text: "Mantenha uma alimentação equilibrada.",
      },
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/2e2aac027a9a4d32a285eb7e333fa9cf/2c12bba42edefa54febb179a0d3df9206883c054?placeholderIfAbsent=true",
        text: "Beba bastante água ao longo do dia.",
      },
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/2e2aac027a9a4d32a285eb7e333fa9cf/8b59dca174e15552c102ee80564874571f5ada52?placeholderIfAbsent=true",
        text: "Siga praticando atividade física com frequência.",
      },
    ],
    productImage: "https://cdn.builder.io/api/v1/image/assets/2e2aac027a9a4d32a285eb7e333fa9cf/79beca27cdaf2f4c9cb42e8d83d980a93773bf1f?placeholderIfAbsent=true",
    ctaTitle: "Que tal começar o dia nutrindo o corpo com vitaminas, minerais e aminoácidos?",
    ctaDescription: "Experimente o Morning Shot! Mais do que um shot matinal, Morning Shot é um lembrete diário de autocuidado, que incentiva outros hábitos saudáveis ao longo do dia.",
    bgColor: "#E0F3B3",
  },
  warning: {
    status: "warning" as const,
    icon: "https://cdn.builder.io/api/v1/image/assets/2e2aac027a9a4d32a285eb7e333fa9cf/a5db1e968f4fafa0a2851679a878cb89aa8e3dcd?placeholderIfAbsent=true",
    title: "Zona de Atenção!",
    description: (
      <>
        <span className="font-bold">
          Sua imunidade está instável
        </span>
        , e pode estar precisando de um reforço.
      </>
    ),
    tips: [
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/2e2aac027a9a4d32a285eb7e333fa9cf/ac138dbec31241cb9b0fd64c698048fb905e830e?placeholderIfAbsent=true",
        text: "Priorize alimentos ricos em fibras, vitaminas e minerais.",
      },
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/2e2aac027a9a4d32a285eb7e333fa9cf/2c12bba42edefa54febb179a0d3df9206883c054?placeholderIfAbsent=true",
        text: "Beba bastante água ao longo do dia.",
      },
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/2e2aac027a9a4d32a285eb7e333fa9cf/c7804d3f2301933032eab040eef6f15063c671a1?placeholderIfAbsent=true",
        text: "Tente manter uma rotina de sono regular.",
      },
    ],
    productImage: "https://cdn.builder.io/api/v1/image/assets/2e2aac027a9a4d32a285eb7e333fa9cf/79beca27cdaf2f4c9cb42e8d83d980a93773bf1f?placeholderIfAbsent=true",
    ctaTitle: "Comece com um hábito saboroso e prático: como incluir Morning Shot na sua rotina.",
    ctaDescription: "O seu aliado matinal que possui ingredientes selecionados que atuam auxiliando o sistema imunológico e combatendo os danos causados por radicais livres.",
    bgColor: "#FFE3B2",
  },
  danger: {
    status: "danger" as const,
    icon: "https://cdn.builder.io/api/v1/image/assets/2e2aac027a9a4d32a285eb7e333fa9cf/ae40d85b737d011c5fa697356d59193a6abc7134?placeholderIfAbsent=true",
    title: "Imunidade em Alerta!",
    description: (
      <>
        Seu corpo demonstra{" "}
        <span className="font-bold">sinais de baixa imunidade</span>
        , e o cansaço constante, gripes frequentes ou baixa disposição
        são reflexos disso.
      </>
    ),
    tips: [
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/2e2aac027a9a4d32a285eb7e333fa9cf/ac138dbec31241cb9b0fd64c698048fb905e830e?placeholderIfAbsent=true",
        text: (
          <>
            <span className="font-bold">
              Reavalie sua alimentação:
            </span>{" "}
            comece incluindo frutas cítricas, vegetais verdes e fontes
            naturais de zinco e ferro.
          </>
        ),
      },
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/2e2aac027a9a4d32a285eb7e333fa9cf/503ee7c7a1ce0e90c45235aacc91547a4a2bcaa8?placeholderIfAbsent=true",
        text: (
          <>
            <span className="font-bold">Cuide da mente:</span> o
            estresse prolongado pode abalar (muito!) sua imunidade.
          </>
        ),
      },
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/2e2aac027a9a4d32a285eb7e333fa9cf/c7804d3f2301933032eab040eef6f15063c671a1?placeholderIfAbsent=true",
        text: (
          <>
            <span className="font-bold">Dê atenção ao sono:</span>{" "}
            noites mal dormidas podem enfraquecer suas defesas.
          </>
        ),
      },
    ],
    productImage: "https://cdn.builder.io/api/v1/image/assets/2e2aac027a9a4d32a285eb7e333fa9cf/79beca27cdaf2f4c9cb42e8d83d980a93773bf1f?placeholderIfAbsent=true",
    ctaTitle: "Comece com um hábito savoroso e prático: como incluir Morning Shot na sua rotina.",
    ctaDescription: "Experimente o Morning Shot! Uma fórmula rica em vitaminas, minerais e aminoácidos que ajudam a fortalecer a imunidade de forma prática e saborosa",
    bgColor: "#FFCED9",
  },
};

const Index: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const resultType = searchParams.get("result") as "success" | "warning" | "danger" | null;
  const [loading, setLoading] = useState(true);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Redirect to quiz if no result parameter is present
    if (!resultType) {
      navigate('/quiz');
      return;
    }

    // Simulate loading for better UX
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, [resultType, navigate]);

  // If being redirected, don't render content
  if (!resultType) {
    return null;
  }

  if (loading) {
    return <LoadingScreen message="Gerando seu resultado..." />;
  }

  return (
    <div className="min-h-screen">
      <LPDesktop 
        showAllResults={false} 
        resultType={resultType} 
        resultCards={resultCards} 
      />
    </div>
  );
};

export default Index;
