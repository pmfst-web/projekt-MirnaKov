import * as React from 'react';
import { useState } from 'react';
import { View, Text, TextInput} from 'react-native';
import Tipka from '../components/Tipka'


import Boje from "../constants/Boje";
import Pjesma from '../models/pjesma';
import screenStyle from "../constants/ScreenStyle";

const Unos = ({route,navigation}) => {
    const [naziv, album, godina, tekst, onChangeText] = useState('');  
  
    const novaPjesma = (naziv,album,godina,tekst) => {
        route.params.unos(new Pjesma(route.params.id,naziv,album,godina,tekst))
        navigation.navigate('PocetniEkran');
    }
   
    return (
      <View style={screenStyle.ekran}>
  
        <Text style={screenStyle.inputLabel}>Naziv pjesme:</Text>
        <TextInput
          style={screenStyle.input}
          onChangeText={(naziv) => onChangeText(naziv)}
          value={this.naziv}
        />
        <Text style={screenStyle.inputLabel}>Album:</Text>
        <TextInput
          style={screenStyle.input}
          onChangeText={(album) => onChangeText(album)}
          value={this.album}

        />
        <Text style={screenStyle.inputLabel}>Godina:</Text>
        <TextInput
          style={screenStyle.input}
          onChangeText={(godina) => onChangeText(godina)}
          value={godina}
        />

        <Text style={screenStyle.inputLabel}>Tekst:</Text>
        <TextInput
          style={screenStyle.input}
          onChangeText={(tekst) => onChangeText(tekst)}
          value={tekst}
        />
  
        <Tipka title="Unos pjesme"
            onPress={()=>novaPjesma(naziv,album,godina,tekst)}> Dodaj </Tipka>
  
      </View>
    );
  };
  export default Unos;