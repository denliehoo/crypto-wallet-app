import {
  IFetchTokensParams,
  ITokenBalanceDetails,
  apiFetchTokensBalances,
} from "@/api";
import Service from "react-reservice";

interface ITokensContext {
  balances: ITokenBalanceDetails[];
  tokensLoading: boolean;
}

const defaultContextValue: ITokensContext = {
  balances: [],
  tokensLoading: false,
};

class TokensService extends Service<ITokensContext> {
  constructor() {
    super();
    this.context = defaultContextValue;
  }

  // API Functions
  fetchTokensBalances = async (params: IFetchTokensParams) => {
    this.context.tokensLoading = true;
    try {
      const result = await apiFetchTokensBalances(params);
      this.context.balances = result;
    } catch (e) {
      throw e;
    } finally {
      this.context.tokensLoading = false;
    }
  };

  // Service functions
}

export const tokensService = new TokensService();
