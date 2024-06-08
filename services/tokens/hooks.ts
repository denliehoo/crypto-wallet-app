import { useService } from "react-reservice";
import { tokensService } from "./service";

export const useTokens = () =>
  useService(tokensService, ({ tokens, tokensLoading }) => ({
    tokens,
    tokensLoading,
  }));
