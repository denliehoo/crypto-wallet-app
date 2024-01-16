import React, { createContext, useState, ReactNode } from "react";

export enum EBottomDrawerContent {
  TRANSACT_DRAWER_OPTIONS,
  RECEIVE,
  CONNECT,
}

interface BottomDrawerContextProps {
  visible: boolean;
  show: (content: EBottomDrawerContent) => void;
  hide: () => void;
  content: EBottomDrawerContent;
  changeContent: (content: EBottomDrawerContent) => void;
}

export const BottomDrawerContext = createContext<BottomDrawerContextProps>({
  visible: false,
  show: (content: EBottomDrawerContent) => {},
  hide: () => {},
  content: EBottomDrawerContent.TRANSACT_DRAWER_OPTIONS,
  changeContent: (content: EBottomDrawerContent) => {},
});

const BottomDrawerContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [visible, setVisible] = useState(false);
  const [content, setContent] = useState(
    EBottomDrawerContent.TRANSACT_DRAWER_OPTIONS
  );

  const show = (content: EBottomDrawerContent) => {
    setContent(content);
    setVisible(true);
  };
  const hide = () => {
    setVisible(false);
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

export default BottomDrawerContextProvider;
