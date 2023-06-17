//import * as React from 'react';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Image, ScrollView } from 'react-native';
import Tipka from '../components/Tipka'
import Boje from '../constants/Boje'
import { PJESME } from '../data/test-podaci'

const PocetniEkran = ({ navigation }) => {
  const [svePjesme, postaviPjesme] = useState(PJESME);
  const dodajPjesmu = (pjesma) => {postaviPjesme((svePjesme) => [...svePjesme, pjesma])}

  return (

    <ScrollView vertical={true} style={stil.ekran}>
      <View style={stil.slikaOkvir}>
        <Image style={stil.slika} source={require('../assets/rhcp.jpg')} />
      </View>
      <View style={stil.kontrole}>
        <Tipka
          title="Popis pjesama"
          onPress={() => navigation.navigate('Popis')}
        />
        <Tipka
          title="Unos"
          
          onPress={() => navigation.navigate('Unos',{unos: (pjesma)=> dodajPjesmu(pjesma), id: svePjesme.length})}
        />
      </View>
    </ScrollView>
  );
};

const stil = StyleSheet.create({
  ekran: {    
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor : Boje.Pozadina,
  },
  slika: {
    width: 200,
    height: 300,
    flex: 1,
  },
  slikaOkvir: {
    overflow: 'hidden',
    width: '100%',
    height: 200,
    borderRadius: 20,
    marginVertical: 40
  },
  kontrole:{
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    height: 100
  }
});

export default PocetniEkran;