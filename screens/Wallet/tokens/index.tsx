import { FlatList, StyleSheet, Text, View } from "react-native";
import TokenItem from "./token-item";
import { useContext } from "react";
import { TokensContext } from "@/store/context/tokens";
const WalletTokens = () => {
  const tokensCtx = useContext(TokensContext);
  const { tokens, tokensLoading } = tokensCtx;

  const tokensData = tokens.map((token) => ({
    ...token,
    onPress: () => console.log("pressed"),
  }));

  if (tokensLoading) {
    // TODO: Create a loading spinner
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
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
