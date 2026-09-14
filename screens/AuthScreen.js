import React, { useState } from 'react';
import { View, Button} from 'react-native';

import Login from '../components/LogInComponent';  
import Signup from '../components/SignUpComponent';
import GlobalStyle from '../style/GlobalStyle';

export default function AuthScreen() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <View style={GlobalStyle.container}>
      {isLogin ? <Login /> : <Signup />}
      <View style={GlobalStyle.switchContainer}>
        <Button
          title={isLogin ? 'Har du ikke en konto? Opret en' : 'Har du en konto? Log ind'}
          onPress={() => setIsLogin(prev => !prev)}
        />
      </View>
    </View>
  );
}

