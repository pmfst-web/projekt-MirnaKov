import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Naslov from './components/Naslov'
import PocetniEkran from './screens/PocetniEkran'

export default function App() {
  return (
    <View style={styles.ekran}>
      <Naslov naslov={"RED HOT CHILLI PEPPERS"}/>
      <PocetniEkran />
    </View>
  );
}

const styles = StyleSheet.create({
  ekran: {
    flex: 1
  }
});
