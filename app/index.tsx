import React, { useState } from 'react';
import { WelcomeScreen } from '@/app/screens/WelcomeScreen';
import { LoadingScreen } from '@/app/screens/LoadingScreen';
import { Login } from '@/components/auth/Login';
import { Register } from '@/components/auth/Register';
import { SuccessfulLogin } from '@/components/auth/SuccessfulLogin';
import "@/global.css"

type Screen = 'welcome' | 'login' | 'register' | 'loading' | 'success';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');

  const handleLogin = () => {
    setCurrentScreen('loading');
    // Simulate API call
    setTimeout(() => {
      setCurrentScreen('success');
    }, 1500);
  };

  const handleRegister = () => {
    setCurrentScreen('loading');
    // Simulate API call
    setTimeout(() => {
      setCurrentScreen('success');
    }, 1500);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'welcome':
        return (
          <WelcomeScreen
            onSignIn={() => setCurrentScreen('login')}
            onCreateAccount={() => setCurrentScreen('register')}
          />
        );

      case 'login':
        return (
          <Login
            onBack={() => setCurrentScreen('welcome')}
            onLogin={handleLogin}
            onSignUp={() => setCurrentScreen('register')}
          />
        );

      case 'register':
        return (
          <Register
            onBack={() => setCurrentScreen('welcome')}
            onRegister={handleRegister}
            onSignIn={() => setCurrentScreen('login')}
          />
        );

      case 'loading':
        return <LoadingScreen />;

      case 'success':
        return (
          <SuccessfulLogin
            onComplete={() => {
              // Navigate to main app or reset to welcome
              setCurrentScreen('welcome');
            }}
          />
        );

      default:
        return <WelcomeScreen onSignIn={() => setCurrentScreen('login')} onCreateAccount={() => setCurrentScreen('register')} />;
    }
  };

  return renderScreen();
}