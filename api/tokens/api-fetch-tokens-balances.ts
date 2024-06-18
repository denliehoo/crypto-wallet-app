export interface IFetchTokensParams {
  network: string;
  tokens: string[];
}

export interface ITokenBalanceDetails {
  asset: string;
  amount: string;
  value: string;
}

export const apiFetchTokensBalances = (
  params: IFetchTokensParams
): Promise<ITokenBalanceDetails[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // eslint-disable-next-line no-console
      console.log("API Submitted:");
      // simulate
      const { tokens } = params;
      const res = tokens.map(() => ({
        asset: "ETH",
        amount: "0.123123",
        value: "200.12",
      }));
      resolve(DUMMY_TOKENS);
    }, 500); // Simulating a 0.5 second delay
  });
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
