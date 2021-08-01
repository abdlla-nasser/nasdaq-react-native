import { Text, View, Button, FlatList } from 'react-native';
import { NavProps } from "../App";
import styled from 'styled-components/native'

const StyledView = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: 'center';
  justify-content: 'center';
`

export const Home = ({ navigation }: NavProps) => {
  return (
    <StyledView>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', { ticker: "AAPL" })}
      />
    </StyledView>
  );
}