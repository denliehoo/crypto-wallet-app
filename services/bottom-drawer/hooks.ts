import { useService } from "react-reservice";
import { bottomDrawerService } from "./service";
import { EBottomDrawerContent } from "./enum";

export const useBottomDrawer = () =>
  useService(bottomDrawerService, ({ content }) => {
    const visible = content !== EBottomDrawerContent.NULL;
    return { content, visible };
  });
