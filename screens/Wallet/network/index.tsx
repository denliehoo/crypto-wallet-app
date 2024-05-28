import DropDownSelect from "@/components/drop-down-select";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";

const WalletNetwork = () => {
  const [value, setValue] = useState("SEPOLIA");
  const [items, setItems] = useState([
    { label: "Sepolia Testnet", value: "SEPOLIA" },
    { label: "Binance Smart Chain", value: "BSC" },
    { label: "Ethereum Network", value: "ETH" },
  ]);
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <DropdownContainer>
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
      </DropdownContainer>
    </Container>
  );
};

export default WalletNetwork;

const Container = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const DropdownContainer = styled.View`
  width: 200px;
`;
