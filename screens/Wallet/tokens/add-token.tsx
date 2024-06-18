import { useNavigation } from "@react-navigation/native";
import { Button, View } from "react-native";
const AddToken = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Button
        title="Import Token"
        onPress={() => navigation.navigate("Import Token" as never)}
      />
    </View>
  );
};

export default AddToken;

// TODO:
// Flow: A modal open => input token address => fetch token details from etherscan => Add the token to the service (in the future, data should persist) => Call in fetchtokenbalance api, call these token addresses
