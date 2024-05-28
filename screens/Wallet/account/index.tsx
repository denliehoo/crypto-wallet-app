import React from "react";
import styled from "styled-components/native";

const WalletAccount = () => {
  return (
    <Container>
      <Card>
        <AccountContainer>
          <AccountText>Account 1</AccountText>
        </AccountContainer>
        <Divider />
        <AddressContainer>
          <AddressLabel>Address:</AddressLabel>
          <AddressTextContainer>
            <Address>0x123E...43A</Address>
          </AddressTextContainer>
        </AddressContainer>
      </Card>
    </Container>
  );
};

export default WalletAccount;

const Container = styled.View`
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

const Card = styled.View`
  border-width: 2px;
  border-color: grey;
  width: 350px;
  height: 100px;
  padding: 10px 20px;
  border-radius: 15px;
`;

const Divider = styled.View`
  border-width: 1px;
  border-color: grey;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const AccountContainer = styled.View``;

const AccountText = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

const AddressContainer = styled.View`
  flex-direction: row;
  gap: 5px;
`;

const AddressLabel = styled.Text`
  font-weight: bold;
`;

const AddressTextContainer = styled.View`
  background-color: blue;
  padding: 0px 20px;
  border-radius: 8px;
`;

const Address = styled.Text`
  color: white;
`;
