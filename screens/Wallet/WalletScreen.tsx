import { View } from "react-native";
import WalletTokens from "./tokens";
import WalletNetwork from "./network";
import WalletAccount from "./account";
import { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";

export const WalletScreen = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Pear", value: "pear" },
  ]);
  return (
    <View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 15,
        }}
      >
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder={"Choose a fruit."}
        />
      </View>

      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>Chosen fruit: {value === null ? "none" : value}</Text>
      </View>
      <WalletNetwork />
      <WalletAccount />
      <WalletTokens />
    </View>
  );
};
