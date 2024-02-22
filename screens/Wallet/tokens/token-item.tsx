import { Pressable, StyleSheet, Text, View } from "react-native";

import Avatar from "@/components/Avatar";
import EthLogo from "@/assets/logos/eth-logo.png";
import { FC } from "react";

interface ITokenItemProps {
  onPress: () => void;
  asset: string;
  amount: number;
  value: number;
}

const TokenItem: FC<ITokenItemProps> = ({ onPress, asset, amount, value }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View>
        <Avatar src={EthLogo} />
      </View>
      <View style={styles.detailsContainer}>
        <View>
          <Text style={styles.boldText}>{asset}</Text>
          <Text>
            {amount} {asset}
          </Text>
        </View>
        <View>
          <Text style={styles.boldText}>${value}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default TokenItem;

const styles = StyleSheet.create({
  container: {
    height: 64,
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    marginBottom: 8,
  },
  detailsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    marginLeft: 4,
  },
  boldText: {
    fontSize: 18,
    fontWeight: "500",
  },
});
