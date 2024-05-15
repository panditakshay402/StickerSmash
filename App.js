import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Rest of the import statements
import { useFonts } from 'expo-font';

export default function App() {

  const [fontsLoaded] = useFonts({
    'Inter-Black': require('./assets/fonts/Inter-Black-900.otf'),
  });
  <Text style={{ fontFamily: 'Inter-Black', fontSize: 80 }}>Inter Black</Text>
  return (
    <View style={styles.container}>
      <Text>Hi Akshay</Text>
      <Text>Hot reload checking</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF1733',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
