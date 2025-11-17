import { StatusBar } from 'expo-status-bar';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import ProductCard from './components/ProductCard';
import product from './data';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Puen Para Di Di Di</Text>

      <ScrollView style={styles.scroll}>
        {product.map((p) => (
          <ProductCard
            key={p.id}
            {...p}
            onPress={() => Alert.alert('Click', p.name)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    paddingTop: 20,              // 🔽 ลดระยะด้านบน
    paddingHorizontal: 10,       // 🔽 ขอบซ้าย-ขวาแคบลง
  },
  header: {
    fontSize: 24,
    color: '#C9A66B',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 6,            // 🔽 ลดระยะห่างหัวข้อ
  },
  scroll: {
    flex: 1,
    paddingHorizontal: 8,       // 🔽 ลด padding ให้สินค้าแคบลง
  },
});
