import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from '../database/database';
import GlobalStyle from '../style/GlobalStyle';

export default function MainScreen() {
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Logout fejlede:', error.message);
    }
  };

  const userEmail = auth.currentUser?.email;

  return (
    <View style={GlobalStyle.container}>
      <Text style={GlobalStyle.welcome}>Hej {userEmail} 👋</Text>
      <Text style={GlobalStyle.subtitle}>Du er nu logget ind!</Text>

      <TouchableOpacity style={GlobalStyle.button} onPress={handleLogout}>
        <Text style={GlobalStyle.buttonText}>Log ud</Text>
      </TouchableOpacity>
    </View>
  );
}


