import { FC, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import DropDownPicker, {
  DropDownPickerProps,
  ValueType,
} from "react-native-dropdown-picker";

// https://hossein-zare.github.io/react-native-dropdown-picker-website/docs

type DropDownSelectProps = DropDownPickerProps<ValueType>;

const DropDownSelect: FC<DropDownSelectProps> = ({ ...props }) => {
  return (
    <DropDownPicker
      style={{
        backgroundColor: "black",
      }}
      labelStyle={{
        fontWeight: "bold",
        fontSize: 18,
        color: "white",
      }}
      dropDownContainerStyle={{
        backgroundColor: "black",
      }}
      listItemLabelStyle={{
        color: "white",
      }}
      tickIconStyle={{
        width: 20,
        height: 20,
        backgroundColor: "white",
      }}
      arrowIconStyle={{
        width: 20,
        height: 20,
        backgroundColor: "white",
      }}
      {...props}
    />
  );
};

export default DropDownSelect;

const styles = StyleSheet.create({});
