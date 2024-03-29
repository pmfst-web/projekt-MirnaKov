import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import Boje from '../constants/Boje';
import ListaElement from '../components/ListaElement';
import { PJESME } from '../data/test-podaci';
//import * as React from 'react';

const ListaPjesama = ({ route, navigation }) => {
  const [pjesme, setPjesme] = useState(PJESME);

  const unos = (novaPjesma) => {
    setPjesme([...pjesme, novaPjesma]);
  };



  const prikazElelementa = (podaci) => {
    return (
      <ListaElement
        onPress={() => navigation.navigate('Detalji', { id: podaci.item.id })}
        natpis={podaci.item.naziv}
      />
    );
  };
  return (
    <View style={stil.ekran}>
      <View style={stil.lista}>
        <FlatList
          showsVerticalScrollIndicator={false}
          style={{ margin: 5 }}
          data={pjesme}
          renderItem={prikazElelementa}
          numColumns={1}
        />
      </View>
    </View>
  );
};

const stil = StyleSheet.create({
  ekran: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Boje.Pozadina,
  },
  lista: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
});

export default ListaPjesama;
