import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from 'react-native';
import Kartica from '../components/Kartica';
import UnosBroja from '../components/Unos';

const PocetniEkran = (props) => {
  const [unos, postaviUnos] = useState('');
  const [odabir, postaviOdabir] = useState(false);
  const [odabraniBroj, postaviOdabraniBroj] = useState();

  let prikazBroja = null;

  if (odabir) {
    prikazBroja = <Kartica><Text>Odabrani broj: {odabraniBroj}</Text></Kartica>;
  }

  const unosBrojaProvjera = (unosTekst) => {
    postaviUnos(unosTekst.replace(/[^0-9]/g, ''));
  };

  const resetPoljeUnos = () => {
    postaviUnos('');
    postaviOdabir(false);
  };

  const prihvatiOdabir = () => {
    const broj = parseInt(unos);
    if (broj === NaN || broj <= 0 || broj > 99) {
      return;
    }
    postaviOdabir(true);
    postaviOdabraniBroj(parseInt(broj));
    postaviUnos('');
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>

      
      <View style={stil.ekran}>

      
      <Image
      style={stil.slika}
      source={require('../assets/rhcp.jpg')}/>

      
        
        <Kartica stil={stil.unos}>

          
          
       
          <View style={stil.tipke}>
            <Button title="Pretraži" onPress={resetPoljeUnos} color="red" />
            <Button title= "Favoriti" onPress={prihvatiOdabir} color="red" />
          </View>
        </Kartica>
        {prikazBroja}      
      </View>
    </TouchableWithoutFeedback>
  );
};

const stil = StyleSheet.create({
  ekran: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'beige',
  },
  unos: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  tipke: {
    flexDirection: 'row',
    justifyContent:'space-between',
    width: '100%',
    paddingHorizontal: 15, },
  
  slika: {
    width: '70%',
    height: 230
 } 

  
});

export default PocetniEkran;