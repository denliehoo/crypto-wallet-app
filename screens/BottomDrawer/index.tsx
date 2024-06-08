import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

import TransactOptions from "../Transact/TransactOptions";
import Receive from "../Transact/Receive";
import Connect from "../Connect";
import {
  EBottomDrawerContent,
  bottomDrawerService,
  useBottomDrawer,
} from "@/services/bottom-drawer";
const BottomDrawer = () => {
  const { visible, content } = useBottomDrawer();
  const { hide } = bottomDrawerService;

  const renderContent = () => {
    switch (content) {
      case EBottomDrawerContent.TRANSACT_DRAWER_OPTIONS:
        return <TransactOptions />;
      case EBottomDrawerContent.RECEIVE:
        return <Receive />;
      case EBottomDrawerContent.CONNECT:
        return <Connect />;
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        hide();
      }}
    >
      <Pressable style={styles.modalOverlay} onPress={() => hide()}>
        <View style={styles.modalView}>{renderContent()}</View>
      </Pressable>
    </Modal>
  );
};

export default BottomDrawer;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    alignContent: "flex-end",
    justifyContent: "flex-end",
    backgroundColor: "#00000060",
  },
  modalView: {
    backgroundColor: "white",
    height: "50%",
    alignItems: "center",
  },
});
