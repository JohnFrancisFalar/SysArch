import { Button, Text, View, StyleSheet, ImageBackground, TouchableOpacity, Platform } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from 'expo-router';
import { NavigationProp } from '@react-navigation/native';
import { TextInput } from 'react-native';

export default function Login() {
  const navigation = useNavigation<NavigationProp<any>>();
  const [useremail, setUseremail] = useState('');
  const [userpass, setUserpass] = useState('');

  const handleLogin = () => {
    console.log('Email: ', useremail);
    console.log('Password: ', userpass);
  };

  return (
    <ImageBackground source={require('../Images/loginbg.png')} style={styles.background} blurRadius={3}>
      <TouchableOpacity onPress={() => navigation.navigate('index')}>
        <Text style={{ 
          fontSize: 20, 
          right: 130, 
          bottom: 185,
          marginTop: Platform.OS === 'android' ? 50 : 10,
          color:'white' 
        }}>
          {"Back"}
        </Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <View style={styles.inputRow}>
            <Text style={styles.label}>Email:</Text>
            <TextInput
              style={styles.input}
              placeholder="User Email"
              onChangeText={(text) => setUseremail(text)}
            />
          </View>

          <View style={styles.inputRow}>
            <Text style={styles.label}>Password:</Text>
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={userpass}
              onChangeText={(text) => setUserpass(text)}
              secureTextEntry
            />
          </View>

          <Button title="Sign in" onPress={() => { handleLogin(); navigation.navigate('homescreen'); }} />
          <Button title="Create Account" onPress={() => navigation.navigate('login')} />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    padding: 20,
  },
  formContainer: {
    alignItems: 'stretch',
  },
  inputRow: {
    marginBottom: 15,
    flexDirection: 'row', 
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    marginRight: 5, 
  },
  input: {
    flex: 1, 
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
});