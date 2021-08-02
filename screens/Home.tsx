import { Text, View, Button, FlatList, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { NavProps } from "../App";
import styled from 'styled-components/native'
import React, { useState } from 'react';
import { useActions, useAppState } from '../overmind';
import { useEffect } from 'react';

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
const StyledList = (styled.FlatList`
  height: 100%;
  width: 100%;
  margin-top: 40px;
` as unknown) as typeof FlatList;
const Item = styled.TouchableOpacity`
  height: 15vh;
`

export const Home = ({ navigation }: NavProps) => {
  const { stocks, isLoadingStocks, search } = useAppState()
  const { setSearchTerm, getStocks, getNextStocks } = useActions()
  useEffect(() => {
    getStocks()
  }, [])
  return (
    <StyledView>
      <InputBox>
        <AntDesign name="search1" size={24} color="black" />
        <StyledInput value={search} onChangeText={(e) => setSearchTerm(e)} placeholder="Search" />
      </InputBox>
      <StyledList onEndReachedThreshold={.3} onEndReached={getNextStocks} data={stocks} keyExtractor={item => item.ticker} renderItem={({ item }) => (
        <Item>
          <View>
            <Text>{item.name}</Text>
          </View>
        </Item>
      )} />
    </StyledView>
  );
}