import { StyleSheet, TouchableOpacity, View, Image, Text, Dimensions, Platform } from 'react-native'
import React from 'react'

const { width } = Dimensions.get('window')

const ProductCard = (props: any) => {
    return (
        <TouchableOpacity 
            className="bg-white rounded-lg mx-4 mb-4 overflow-hidden"
            style={styles.cardShadow}
            activeOpacity={0.8}
            onPress={props.onPress}
        >
            <View className="relative w-full bg-gray-100" style={{ height: width * 0.5 }}>
                <Image 
                    source={{uri: props.image}}
                    className="w-full h-full"
                    resizeMode="cover"
                />
            </View>
            
            <View className="p-4">
                <Text 
                    className="text-lg font-bold text-gray-900 mb-1.5 leading-6 font-sans"
                    numberOfLines={2}
                >
                    {props.name}
                </Text>
                
                {props.description && (
                    <Text 
                        className="text-sm text-gray-500 mb-3 font-sans"
                        numberOfLines={1}
                    >
                        {props.description}
                    </Text>
                )}
                
                {/* Price Section */}
                <View className="flex-row items-center justify-between mb-2">
                    <View className="flex-row items-baseline">
                        <Text className="text-xl font-semibold text-blue-600 mr-0.5 font-sans">฿</Text>
                        <Text className="text-xl text-blue-600 font-semibold font-sans">
                            {props.price}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardShadow: {
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.12,
                shadowRadius: 12,
            },
            android: {
                elevation: 6,
            },
        }),
    },
})

export default ProductCard