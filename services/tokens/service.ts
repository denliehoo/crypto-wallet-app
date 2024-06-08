import { ITokenDetails, apiFetchTokens } from "@/api";
import Service from "react-reservice";

interface ITokensContext {
  tokens: ITokenDetails[];
  tokensLoading: boolean;
}

const defaultContextValue: ITokensContext = {
  tokens: [],
  tokensLoading: false,
};

class TokensService extends Service<ITokensContext> {
  constructor() {
    super();
    this.context = defaultContextValue;
  }

  // API Functions
  fetchTokens = async () => {
    this.context.tokensLoading = true;
    try {
      const result = await apiFetchTokens();
      this.context.tokens = result;
    } catch (e) {
      throw e;
    } finally {
      this.context.tokensLoading = false;
    }
  };

  // Service functions
}

export const tokensService = new TokensService();
