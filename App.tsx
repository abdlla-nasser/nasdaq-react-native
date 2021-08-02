import React from 'react';
import { createOvermind } from 'overmind';
import { Provider } from 'overmind-react'
import { config } from "./overmind";
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
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
