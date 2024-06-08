import { ITokenDetails, apiFetchTokens } from "@/api";
import Service from "react-reservice";
import { EBottomDrawerContent } from "./enum";

interface IBottomDrawerContext {
  content: EBottomDrawerContent;
}

const defaultContextValue: IBottomDrawerContext = {
  content: EBottomDrawerContent.NULL,
};

class BottomDrawerService extends Service<IBottomDrawerContext> {
  constructor() {
    super();
    this.context = defaultContextValue;
  }

  // API Functions

  // Service functions
  changeContent = (content: EBottomDrawerContent) => {
    this.context.content = content;
  };

  hide = () => {
    this.context.content = EBottomDrawerContent.NULL;
  };
}

export const bottomDrawerService = new BottomDrawerService();
