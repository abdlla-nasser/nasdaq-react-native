import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createOvermind, IContext } from 'overmind';
import { Provider } from 'overmind-react'
import { config } from "./overmind";
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { getYesterday } from "./helpers";
import { getStock } from "./api";
import { useEffect } from 'react';
import { Home } from "./screens/Home";
import { DetailsScreen } from "./screens/StockDetails"

type RootStackParamList = {
  Home: undefined;
  Details: { ticker: string };
};
export type NavProps = {
  navigation: StackNavigationProp<
    RootStackParamList
  >
  route: RouteProp<RootStackParamList, "Details">;
};
const overmindConfig = createOvermind(config)

// function DetailsScreen({ route }: NavProps) {
//   const { params: { ticker } } = route;
//   useEffect(() => {
//     getStock(ticker, getYesterday()).then(console.log)
//   }, [ticker])
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen for {ticker}</Text>
//     </View>
//   );
// }
const Stack = createStackNavigator();


export default function App() {
  return (
    <Provider value={overmindConfig}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
