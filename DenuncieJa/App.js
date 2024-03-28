import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import logoImage from './assets/AppLogoBranco-SEMFUNDO.png'

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logoImage}></Image>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#007BFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: 250,
    height: 150,
    resizeMode: 'contain',
  },
});
