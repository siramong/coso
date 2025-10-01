import React from 'react';
import { View, Text, ActivityIndicator, StatusBar } from 'react-native';

export const LoadingScreen: React.FC = () => {
  return (
    <View className="flex-1 bg-[#6B8E7F] justify-center items-center">
      <StatusBar barStyle="light-content" />
      <ActivityIndicator size="large" color="#FFFFFF" />
      <Text className="mt-4 text-lg text-white font-semibold">
        Loading...
      </Text>
    </View>
  );
};