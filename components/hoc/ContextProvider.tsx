import BottomDrawerContextProvider from "@/store/context/bottom-drawer-context";
import React from "react";

const ContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <BottomDrawerContextProvider>{children}</BottomDrawerContextProvider>;
};

export default ContextProvider;
