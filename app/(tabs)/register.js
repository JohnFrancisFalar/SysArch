import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function Register() {
  const navigation = useNavigation(); // ✅ Use navigation hook

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [license, setLicense] = useState('');
  const [plate, setPlate] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await fetch('http://192.168.254.130:5000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName, email, contact, gender, dob, license, plate, password
        }),
      });

      const text = await response.text(); 
      console.log("🔍 Raw API Response:", text);

      if (!response.ok) { 
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const data = JSON.parse(text);  
      
      // ✅ Correct Alert.alert() syntax
      Alert.alert('Registration Successful!', 'You can now log in.', [
        { text: "OK", onPress: () => navigation.navigate('login') } // ✅ Use correct navigation function
      ]);
    } catch (error) {
      console.error("❌ Error:", error);
      Alert.alert("Error", "Unable to connect to the server.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>

      <TextInput style={styles.input} placeholder="Full Name" onChangeText={setFullName} />
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Contact #" keyboardType="phone-pad" onChangeText={setContact} />

      <Picker selectedValue={gender} style={styles.picker} onValueChange={(itemValue) => setGender(itemValue)}>
        <Picker.Item label="Select Gender" value="" />
        <Picker.Item label="Male" value="Male" />
        <Picker.Item label="Female" value="Female" />
      </Picker>

      <TextInput style={styles.input} placeholder="Date of Birth (YYYY-MM-DD)" onChangeText={setDob} />
      <TextInput style={styles.input} placeholder="License #" onChangeText={setLicense} />
      <TextInput style={styles.input} placeholder="Vehicle Plate #" onChangeText={setPlate} />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry onChangeText={setPassword} />

      <Button title="Register" onPress={handleRegister} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  picker: {
    height: 50,
    backgroundColor: 'white',
    marginBottom: 10,
  },
});
