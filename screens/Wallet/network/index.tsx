import { StyleSheet, Text, View } from "react-native";
const WalletNetwork = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Sepolia Testnet</Text>
      </View>
    </View>
  );
};

export default WalletNetwork;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 4,
    marginBottom: 10,
  },
  textContainer: {
    backgroundColor: "black",
    marginTop: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
    paddingVertical: 8,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
