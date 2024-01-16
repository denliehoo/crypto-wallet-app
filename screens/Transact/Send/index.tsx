import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import SendToScreen from "./screens/To";
import SendAmountScreen from "./screens/Amount";
import SendConfirmationScreen from "./screens/Confirmation";
import SendResultsScreen from "./screens/Results";
import { useNavigation, useIsFocused } from "@react-navigation/native";

const SendScreen = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const [step, setStep] = useState(1);

  const renderContent = () => {
    switch (step) {
      case 1:
        return <SendToScreen />;
      case 2:
        return <SendAmountScreen />;
      case 3:
        return <SendConfirmationScreen />;
      case 4:
        return <SendResultsScreen />;
    }
  };

  useEffect(() => {
    if (!isFocused) {
      // resetState if navigate away
      setStep(1);
    }
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          {(step === 2 || step === 3) && (
            <Button
              title="Back"
              onPress={() => {
                setStep(step - 1);
              }}
            />
          )}
        </View>
        <Text>Send To</Text>
        <View>
          <Button
            title="Cancel"
            onPress={() => {
              navigation.navigate("Wallet" as never);
            }}
          />
        </View>
      </View>
      <View style={styles.body}>{renderContent()}</View>
      <View style={styles.footer}>
        <Button
          title="Next"
          onPress={() => {
            if (step === 4) {
              navigation.navigate("Wallet" as never);
              return;
            }
            setStep(step + 1);
          }}
        />
      </View>
    </View>
  );
};

export default SendScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  body: {
    height: "90%",
  },

  footer: {},
});
