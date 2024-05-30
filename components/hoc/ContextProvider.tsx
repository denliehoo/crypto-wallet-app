import { BottomDrawerContextProvider } from "@/store/context/bottom-drawer";
import { TokensContextProvider } from "@/store/context/tokens";
import React from "react";

const ContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <BottomDrawerContextProvider>
      <TokensContextProvider>{children}</TokensContextProvider>
    </BottomDrawerContextProvider>
  );
};

export default ContextProvider;
