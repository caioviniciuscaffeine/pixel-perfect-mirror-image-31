import React from "react";
import ResultCard from "./ResultCard";
import CTAButton from "./CTAButton";
import SignalCard from "./SignalCard";
import TopicItem from "./TopicItem";

export const LPDesktop: React.FC = () => {
  return (
    <div className="overflow-hidden rounded-2xl">
      <header className="items-center flex w-full flex-col justify-center bg-white p-4 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/2e2aac027a9a4d32a285eb7e333fa9cf/af9bbf66fcfa9596dd63154d939f52e3a7148cdd?placeholderIfAbsent=true"
          className="aspect-[4.67] object-contain w-28 max-w-full"
          alt="Logo"
        />
      </header>

      <section className="justify-center items-stretch flex w-full flex-col bg-[#F04E98] pt-10 pb-[88px] px-8 max-md:max-w-full max-md:px-5">
        <ResultCard
          status="success"
          icon="https://cdn.builder.io/api/v1/image/assets/2e2aac027a9a4d32a285eb7e333fa9cf/e31516efbc660cf3bc328395aa302fa9d515573b?placeholderIfAbsent=true"
          title="Imune ON!"
          description={
            <>
              Parabéns,{" "}
              <span className="font-bold">
                sua imunidade está em dia!
              </span>
              Seu corpo está mostrando que você tem mantido bons hábitos e
              cuidando bem da sua saúde.
            </>
          }
          tips={[
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
          ]}
          productImage="https://cdn.builder.io/api/v1/image/assets/2e2aac027a9a4d32a285eb7e333fa9cf/79beca27cdaf2f4c9cb42e8d83d980a93773bf1f?placeholderIfAbsent=true"
          ctaTitle="Que tal começar o dia nutrindo o corpo com vitaminas, minerais e aminoácidos?"
          ctaDescription="Experimente o Morning Shot! Mais do que um shot matinal, Morning Shot é um lembrete diário de autocuidado, que incentiva outros hábitos saudáveis ao longo do dia."
          bgColor="#E0F3B3"
        />
      </section>

      <section className="justify-center items-stretch flex w-full flex-col bg-[#F04E98] pt-10 pb-[88px] px-8 max-md:max-w-full max-md:px-5">
        <ResultCard
          status="warning"
          icon="https://cdn.builder.io/api/v1/image/assets/2e2aac027a9a4d32a285eb7e333fa9cf/a5db1e968f4fafa0a2851679a878cb89aa8e3dcd?placeholderIfAbsent=true"
          title="Zona de Atenção!"
          description={
            <>
              <span className="font-bold">
                Sua imunidade está instável
              </span>
              , e pode estar precisando de um reforço.
            </>
          }
          tips={[
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
          ]}
          productImage="https://cdn.builder.io/api/v1/image/assets/2e2aac027a9a4d32a285eb7e333fa9cf/79beca27cdaf2f4c9cb42e8d83d980a93773bf1f?placeholderIfAbsent=true"
          ctaTitle="Comece com um hábito saboroso e prático: como incluir Morning Shot na sua rotina.."
          ctaDescription="O seu aliado matinal que possui ingredientes selecionados que atuam auxiliando o sistema imunológico e combatendo os danos causados por radicais livres."
          bgColor="#FFE3B2"
        />
      </section>

      <section className="justify-center items-stretch flex w-full flex-col bg-[#F04E98] pt-10 pb-[88px] px-8 max-md:max-w-full max-md:px-5">
        <ResultCard
          status="danger"
          icon="https://cdn.builder.io/api/v1/image/assets/2e2aac027a9a4d32a285eb7e333fa9cf/ae40d85b737d011c5fa697356d59193a6abc7134?placeholderIfAbsent=true"
          title="Imunidade em Alerta!"
          description={
            <>
              Seu corpo demonstra{" "}
              <span className="font-bold">sinais de baixa imunidade</span>
              , e o cansaço constante, gripes frequentes ou baixa disposição
              são reflexos disso.
            </>
          }
          tips={[
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
          ]}
          productImage="https://cdn.builder.io/api/v1/image/assets/2e2aac027a9a4d32a285eb7e333fa9cf/79beca27cdaf2f4c9cb42e8d83d980a93773bf1f?placeholderIfAbsent=true"
          ctaTitle="Comece com um hábito saboroso e prático: como incluir Morning Shot na sua rotina.."
          ctaDescription="Experimente o Morning Shot! Uma fórmula rica em vitaminas, minerais e aminoácidos que ajudam a fortalecer a imunidade de forma prática e saborosa"
          bgColor="#FFCED9"
        />
      </section>

      <section className="shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex min-h-[600px] w-full flex-col overflow-hidden items-center justify-center px-8 py-[136px] max-md:max-w-full max-md:px-5 max-md:py-[100px] bg-[#F04E98]">
        <div className="relative flex w-[560px] max-w-full flex-col items-center text-center">
          <div className="absolute z-0 flex min-h-[42px] w-[155px] max-w-full h-[42px] bg-[#97D700] right-2 top-[38px]" />
          <div className="z-0 flex w-full flex-col items-center text-white font-semibold">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/2e2aac027a9a4d32a285eb7e333fa9cf/ba32556d964df1022d3f2db86164802b682ecb9a?placeholderIfAbsent=true"
              className="aspect-[4.67] object-contain w-28 max-w-full"
              alt="Logo"
            />
            <h1 className="self-stretch text-white text-[40px] leading-[1.2] mt-2 max-md:max-w-full">
              A imunidade é o seu escudo.
            </h1>
            <h2 className="text-white text-[32px] leading-none mt-2">
              Cuide dela todos os dias.
            </h2>
          </div>
          <p className="text-white text-2xl font-normal leading-6 z-0 mt-8 max-md:max-w-full">
            Gripes recorrentes, cansaço, falta de foco?
            <br />
            Talvez seu corpo esteja pedindo ajuda.
          </p>
        </div>
        <CTAButton 
          text="Conheça Morning Shot" 
          bgColor="#FFF" 
          textColor="#F04E98" 
          className="w-[441px] max-w-full mt-16 max-md:mt-10" 
        />
      </section>

      <section className="items-stretch flex w-full flex-col bg-[#F6F0D8] px-8 py-[116px] max-md:max-w-full max-md:px-5 max-md:py-[100px]">
        <div className="flex w-full flex-col items-center text-center max-md:max-w-full">
          <h2 className="text-[#212529] text-[40px] font-semibold leading-[48px] w-[480px] max-md:max-w-full">
            Sinais que talvez você esteja ignorando...
          </h2>
          <p className="text-[#495057] text-xl font-normal leading-6 w-[408px] mt-6">
            Esses sintomas podem parecer pequenos, mas são o jeito do seu corpo
            pedir ajuda.
          </p>
        </div>
        <div className="flex w-full items-center gap-[40px_50px] justify-center flex-wrap mt-16 max-md:max-w-full max-md:mt-10">
          <SignalCard
            icon="https://cdn.builder.io/api/v1/image/assets/2e2aac027a9a4d32a285eb7e333fa9cf/f5a32fa3ba738585fb7469d3e42dba57b9e15cb5?placeholderIfAbsent=true"
            title="Cansaço constante"
          />
          <SignalCard
            icon="https://cdn.builder.io/api/v1/image/assets/2e2aac027a9a4d32a285eb7e333fa9cf/cbaf5bbc49054bc42668690c7d42e96ae6e0e54f?placeholderIfAbsent=true"
            title="Gripes frequentes"
          />
          <SignalCard
            icon="https://cdn.builder.io/api/v1/image/assets/2e2aac027a9a4d32a285eb7e333fa9cf/ffb4eddb0846765370ca26777ad9791ba356d922?placeholderIfAbsent=true"
            title="Digestãolenta"
          />
          <SignalCard
            icon="https://cdn.builder.io/api/v1/image/assets/2e2aac027a9a4d32a285eb7e333fa9cf/041689fce194a457fdab3c2c217abda1be2277ad?placeholderIfAbsent=true"
            title="Falta defoco"
          />
        </div>
        <CTAButton 
          text="Conheça Morning Shot" 
          className="self-center w-[441px] max-w-full mt-16 max-md:mt-10" 
        />
      </section>

      <section className="items-center flex w-full gap-[40px_56px] flex-wrap bg-[#F8F9FA] px-8 py-[116px] max-md:max-w-full max-md:px-5 max-md:py-[100px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/2e2aac027a9a4d32a285eb7e333fa9cf/9fc849eaf04f53e2e8f8bf731b1d3bdd941605e5?placeholderIfAbsent=true"
          className="aspect-[0.79] object-contain w-[545px] self-stretch min-w-60 my-auto max-md:max-w-full"
          alt="Healthy lifestyle"
        />
        <div className="self-stretch min-w-60 flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
          <div className="relative flex w-full flex-col text-5xl font-semibold leading-none max-md:max-w-full max-md:text-[40px]">
            <h2 className="text-[#F04E98] text-center z-0 max-md:max-w-full max-md:text-[40px]">
              Não existe fórmula mágica,
            </h2>
            <div className="absolute z-0 flex min-h-[45px] w-[316px] max-w-full h-[45px] bg-[#97D700] right-[101px] bottom-px" />
            <h3 className="self-stretch text-white z-0 mt-6 max-md:max-w-full max-md:text-[40px]">
              <span className="text-[#F04E98]">Mas existem</span> bons
              hábitos.
            </h3>
          </div>
          <div className="flex w-full flex-col mt-8 max-md:max-w-full">
            <p className="text-[#495057] text-center text-2xl font-normal leading-none">
              Fortalecer a imunidade é sobre:
            </p>
            <div className="flex flex-col items-stretch mt-6">
              <TopicItem
                icon="https://cdn.builder.io/api/v1/image/assets/2e2aac027a9a4d32a285eb7e333fa9cf/7c175259dd782a6a072a7aa58bc86090b59588bc?placeholderIfAbsent=true"
                text="Ter mais disposição no dia a dia."
              />
              <TopicItem
                icon="https://cdn.builder.io/api/v1/image/assets/2e2aac027a9a4d32a285eb7e333fa9cf/a625c751de2f376f0968a076362639bbddb0143a?placeholderIfAbsent=true"
                text="Sentir-se bem de corpo e mente."
                className="mt-4"
              />
              <TopicItem
                icon="https://cdn.builder.io/api/v1/image/assets/2e2aac027a9a4d32a285eb7e333fa9cf/22f362e00f67c9c6fcb49d3af59979a5c972b071?placeholderIfAbsent=true"
                text="Viver com mais vitalidade."
                className="mt-4"
              />
            </div>
          </div>
          <CTAButton 
            text="Conheça Morning Shot" 
            className="w-[441px] max-w-full mt-8" 
          />
        </div>
      </section>

      <section className="items-stretch flex w-full flex-col bg-[#F6F0D8] pt-[88px] pb-[200px] px-8 max-md:max-w-full max-md:pb-[100px] max-md:px-5">
        <div className="flex w-full flex-col items-center max-md:max-w-full">
          <div className="flex w-[214px] max-w-full flex-col overflow-hidden items-center px-[43px] max-md:px-5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/2e2aac027a9a4d32a285eb7e333fa9cf/a96f20a9dc8b71166531828367389ea553561573?placeholderIfAbsent=true"
              className="aspect-[1.69] object-contain w-[78px]"
              alt="Logo"
            />
          </div>
          <div className="w-[538px] max-w-full text-[40px] text-[#212529] font-semibold text-center leading-[1.2] mt-4">
            <h2 className="text-[#212529] max-md:max-w-full">
              Conheça Morning Shot:
            </h2>
            <h3 className="text-[#212529] mt-1 max-md:max-w-full">
              O seu primeiro hábito do dia.
            </h3>
          </div>
          <p className="text-[#495057] text-center text-xl font-normal leading-6 w-[528px] mt-4 max-md:max-w-full">
            Mais do que um shot matinal, Morning Shot é um lembrete diário de
            autocuidado, que incentiva outros hábitos saudáveis ao longo do dia.
          </p>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/2e2aac027a9a4d32a285eb7e333fa9cf/a871d52f041ead3dc0d938c04494578ab9077686?placeholderIfAbsent=true"
          className="aspect-[2.81] object-contain w-full gap-[-30px] mt-10 max-md:max-w-full"
          alt="Product showcase"
        />
        <CTAButton 
          text="Quero saber mais!" 
          className="self-center w-[370px] max-w-full mt-10" 
        />
      </section>
    </div>
  );
};

export default LPDesktop;