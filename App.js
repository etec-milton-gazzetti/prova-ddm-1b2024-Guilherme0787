import { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Animated } from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { NavigationContainer } from '@react-navigation/native';
import { styles } from  './styles'; //Importando os estilos do arquivo styles.js 

  const GuerradeToiaScreen=()=>{
  const [imagemVisivel, setImagemVisivel] = useState(false);
  const [mostrarArmas, setMostrarArmas] = useState(false);
  const fadeAnim = useState(new Animated.Value(0))[0];
 
   const toggleImagem = ()=>{
    setImagemVisivel(!imagemVisivel);
    Animated.timing(
      fadeAnim,
    {
      toValue: imagemVisivel ? 0:1, //alterna entre 0  e 1
      duration: 500, // Duração da animação em milissegundos
      useNativeDriver: true, //Usa driver nativo para melhor performance
   }
  ).start();
};
 
return (
  <View style={{ flex: 1}}>
    <ScroolView contentContainerStyle={styles.scrollViewContainer}
    style={{marginBottom:20}}>
    <View style={styles.container}>
<Text style={styles.titulo}>Guerra de Troia</Text>
<Text style={styles.texto}>
A Guerra de Troia foi um conflito lendário entre os gregos e os troianos por volta do século XII a.C.
 Foi desencadeado pelo rapto da rainha grega Helena por Páris, príncipe troiano.
  Durou dez anos e culminou na queda de Troia após os gregos usarem o Cavalo de Troia, um ardil para entrar na cidade.
   Esta história é narrada na Ilíada e na Odisseia, atribuídas a Homero, e teve grande impacto na cultura ocidental.
</Text>
<TouchableOpacity onPress={toggleImagem} style={styles.botao}>
  <text style={styles.textoBotao}>{imagemVisivel}</text>
</TouchableOpacity>

    

