import { FlatList, View, ActivityIndicator } from "react-native";
import TokenItem from "./token-item";
import { useTokens } from "@/services/tokens";

const WalletTokens = () => {
  const { balances, tokensLoading } = useTokens();

  const tokensData = balances.map((details) => ({
    ...details,
    onPress: () => console.log("pressed"),
  }));

  if (tokensLoading) {
    return <ActivityIndicator size="large" color="black" />;
  }

  return (
    <View>
      <FlatList
        data={tokensData}
        renderItem={({ item }) => <TokenItem {...item} />}
      />
    </View>
  );
};

export default WalletTokens;
