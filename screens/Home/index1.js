import * as React from 'react';
import { useCallback } from 'react';
import { Text, Button, View, Image } from 'react-native';
import styles from './styles';




import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

export default function Home({ navigation }) {
  const [fontsLoaded] = useFonts({
    princedow: require('../../assets/fonts/pricedown.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={{ fontFamily: '', fontSize: 30, color: '#fff' }}>Geografia</Text>
      
      </View>
      <View>
        <Button  color="#333652" title="Cálculo"  onPress={() => navigation.navigate('Conteudo')} />

        <Button  color="#333652" title="sobre" onPress={() => navigation.navigate('Sobre')} />
      
      </View>
    </View>
  );
}
