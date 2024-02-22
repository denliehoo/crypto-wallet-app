import { StyleSheet, Text, View } from "react-native";
const WalletAccount = () => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.card}>
          <View style={styles.accountContainer}>
            <Text style={styles.accountText}>Account 1</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.addressContainer}>
            <Text style={styles.addressLabel}>Address:</Text>
            <View style={styles.addressTextContainer}>
              <Text style={styles.address}>0x123E...43A</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default WalletAccount;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },
  card: {
    borderWidth: 2,
    borderColor: "grey",
    width: 350,
    height: 100,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  divider: {
    borderWidth: 1,
    borderColor: "grey",
    marginTop: 10,
    marginBottom: 10,
  },
  accountContainer: {},
  accountText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  addressContainer: {
    flexDirection: "row",
    gap: 5,
  },
  addressLabel: {
    fontWeight: "bold",
  },
  addressTextContainer: {
    backgroundColor: "blue",
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  address: { color: "white" },
});
