import { StatusBar } from 'expo-status-bar';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import ProductCard from './components/ProductCard';
import product from './data';

export default function App() {
  return (
    <View style={styles.container}>
      <Text className='text-red-500 text-xl'>Open up App.tsx to start working on your app!</Text>
      <ScrollView className='flex-1 p-4'>
        {product.map((p) => (
          <ProductCard Key={p.id} {...p}
          onPress={()=> Alert.alert('Click', p.name)} />
        ))}
      </ScrollView>
    </View>
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
