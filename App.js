import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialIcons } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

import PocetniEkran from './screens/PocetniEkran';
import ListaPjesama from './screens/ListaPjesama';
import InfoPjesme from './screens/InfoPjesme';
import Unos from './screens/Unos';
import Boje from './constants/Boje';
const Stack = createNativeStackNavigator();

import { PJESME } from './data/test-podaci';

const ucitajFontove = () => {
  return Font.loadAsync({
    "Baloo": require('./assets/Baloo.ttf'),
    "Corinthia": require('./assets/Corinthia-Regular.ttf'),
    "Anton": require('./assets/Anton-Regular.ttf'),
  })
};


function App() {

  const [fontUcitan, ucitano] = useState(false);
  const [svePjesme, postaviPjesme] = useState(PJESME);
  const dodaj = (pjesma) => {
  postaviPjesme([...svePjesme, pjesma]);
};
  

  if (!fontUcitan) {
    return (
      <AppLoading
        startAsync={ucitajFontove}
        onFinish={() => ucitano(true)}
        onError={console.warn}
      />
    );
  
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Boje.Naglasak1,
          },
          headerTintColor: Boje.Primarna,
        }}>
        <Stack.Screen
          name="PocetniEkran"
          component={PocetniEkran}
          options={{
            title: 'RED HOT CHILLI PEPPERS',
          }}
        />
        <Stack.Screen
          name="Popis"
          component={ListaPjesama}
          options={({ route, navigation }) => {
            return {
              headerRight: () => {
                return (
                  <TouchableOpacity onPress={() => navigation.navigate('Unos')}>
                  </TouchableOpacity>
                );
              },
            };
          }}
        />
        <Stack.Screen
          name="Detalji"
          component={InfoPjesme}
          options={({ route, navigation }) => {
            const idPjesme = Number(route.params.id);
            const pjesma = PJESME.find((r) => r.id === idPjesme);
            return {
              headerTitle: pjesma?.naslov,
              headerRight: () => {
                return (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('PocetniEkran')}>
                    <View>
                      <MaterialIcons
                        name="home"
                        size={26}
                        color={Boje.Primarna}
                      />
                    </View>
                  </TouchableOpacity>
                );
              },
            };
          }}
        />
        <Stack.Screen 
        name="Unos" 
        component={Unos}
        options={({ route, navigation }) => {
            return {
              headerRight: () => {
                return (
                  <TouchableOpacity onPress={() => navigation.navigate('PocetniEkran')}>
                  
                  </TouchableOpacity>
                  
                   
                  
                );
              },
            
            };
          }}   
         
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;