import "react-native-gesture-handler";

import { StyleSheet } from "react-native";

import ContextProvider from "./components/hoc/ContextProvider";
import Navigaton from "./components/hoc/Navigaton";

export default function App() {
  return (
    <ContextProvider>
      <Navigaton />
    </ContextProvider>
  );
}
