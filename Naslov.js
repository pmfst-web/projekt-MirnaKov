import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Naslov = (props) => {
  return (
    <View style={stil.zaglavlje}>
      <Text style={stil.naslov}>{props.naslov}</Text>
    </View>
  );
};

const stil = StyleSheet.create({
  zaglavlje: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: "#AC0C03",
    alignItems: "center",
    justifyContent: "center"
  },
  naslov: {
    color: "white",
    fontSize: 28
  }
})

export default Naslov;