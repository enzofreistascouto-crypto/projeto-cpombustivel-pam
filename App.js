import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native'; //importamos "ferramentas" do react native;
import ResultCard from './src/componentes/Resultcard.js'; //importamos o resultCard .js de sua devida pasta;
 
export default function App() {
  const [etanol, setEtanol] = useState(0); //"passa os valores" digitados de etanol e gasolina;
  const [gasolina, setGasolina] = useState(0);

 
  return (
    <View style={styles.container}> //mostra: texto inicial, busca e mostra imagem, cria os inputs e mostra o resultCard;
      <Text style={styles.texto}>Álcool ou Gasolina</Text> 
         <Image borderRadius={20}
          source={require('./assets/posto.png')}  //
         style={{ width: 200, height: 200}}
            />
          <TextInput
          style={styles.input}
          placeholder='Preço do Etanol (R$)'
          onChangeText={setEtanol}
           value={etanol}
           keyboardType='default'
        />
       <TextInput
          style={styles.input}
          placeholder='Preço da Gasolina (R$)'
          onChangeText={setGasolina}
          value={gasolina}
          keyboardType='default'
        />
      <ResultCard etanol={etanol} gasolina={gasolina}/>
    </View>
  );
}
 //define a estilização
const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    flex: 1,
    backgroundColor: '#fffff0',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  texto: {
    fontSize: 30,
    marginBottom: 20,
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
    width: '80%',
    height: 30,
    margin: 10,
    marginLeft: 30,
    marginRight: 30,
    padding: 5,
    borderRadius: 5
  }
});
