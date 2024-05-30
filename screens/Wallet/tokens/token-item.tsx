import React from "react";
import { Pressable, View, Text } from "react-native";
import styled from "styled-components/native";

import Avatar from "@/components/Avatar";
import EthLogo from "@/assets/logos/eth-logo.png";
import { FC } from "react";
import { ITokenDetails } from "@/store/context/tokens";

export interface ITokenItemProps extends ITokenDetails {
  onPress: () => void;
}

const TokenItem: FC<ITokenItemProps> = ({ onPress, asset, amount, value }) => {
  return (
    <Container onPress={onPress}>
      <AvatarContainer>
        <Avatar src={EthLogo} />
      </AvatarContainer>
      <DetailsContainer>
        <View>
          <BoldText>{asset}</BoldText>
          <Text>
            {amount} {asset}
          </Text>
        </View>
        <View>
          <BoldText>${value}</BoldText>
        </View>
      </DetailsContainer>
    </Container>
  );
};

export default TokenItem;

const Container = styled(Pressable)`
  height: 64px;
  flex-direction: row;
  align-items: center;
  padding: 8px;
  margin-bottom: 8px;
`;

const AvatarContainer = styled.View``;

const DetailsContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
  margin-left: 4px;
`;

const BoldText = styled.Text`
  font-size: 18px;
  font-weight: 500;
`;
