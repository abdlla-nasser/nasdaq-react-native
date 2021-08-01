import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { getYesterday } from "./helpers";
import { getStock } from "./api";
import { useEffect } from 'react';

type RootStackParamList = {
  Home: undefined;
  Details: { ticker: string };
};
type Props = {
  navigation: StackNavigationProp<
    RootStackParamList
  >
  route: RouteProp<RootStackParamList, "Details">;
};

function HomeScreen({ navigation }: Props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', { ticker: "AAPL" })}
      />
    </View>
  );
}
function DetailsScreen({ route }: Props) {
  const { params: { ticker } } = route;
  useEffect(() => {
    getStock(ticker, getYesterday()).then(console.log)
  }, [ticker])
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen for {ticker}</Text>
    </View>
  );
}
const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
