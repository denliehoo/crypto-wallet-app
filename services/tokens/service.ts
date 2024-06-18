import {
  IFetchTokensParams,
  ITokenBalanceDetails,
  apiFetchTokensBalances,
} from "@/api";
import Service from "react-reservice";

export interface ITokenDetails {
  address: string;
  symbol: string;
  decimals: string;
}

export interface ITokenDetailsParams {
  address: string;
}

interface ITokensContext {
  // TODO: Refactor all out to individual services for better maintainability
  // Balances in wallet
  balances: ITokenBalanceDetails[];
  balancesLoading: boolean;

  // add import
  tokenDetails: ITokenDetails | undefined;
  tokenDetailsLoading: boolean;

  // tokens currently saved on device
  // TODO: get the tokens from the "localStorage" of react-native. Upon initialisation, we check the "localStorage" for it. Then, upon successful import, we add it to the localStorage and to the tokens array
  tokens: string[];
  tokensLoading: boolean;
}

const defaultContextValue: ITokensContext = {
  balances: [],
  balancesLoading: false,
  tokenDetails: undefined,
  tokenDetailsLoading: false,
  tokens: [],
  tokensLoading: false,
};

class TokensService extends Service<ITokensContext> {
  constructor() {
    super();
    this.context = defaultContextValue;
  }

  // API Functions
  fetchTokensBalances = async (params: IFetchTokensParams) => {
    this.context.balancesLoading = true;
    try {
      const result = await apiFetchTokensBalances(params);
      this.context.balances = result;
    } catch (e) {
      throw e;
    } finally {
      this.context.balancesLoading = false;
    }
  };

  // Service functions
  fetchTokenDetails = async (params: ITokenDetailsParams) => {
    this.context.tokenDetailsLoading = true;
    try {
      // simulate
      const { address } = params;

      // TODO: get the token using web3js + a node and then get the contract details
      this.context.tokenDetails = {
        address,
        symbol: "USDT",
        decimals: "6",
      };
    } catch (e) {
      throw e;
    } finally {
      this.context.tokenDetailsLoading = false;
    }
  };
}

export const tokensService = new TokensService();
