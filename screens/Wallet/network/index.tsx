import DropDownSelect from "@/components/drop-down-select";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const WalletNetwork = () => {
  const [value, setValue] = useState("SEPOLIA");
  const [items, setItems] = useState([
    { label: "Sepolia Testnet", value: "SEPOLIA" },
    { label: "Binance Smart Chain", value: "BSC" },
    { label: "Ethereum Network", value: "ETH" },
  ]);
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.dropdownContainer}>
        <DropDownSelect
          open={open}
          setOpen={setOpen}
          value={value}
          items={items}
          setValue={setValue}
          setItems={setItems}
          placeholder={"Select a network"}
          onChangeValue={(v) => console.log(v)}
        />
      </View>
    </View>
  );
};

export default WalletNetwork;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  dropdownContainer: {
    width: 200,
  },
});
