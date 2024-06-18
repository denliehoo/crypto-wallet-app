import { useService } from "react-reservice";
import { tokensService } from "./service";

export const useTokens = () =>
  useService(tokensService, ({ balances, balancesLoading }) => ({
    balances,
    balancesLoading,
  }));

export const useImportToken = () =>
  useService(tokensService, ({ tokenDetails, tokenDetailsLoading }) => ({
    tokenDetails,
    tokenDetailsLoading,
  }));
