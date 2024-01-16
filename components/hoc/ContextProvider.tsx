import React from "react";
import BottomDrawerContextProvider from "../../store/context/bottom-drawer-context";

const ContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <BottomDrawerContextProvider>{children}</BottomDrawerContextProvider>;
};

export default ContextProvider;
