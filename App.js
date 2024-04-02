import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { NavigationContainer } from '@react-navigation/native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home</Text>
      <TouchableOpacity onPress={()=>navigation.navigate("About")}>
        <Text>Ir para conteudo</Text>
      </TouchableOpacity>
    </View>
  );
}
 
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Conteudo</Text>
      <TouchableOpacity onPress={()=>navigation.navigate("About")}>
        <Text>Ir para sobre</Text>
      </TouchableOpacity>
    </View>
  );
} 

function AboutScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Sobre</Text>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Text>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
 
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
  <Stack.Screen name="Home" component={HomeScreen} />
  <Stack.Screen name="Sobre" component={AboutScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});