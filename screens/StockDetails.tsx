import React, { useEffect } from "react";
import { getYesterday } from "../helpers";
import { getStock } from "../api";
import { View, Text } from "react-native";
import { NavProps } from "../App";
import { useActions } from "../overmind";
export const DetailsScreen = ({ route }: NavProps) => {
  const { params: { ticker } } = route;
  const { getStockDetails } = useActions()
  useEffect(() => {
    getStockDetails()
    getStock(ticker, getYesterday()).then(console.log)
  }, [ticker])
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen for {ticker}</Text>
    </View>
  );
}