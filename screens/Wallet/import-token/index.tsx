import { tokensService, useImportToken } from "@/services/tokens";
import { useState } from "react";
import { View, Text, Button } from "react-native";
import styled from "styled-components/native";

const ImportTokenScreen = () => {
  const { tokenDetails, tokenDetailsLoading } = useImportToken();

  const [inputAddress, setInputAddress] = useState("");

  const onChangeText = (text: string) => {
    setInputAddress(text);
    // can use this to control if the button is disabled too
  };

  const onPressButton = () => {
    console.log(inputAddress);

    if (tokenDetails) {
      // add the token into the token list
      // TODO: add the token to the token list
    } else {
      // get the token details
      tokensService.fetchTokenDetails({ address: inputAddress });
    }
  };

  return (
    <StyledContainer>
      <View>
        <StyledFieldName>Token contract address</StyledFieldName>
        <StyledInput
          placeholder="0x1234....5678"
          value={inputAddress}
          onChangeText={onChangeText}
        />
      </View>

      {tokenDetails && (
        <>
          <View>
            <StyledFieldName>Token Symbol</StyledFieldName>
            <StyledFieldDisplay>
              <StyledFieldDisplayText>USDT</StyledFieldDisplayText>
            </StyledFieldDisplay>
          </View>

          <View>
            <StyledFieldName>Token decimal</StyledFieldName>
            <StyledFieldDisplay>
              <StyledFieldDisplayText>6</StyledFieldDisplayText>
            </StyledFieldDisplay>
          </View>
        </>
      )}

      <Button
        title={tokenDetails ? "Import" : "Next"}
        onPress={onPressButton}
        disabled={tokenDetailsLoading}
      />
    </StyledContainer>
  );
};

export default ImportTokenScreen;

const StyledContainer = styled.View`
  padding: 8px;
  gap: 24px;
`;

const StyledInput = styled.TextInput`
  border: 1px solid gray;
  border-radius: 8px;
  height: 40px;
  padding-left: 8px;
  padding-right: 8px;
  font-size: 18px;
`;

const StyledFieldName = styled.Text`
  font-size: 16px;
`;

const StyledFieldDisplay = styled.View`
  border: 1px solid gray;
  border-radius: 8px;
  height: 40px;
  padding-left: 8px;
  padding-right: 8px;
  justify-content: center;
`;

const StyledFieldDisplayText = styled.Text`
  font-size: 18px;
  color: gray;
`;
