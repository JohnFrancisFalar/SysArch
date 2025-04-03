import { Button, Text, View, StyleSheet, ImageBackground, TouchableOpacity, Platform, TextInput, ScrollView, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from 'expo-router';

export default function Login() {
  const navigation = useNavigation();
  const [useremail, setUseremail] = useState('');
  const [userpass, setUserpass] = useState('');
  const screenHeight = Dimensions.get('window').height;

  const handleLogin = async () => {
    if (!useremail || !userpass) {
      alert("❌ Please enter both email and password.");
      return;
    }

    try {
      const response = await fetch('http://192.168.254.130:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: useremail, password: userpass }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('✅ Login successful:', data);
        setTimeout(() => navigation.navigate('homescreen'), 500);
      } else {
        console.log('❌ Login failed:', data.message);
        alert(data.message);
      }
    } catch (error) {
      console.error('❌ Network Error:', error);
      alert('Network error! Please check your connection.');
    }
  };

  return (
    <ImageBackground source={require('../Images/loginbg.png')} style={styles.background} blurRadius={3}>
      <ScrollView contentContainerStyle={[styles.scrollViewContent, { minHeight: screenHeight }]}>
        <TouchableOpacity onPress={() => navigation.navigate('index')} style={styles.backButton}>
          <Text style={styles.backText}>{"Back"}</Text>
        </TouchableOpacity>
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <View style={styles.inputRow}>
              <Text style={styles.label}>Email:</Text>
              <TextInput
                style={styles.input}
                placeholder="User Email"
                onChangeText={setUseremail}
                value={useremail}
                autoCapitalize="none"
                keyboardType="email-address"
              />
            </View>

            <View style={styles.inputRow}>
              <Text style={styles.label}>Password:</Text>
              <TextInput
                style={styles.input}
                placeholder="Password"
                value={userpass}
                onChangeText={setUserpass}
                secureTextEntry
              />
            </View>

            <Button title="Sign in" onPress={handleLogin} />
            <Button title="Create Account" onPress={() => navigation.navigate('login')} />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: Platform.OS === 'android' ? 40 : 60,
    left: 20,
  },
  backText: {
    fontSize: 20,
    color: 'white',
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