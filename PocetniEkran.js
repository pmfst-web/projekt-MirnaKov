import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
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
        
        <Kartica stil={stil.unos}>
          <Text>Upiši ime izvođača:</Text>
          
          <UnosBroja
            blurOnSubmit
            keyboardType="numeric"
            maxLength={2}
            style={stil.unosBroja}
            value={unos}
            onChangeText={unosBrojaProvjera}
          />
          <View style={stil.tipke}>
            <Button title="Pretraži" onPress={resetPoljeUnos} color="#baa0b2" />
            <Button title= "Favoriti" onPress={prihvatiOdabir} color="#baa0b2" />
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
    backgroundColor: '#50ab8b',
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
    paddingHorizontal: 15,
  },
  unosBroja: {
    width: 50,
  },
});

export default PocetniEkran;
