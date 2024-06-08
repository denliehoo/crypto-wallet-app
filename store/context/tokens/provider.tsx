import { ReactNode, useState } from "react";
import { ITokenDetails, TokensContextProps } from "./interface";
import { TokensContext } from "./context";

export const TokensContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [tokensLoading, setTokensLoading] = useState(false);
  const [tokens, setTokens] = useState<ITokenDetails[]>([]);

  const fetchTokens = () => {
    setTokensLoading(true);
    // TODO call API in the future to get balances
    setTimeout(() => {
      setTokens(DUMMY_TOKENS);
      setTokensLoading(false);
    }, 2000);
  };

  const value: TokensContextProps = {
    tokens,
    tokensLoading,
    fetchTokens,
  };

  return (
    <TokensContext.Provider value={value}>{children}</TokensContext.Provider>
  );
};

const DUMMY_TOKENS = [
  {
    asset: "BNB",
    amount: "0.123123",
    value: "200.12",
  },
  {
    asset: "BNB",
    amount: "0.123123",
    value: "200.12",
  },
  {
    asset: "BNB",
    amount: "0.123123",
    value: "200.12",
  },
  {
    asset: "BNB",
    amount: "0.123123",
    value: "200.12",
  },
  {
    asset: "BNB",
    amount: "0.123123",
    value: "200.12",
  },
  {
    asset: "BNB",
    amount: "0.123123",
    value: "200.12",
  },
];
