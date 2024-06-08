export interface ITokenDetails {
  asset: string;
  amount: string;
  value: string;
}

export const apiFetchTokens = (): Promise<ITokenDetails[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // eslint-disable-next-line no-console
      console.log("API Submitted:");
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
];
