import { StatusBar } from 'expo-status-bar';
import { Alert, ScrollView, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import ProductCard from './components/ProductCard';
import product from './data';

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <StatusBar style="dark" />
      
      {/* Header */}
      <View className="bg-white px-4 py-4 border-b border-gray-200">
        <Text className="text-2xl font-bold text-gray-900 font-sans">สินค้าแนะนำ</Text>
        <Text className="text-sm text-gray-500 mt-1 font-sans">
          {product.length} รายการ
        </Text>
      </View>

      {/* Product Grid */}
      <ScrollView 
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {product.map((p) => (
          <ProductCard 
            key={p.id} 
            {...p}
            onPress={() => Alert.alert('สินค้า', p.name)} 
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingTop: 16,
    paddingBottom: 24,
  },
});