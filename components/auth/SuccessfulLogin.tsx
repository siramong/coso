import React, { useEffect } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface SuccessfulLoginProps {
  onComplete?: () => void;
}

export const SuccessfulLogin: React.FC<SuccessfulLoginProps> = ({ onComplete }) => {
  useEffect(() => {
    if (onComplete) {
      const timer = setTimeout(() => {
        onComplete();
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [onComplete]);

  return (
    <View className="flex-1 bg-[#6B8E7F] justify-center items-center">
      <StatusBar barStyle="light-content" />
      
      {/* Success Icon */}
      <View className="w-24 h-24 rounded-full bg-white/20 justify-center items-center mb-6">
        <View className="w-20 h-20 rounded-full bg-white/30 justify-center items-center">
          <Feather name="check" size={40} color="#FFFFFF" />
        </View>
      </View>

      {/* Success Message */}
      <Text className="text-2xl font-bold text-white mb-2">
        Login Successful!
      </Text>
      <Text className="text-base text-white/80">
        Welcome back to your plant app
      </Text>
    </View>
  );
};