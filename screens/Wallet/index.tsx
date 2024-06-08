import { StyleSheet, View } from "react-native";
import WalletTokens from "./tokens";
import WalletNetwork from "./network";
import WalletAccount from "./account";
import { useEffect } from "react";
import { tokensService } from "@/services/tokens";
const WalletScreen = () => {
  useEffect(() => {
    tokensService.fetchTokens();
    // TODO: Check when useEffect is called
  }, []);

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
