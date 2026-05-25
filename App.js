import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import ResultCard from './src/componentes/Resultcard.js';
 
export default function App() {

 
  return (
    <View>
      
      <ResultCard/>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#54FF9F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 24,
    alignItems: 'center'
  },
  textoResultado: {
    fontSize: 15,
    alignItems: 'center',
    margin: 10
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '90%',
    height: 30,
    margin: 10,
    padding: 5,
    borderRadius: 5
  }
});