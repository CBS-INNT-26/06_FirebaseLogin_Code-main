import { initializeApp } from 'firebase/app';
import {
  initializeAuth,
  getReactNativePersistence,
} from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Indsæt din egen config her fra Firebase Console
const firebaseConfig = {
  apiKey: "DIN_API_KEY",
  authDomain: "DIT_PROJECT.firebaseapp.com",
  projectId: "DIT_PROJECT",
  storageBucket: "DIT_PROJECT.firebasestorage.app",
  messagingSenderId: "…",
  appId: "…",
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };
