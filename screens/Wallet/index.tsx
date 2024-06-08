import { StyleSheet, View } from "react-native";
import WalletTokens from "./tokens";
import WalletNetwork from "./network";
import WalletAccount from "./account";
import { useContext, useEffect } from "react";
import { TokensContext } from "@/store/context/tokens";
const WalletScreen = () => {
  const tokensCtx = useContext(TokensContext);

  useEffect(() => {
    tokensCtx.fetchTokens();
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
