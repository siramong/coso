import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Feather from '@expo/vector-icons/Entypo';

interface LoginProps {
  onBack: () => void;
  onLogin: () => void;
  onSignUp: () => void;
}

export const Login: React.FC<LoginProps> = ({ onBack, onLogin, onSignUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-[#FFF8F0]">
      <StatusBar barStyle="dark-content" />

      <View className="flex-1 p-6">
        {/* Back Button */}
        <TouchableOpacity
          className="w-10 h-10 rounded-full bg-white justify-center items-center mb-6 shadow-sm"
          onPress={onBack}
        >
          <Feather name="chevron-left" size={24} color="#2C3E2F" />
        </TouchableOpacity>

        {/* Icon */}
        <View className="items-center mb-4">
          <Feather name="leaf" size={32} color="#D4816F" />
        </View>

        {/* Title */}
        <Text className="text-3xl font-bold text-[#2C3E2F] text-center mb-2">
          Welcome Back
        </Text>
        <Text className="text-base text-[#B8AFA5] text-center mb-8">
          Login to your account
        </Text>

        {/* Form */}
        <View className="gap-4">
          {/* Email Input */}
          <View className="flex-row items-center bg-[#F4E8D8] rounded-xl px-4 py-3.5">
            <Feather name="user" size={18} color="#9BA88D" style={{ marginRight: 12 }} />
            <TextInput
              className="flex-1 text-base text-[#2C3E2F]"
              placeholder="Full Name"
              placeholderTextColor="#B8AFA5"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          {/* Password Input */}
          <View className="flex-row items-center bg-[#F4E8D8] rounded-xl px-4 py-3.5">
            <Feather name="lock" size={18} color="#9BA88D" style={{ marginRight: 12 }} />
            <TextInput
              className="flex-1 text-base text-[#2C3E2F]"
              placeholder="••••••••"
              placeholderTextColor="#B8AFA5"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Feather
                name={showPassword ? 'eye' : 'eye-with-line'}
                size={18}
                color="#9BA88D"
              />
            </TouchableOpacity>
          </View>

          {/* Remember Me & Forgot Password */}
          <View className="flex-row justify-between items-center mt-2">
            <TouchableOpacity
              className="flex-row items-center"
              onPress={() => setRememberMe(!rememberMe)}
            >
              <View
                className={`w-5 h-5 rounded border-2 mr-2 justify-center items-center ${
                  rememberMe ? 'bg-[#6B8E7F] border-[#6B8E7F]' : 'border-[#9BA88D]'
                }`}
              >
                {rememberMe && <Feather name="check" size={14} color="#FFFFFF" />}
              </View>
              <Text className="text-sm text-[#2C3E2F]">Remember Me</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text className="text-sm text-[#2C3E2F] font-semibold">
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>

          {/* Login Button */}
          <TouchableOpacity
            className="bg-[#6B8E7F] py-4 rounded-xl items-center mt-6"
            onPress={onLogin}
          >
            <Text className="text-white text-base font-semibold">Login</Text>
          </TouchableOpacity>

          {/* Sign Up Link */}
          <View className="flex-row justify-center mt-4">
            <Text className="text-[#B8AFA5] text-sm">Don't have account? </Text>
            <TouchableOpacity onPress={onSignUp}>
              <Text className="text-[#2C3E2F] text-sm font-semibold">Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};