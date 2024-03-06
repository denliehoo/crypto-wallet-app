import { createContext } from "react";
import { BottomDrawerContextProps } from "./interface";
import { EBottomDrawerContent } from "./enum";

export const BottomDrawerContext = createContext<BottomDrawerContextProps>({
  visible: false,
  show: () => {},
  hide: () => {},
  content: EBottomDrawerContent.NULL,
  changeContent: () => {},
});
