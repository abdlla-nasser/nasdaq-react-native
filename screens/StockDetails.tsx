import React, { useEffect } from "react";
import { getYesterday } from "../helpers";
import { getStock } from "../api";
import { View, Text } from "react-native";
import { NavProps } from "../App";
import { useActions, useAppState } from "../overmind";
import { useState } from "react";
export const DetailsScreen = ({ route }: NavProps) => {
  const { params: { ticker } } = route;
  const { stocksDetails } = useAppState()
  const { getStockDetails } = useActions()
  const [stock, setStock] = useState({})
  useEffect(() => {
    if (stocksDetails[ticker]) {
      setStock(stocksDetails[ticker])
    } else {
      getStockDetails({ ticker, date: getYesterday() })
    }
  }, [ticker])
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen for {ticker}</Text>
    </View>
  );
}