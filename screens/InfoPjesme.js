import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Boje from '../constants/Boje';

import { PJESME } from '../data/test-podaci';

const InfoPjesme = ({ route, navigation }) => {
  const idPjesme = Number(route.params.id);
  const pjesma = PJESME.find((r) => r.id === idPjesme);
  return (
    <View style={stil.ekran}>
      <View style={stil.tablica}>
        <View style={stil.redak}>
          <View style={stil.stupac}>
            <Text>ID Pjesme</Text>
          </View>
          <View style={stil.stupac}>
            <Text style={stil.bold}>{pjesma.id}</Text>
          </View>
        </View>
        <View style={stil.redak}>
          <View style={stil.stupac}>
            <Text>Naziv</Text>
          </View>
          <View style={stil.stupac}>
            <Text style={{...stil.ime}}>{pjesma.naziv}</Text>
          </View>
        </View>
        <View style={stil.redak}>
          <View style={stil.stupac}>
            <Text>Album</Text>
          </View>
          <View style={stil.stupac}>
            <Text style={stil.bold}>{pjesma.album}</Text>
          </View>
        </View>
        <View style={stil.redak}>
          <View style={stil.stupac}>
            <Text>Godina</Text>
          </View>
          <View style={stil.stupac}>
            <Text style={stil.bold}>{pjesma.godina}</Text>
          </View>
        </View>
        <View style={stil.redak}>
          <View style={stil.stupac}>
            <Text>Tekst</Text>
          </View>
          <View style={stil.stupac}>
            <Text style={{...stil.italic}}>{pjesma.tekst}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const stil = StyleSheet.create({
  ekran: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Boje.Pozadina,
  },
  tablica: {
    width: '80%',
    flex: 1,
  },
  redak: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 50,
    paddingVertical: 0,
    marginVertical: 15,
  },
  stupac: {
    alignItems: 'center',
    marginVertical: 5,
    
  },
  ime:{
    fontFamily: "Baloo",
    fontSize: 24
  },
  bold:{
    fontWeight: "bold",
  },
  italic: {
    fontStyle: 'italic',
  }
});

export default InfoPjesme;