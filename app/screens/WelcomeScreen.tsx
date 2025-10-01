import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';

interface WelcomeScreenProps {
  onSignIn: () => void;
  onCreateAccount: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  onSignIn,
  onCreateAccount,
}) => {
  return (
    <SafeAreaView className="flex-1 bg-[#6B8E7F]">
      <StatusBar barStyle="light-content" />
      
      {/* Background Pattern */}
      <View className="absolute inset-0 opacity-10">
        <View className="absolute w-[150px] h-[150px] rounded-full bg-white top-[10%] left-[10%]" />
        <View className="absolute w-[150px] h-[150px] rounded-full bg-white top-[30%] left-[60%]" />
        <View className="absolute w-[150px] h-[150px] rounded-full bg-white top-[60%] left-[20%]" />
      </View>

      {/* Content */}
      <View className="flex-1 justify-between p-6">
        {/* Title */}
        <View className="flex-1 justify-center px-5">
          <Text className="text-5xl font-bold text-white leading-[56px]">
            The best app for your plants
          </Text>
        </View>

        {/* Buttons */}
        <View className="gap-4">
          <TouchableOpacity
            className="bg-white/20 border border-white/30 py-4 rounded-xl items-center"
            onPress={onSignIn}
          >
            <Text className="text-white text-base font-semibold">Sign in</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="items-center py-3"
            onPress={onCreateAccount}
          >
            <Text className="text-white text-base">Create an account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};