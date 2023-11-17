// Importações necessárias para o React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import CardsList from './components/CardsList/CardsList';
import HomeScreen from './components/HomeScreen';
import CardsDetails from './components/CardsDetails/CardsDetails';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CardsList" component={CardsList} />
        <Stack.Screen name="CardsDetails" component={CardsDetails} />
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
