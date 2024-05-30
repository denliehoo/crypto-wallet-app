import { createContext } from "react";
import { TokensContextProps } from "./interface";

export const TokensContext = createContext<TokensContextProps>({
  tokens: [],
  tokensLoading: false,
  fetchTokens: () => {},
});
