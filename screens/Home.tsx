import { Text, View, Button, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { NavProps } from "../App";
import styled from 'styled-components/native'
import React, { useState } from 'react';

const StyledView = styled.View`
  flex: 1;
  display: flex;
  /* align-items: 'center'; */
  /* justify-content: 'center'; */
`
const InputBox = styled.View`
  display: flex;
  flex-direction: row;
  border: 1px solid #4d4d4d;
  border-radius: 10px;
  margin: 10px;
  padding: 5px;
`
const StyledInput = styled.TextInput`
  border: none;
  margin-left: 5px;
  padding: 0px 5px;
  /* outline: none!important; */
  width: 100%;
  &::focus{
    outline: none!important;
    border: none;
  }
`

export const Home = ({ navigation }: NavProps) => {
  const [searchTerm, setSearchTerm] = useState("")
  return (
    <StyledView>
      <InputBox>
        <AntDesign name="search1" size={24} color="black" />
        <StyledInput value={searchTerm} onChangeText={(e) => setSearchTerm(e)} placeholder="Search" />
      </InputBox>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', { ticker: "AAPL" })}
      />
    </StyledView>
  );
}