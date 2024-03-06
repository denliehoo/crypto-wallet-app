import { ReactNode, useState } from "react";
import { EBottomDrawerContent } from "./enum";
import { BottomDrawerContextProps } from "./interface";
import { BottomDrawerContext } from "./context";

export const BottomDrawerContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [content, setContent] = useState(EBottomDrawerContent.NULL);

  const visible = content !== EBottomDrawerContent.NULL;

  const show = (content: EBottomDrawerContent) => {
    setContent(content);
  };
  const hide = () => {
    setContent(EBottomDrawerContent.NULL);
  };

  const changeContent = (content: EBottomDrawerContent) => setContent(content);

  const value: BottomDrawerContextProps = {
    visible,
    show,
    hide,
    content,
    changeContent,
  };

  return (
    <BottomDrawerContext.Provider value={value}>
      {children}
    </BottomDrawerContext.Provider>
  );
};
