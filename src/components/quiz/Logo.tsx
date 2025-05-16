
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const Logo: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`${isMobile ? "flex justify-center py-2" : "py-4"}`}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/2e2aac027a9a4d32a285eb7e333fa9cf/ba32556d964df1022d3f2db86164802b682ecb9a?placeholderIfAbsent=true"
        alt="Sublyme"
        className={`${isMobile ? "w-32" : "w-32"}`}
      />
    </div>
  );
};

export default Logo;
