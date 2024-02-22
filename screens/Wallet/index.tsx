import { StyleSheet, View } from "react-native";
import WalletTokens from "./tokens";
import WalletNetwork from "./network";
import WalletAccount from "./account";
const WalletScreen = () => {
  return (
    <View>
      <WalletNetwork />
      <WalletAccount />
      <WalletTokens />
    </View>
  );
};

export default WalletScreen;

const styles = StyleSheet.create({});
