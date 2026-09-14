import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../database/database';
import GlobalStyle from '../style/GlobalStyle';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      Alert.alert('Login fejlede', error.message);
    }
  };

  return (
    <View style={GlobalStyle.container}>
      <Text style={GlobalStyle.title}>Log ind</Text>
      <TextInput
        placeholder="Email"
        style={GlobalStyle.input}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Kodeord"
        style={GlobalStyle.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={GlobalStyle.button} onPress={handleLogin}>
        <Text style={GlobalStyle.buttonText}>Log ind</Text>
      </TouchableOpacity>
    </View>
  );
}



