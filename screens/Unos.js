import * as React from 'react';
import { useState } from 'react';
import { View, Text, TextInput} from 'react-native';
import Tipka from '../components/Tipka'


import Boje from "../constants/Boje";
import Pjesma from '../models/pjesma';
import screenStyle from "../constants/ScreenStyle";

const Unos = ({route,navigation, unos}) => {
    const [naziv, setNaziv] = useState('');
    const [album, setAlbum] = useState ('')
    const [godina, setGodina] = useState ('') 
    const [tekst, setTekst] = useState ('') 
  
    const novaPjesma = () => {
      const newPjesma=new Pjesma(route.params.id,naziv,album,godina,tekst )
      

      unos(newPjesma);

      navigation.navigate('PocetniEkran')

    }
    const handleButtonPress = () => {
    if (naziv && album && godina && tekst) {
      novaPjesma();
    } else {
      navigation.navigate('PocetniEkran');
    }
  };
   
    return (
    <View style={screenStyle.ekran}>
      <Text style={screenStyle.inputLabel}>Naziv pjesme:</Text>
      <TextInput
        style={screenStyle.input}
        onChangeText={setNaziv}
        value={naziv}
      />
      <Text style={screenStyle.inputLabel}>Album:</Text>
      <TextInput
        style={screenStyle.input}
        onChangeText={setAlbum}
        value={album}
      />
      <Text style={screenStyle.inputLabel}>Godina:</Text>
      <TextInput
        style={screenStyle.input}
        onChangeText={setGodina}
        value={godina}
      />
      <Text style={screenStyle.inputLabel}>Tekst:</Text>
      <TextInput
        style={screenStyle.input}
        onChangeText={setTekst}
        value={tekst}
      />
      <Tipka title="Unos pjesme" onPress={handleButtonPress}></Tipka>
    </View>
  );
};

export default Unos;