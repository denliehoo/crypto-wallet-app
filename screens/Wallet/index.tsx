import { StyleSheet, View } from "react-native";
import WalletTokens from "./tokens";
import WalletNetwork from "./network";
import WalletAccount from "./account";
import { useEffect } from "react";
import { tokensService } from "@/services/tokens";
const WalletScreen = () => {
  useEffect(() => {
    tokensService.fetchTokensBalances({
      network: "Sepolia",
      tokens: ["0x", "0x"],
    });
    // TODO: Check when useEffect is called
  }, []);

  console.log(
    process.env.EXPO_PUBLIC_PUBLIC_KEY,
    process.env.EXPO_PUBLIC_PRIVATE_KEY
  );

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
