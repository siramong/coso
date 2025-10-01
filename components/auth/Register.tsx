import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import Feather from '@expo/vector-icons/Entypo';

interface RegisterProps {
  onBack: () => void;
  onRegister: () => void;
  onSignIn: () => void;
}

export const Register: React.FC<RegisterProps> = ({ onBack, onRegister, onSignIn }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const isValidEmail = email.includes('@') && email.includes('.');

  return (
    <View className="flex-1 bg-[#FFF8F0]">
      <StatusBar barStyle="dark-content" />

      <ScrollView className="flex-1 p-6" showsVerticalScrollIndicator={false}>
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
          Register
        </Text>
        <Text className="text-base text-[#B8AFA5] text-center mb-8">
          Create your new account
        </Text>

        {/* Form */}
        <View className="gap-4">
          {/* Full Name Input */}
          <View className="flex-row items-center bg-[#F4E8D8] rounded-xl px-4 py-3.5">
            <Feather name="user" size={18} color="#9BA88D" style={{ marginRight: 12 }} />
            <TextInput
              className="flex-1 text-base text-[#2C3E2F]"
              placeholder="Full Name"
              placeholderTextColor="#B8AFA5"
              value={fullName}
              onChangeText={setFullName}
            />
          </View>

          {/* Email Input */}
          <View className="flex-row items-center bg-[#F4E8D8] rounded-xl px-4 py-3.5">
            <Feather name="mail" size={18} color="#9BA88D" style={{ marginRight: 12 }} />
            <TextInput
              className="flex-1 text-base text-[#2C3E2F]"
              placeholder="user@mail.com"
              placeholderTextColor="#B8AFA5"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
            {isValidEmail && <Feather name="check" size={18} color="#6B8E7F" />}
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

          {/* Register Button */}
          <TouchableOpacity
            className="bg-[#6B8E7F] py-4 rounded-xl items-center mt-6"
            onPress={onRegister}
          >
            <Text className="text-white text-base font-semibold">Register</Text>
          </TouchableOpacity>

          {/* Remember Me & Forgot Password */}
          <View className="flex-row justify-between items-center">
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

          {/* Sign In Link */}
          <View className="flex-row justify-center mt-2 mb-6">
            <Text className="text-[#B8AFA5] text-sm">Already have an account? </Text>
            <TouchableOpacity onPress={onSignIn}>
              <Text className="text-[#2C3E2F] text-sm font-semibold">Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};