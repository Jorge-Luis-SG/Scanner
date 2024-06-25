import { Image, StyleSheet, Platform, TextInput } from 'react-native';
import 'react-native-reanimated';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ScannerComponent from '@/components/ScannerComponent';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
          source={require('@/assets/images/logo.webp')}

        />}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Scanner de productos</ThemedText>
      </ThemedView>
      <ThemedText>Consulte el precio de sus productos aquí.</ThemedText>
     
      <ThemedView style={styles.containerInputSearch}>
        <TextInput placeholder='Ingresa el codigo de barras' style={styles.inputSearch}/>
      </ThemedView> 
      <ThemedView style={styles.boxScanner}>
        <ScannerComponent></ScannerComponent>
      </ThemedView>
    </ParallaxScrollView> 
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  containerInputSearch: {
    borderColor: '#bcbebf',
    borderWidth: 1,
    borderRadius: 6,
    width: '100%',
    padding: 8,
    marginTop: 20
  },
  inputSearch: {
    fontSize: 17,
    color: '#8f8f8f'
  },
  boxScanner: {
    marginTop:15
  }

});
