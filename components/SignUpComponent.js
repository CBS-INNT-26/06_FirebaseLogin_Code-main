// src/components/Signup.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../database/database';
import GlobalStyle from '../style/GlobalStyle';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert('Bruger oprettet!');
    } catch (error) {
      Alert.alert('Fejl', error.message);
    }
  };

  return (
    <View style={GlobalStyle.container}>
      <Text style={GlobalStyle.title}>Opret bruger</Text>
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
      <TouchableOpacity style={GlobalStyle.button} onPress={handleSignup}>
        <Text style={GlobalStyle.buttonText}>Opret bruger</Text>
      </TouchableOpacity>
    </View>
  );
}