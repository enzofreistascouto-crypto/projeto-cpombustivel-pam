import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity } from 'react-native';


const ResultCard = () =>{
    const [etanol, setEtanol] = useState('');
  const [gasolina, setGasolina] = useState('');
  const [resultado, setResultado] = useState(0);
  const [escolha, setEscolha] = useState('');
 
  function calcularVantagem() {
    if(gasolina>etanol){
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
        <TouchableOpacity>
            <View>
                <Text style={styles.texto}>Álcool ou Gasolina</Text>
                      <Image 
                        source={require('./assets/posto.png')}
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
                      />
                      <Text style={styles.textoResultado}>Escolha {escolha}!</Text>
                      <Text style={styles.textoResultado}>O etanol está custando {resultado}% do valor da gasolina</Text>
                      <Button 
                        color = {'#2E8B57'}
                        title = 'VERIFICAR VANTAGEM'
                        onPress={calcularVantagem}
                      />
            </View>
        </TouchableOpacity>
    );
};

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

export default ResultCard;