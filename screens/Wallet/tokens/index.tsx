import { FlatList, ActivityIndicator } from "react-native";
import TokenItem from "./token-item";
import { useTokens } from "@/services/tokens";
import styled from "styled-components/native";
import AddToken from "./add-token";

const WalletTokens = () => {
  const { balances, balancesLoading } = useTokens();

  const tokensData = balances.map((details) => ({
    ...details,
    onPress: () => console.log("pressed"),
  }));

  if (balancesLoading) {
    return <ActivityIndicator size="large" color="black" />;
  }

  return (
    <>
      <StyledFlatList
        data={tokensData}
        // TODO: Fix the TS Error
        renderItem={({ item }) => <TokenItem {...item} />}
        // ListFooterComponent={<AddToken />}
      />
      <AddToken />
    </>
  );
};

export default WalletTokens;

// TODO: find a way such that the we can combine the flatlist and the add token portion. Currently, it is only showing because there is enough height. If we remove the height styling, the add token portion will be pushed below
const StyledFlatList = styled.FlatList`
  height: 500px;
`;
