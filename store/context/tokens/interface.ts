export interface ITokenDetails {
  asset: string;
  amount: string;
  value: string;
}

export interface TokensContextProps {
  tokens: ITokenDetails[];
  tokensLoading: boolean;
  fetchTokens: () => void;
}
