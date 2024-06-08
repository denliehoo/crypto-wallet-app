import { Button, StyleSheet, Text, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import {
  EBottomDrawerContent,
  bottomDrawerService,
} from "@/services/bottom-drawer";

const TransactOptions = () => {
  const { changeContent, hide } = bottomDrawerService;
  const navigation = useNavigation();
  return (
    <View>
      <Text>TransactOptions</Text>
      <Button
        title="Send"
        onPress={() => {
          // https://stackoverflow.com/questions/73861337/no-overload-matches-this-call-error-react-native-navigation   TODO: give a proper typing instead of never
          navigation.navigate("Send" as never);
          hide();
        }}
      />
      <Button
        title="Swap"
        onPress={() => {
          navigation.navigate("Swap" as never);
          hide();
        }}
      />
      <Button
        title="Receive"
        onPress={() => changeContent(EBottomDrawerContent.RECEIVE)}
      />
    </View>
  );
};

export default TransactOptions;

const styles = StyleSheet.create({});
