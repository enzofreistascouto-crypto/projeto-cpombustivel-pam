import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity, SafeAreaView } from 'react-native';


const ResultCard = ({etanol, gasolina}) =>{
  const [resultado, setResultado] = useState(0);
  const [escolha, setEscolha] = useState(0);
 
  function calcularVantagem() {
    if(etanol/gasolina < 0.7){
    const vantagem = (100*etanol) / gasolina;
    setResultado(vantagem);
    const esc = "ETANOL";
    setEscolha(esc);
    }else{
      const vantagem = (100*gasolina) / etanol;
    setResultado(vantagem);
    const esc = "GASOLINA";
    setEscolha(esc);
    }
  }
    return(
        
    <View style={styles.container}>
      
    <Text style={styles.textoResultadoAlto}>Escolha {escolha}!</Text>
      <Text style={styles.textoResultado}>O etanol está custando {resultado}% do valor da gasolina</Text>
      <Button 
        color = {'#2E8B57'}
        title = 'VERIFICAR VANTAGEM'
        onPress={calcularVantagem}
      />
    </View>
        
    );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    backgroundColor: '#54FF9F',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginLeft: 15,
    marginRight: 15,
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
  textoResultadoAlto: {
    fontSize: 22,
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

export default ResultCard;