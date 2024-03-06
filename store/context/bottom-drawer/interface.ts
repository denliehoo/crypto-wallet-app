import { EBottomDrawerContent } from "./enum";

export interface BottomDrawerContextProps {
  visible: boolean;
  show: (content: EBottomDrawerContent) => void;
  hide: () => void;
  content: EBottomDrawerContent;
  changeContent: (content: EBottomDrawerContent) => void;
}
