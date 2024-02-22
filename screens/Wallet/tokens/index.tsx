import { FlatList, StyleSheet, Text, View } from "react-native";
import TokenItem from "./token-item";
const WalletTokens = () => {
  return (
    <View>
      <FlatList
        data={DUMMY_DATA}
        renderItem={({ item }) => <TokenItem {...item} />}
      />
    </View>
  );
};

export default WalletTokens;

const DUMMY_DATA = [
  {
    asset: "BNB",
    amount: 0.123123,
    value: 200.12,
    onPress: () => console.log("pressed"),
  },
  {
    asset: "BNB",
    amount: 0.123123,
    value: 200.12,
    onPress: () => console.log("pressed"),
  },
  {
    asset: "BNB",
    amount: 0.123123,
    value: 200.12,
    onPress: () => console.log("pressed"),
  },
  {
    asset: "BNB",
    amount: 0.123123,
    value: 200.12,
    onPress: () => console.log("pressed"),
  },
  {
    asset: "BNB",
    amount: 0.123123,
    value: 200.12,
    onPress: () => console.log("pressed"),
  },
  {
    asset: "BNB",
    amount: 0.123123,
    value: 200.12,
    onPress: () => console.log("pressed"),
  },
  {
    asset: "BNB",
    amount: 0.123123,
    value: 200.12,
    onPress: () => console.log("pressed"),
  },
  {
    asset: "BNB",
    amount: 0.123123,
    value: 200.12,
    onPress: () => console.log("pressed"),
  },
  {
    asset: "BNB",
    amount: 0.123123,
    value: 200.12,
    onPress: () => console.log("pressed"),
  },
  {
    asset: "BNB",
    amount: 0.123123,
    value: 200.12,
    onPress: () => console.log("pressed"),
  },
  {
    asset: "BNB",
    amount: 0.123123,
    value: 200.12,
    onPress: () => console.log("pressed"),
  },
  {
    asset: "BNB",
    amount: 0.123123,
    value: 200.12,
    onPress: () => console.log("pressed"),
  },
  {
    asset: "BNB",
    amount: 0.123123,
    value: 200.12,
    onPress: () => console.log("pressed"),
  },
  {
    asset: "BNB",
    amount: 0.123123,
    value: 200.12,
    onPress: () => console.log("pressed"),
  },
  {
    asset: "BNB",
    amount: 0.123123,
    value: 200.12,
    onPress: () => console.log("pressed"),
  },
  {
    asset: "BNB",
    amount: 0.123123,
    value: 200.12,
    onPress: () => console.log("pressed"),
  },
  {
    asset: "BNB",
    amount: 0.123123,
    value: 200.12,
    onPress: () => console.log("pressed"),
  },
];
