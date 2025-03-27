import { Button, Text, View, StyleSheet, ImageBackground, TouchableOpacity, Platform } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from 'expo-router';
import { NavigationProp } from '@react-navigation/native';
import { TextInput } from 'react-native';

export default function Booking() {
  const navigation = useNavigation<NavigationProp<any>>();
  const [useremail, setUseremail] = useState('');
  const [userpass, setUserpass] = useState('');
  const [mall, setPickedMall] = useState('SM Seaside');
  const [parkingSlot, setPickedSlot] = useState('A - A2');
  const [vehicle, setvehicle] = useState('Honda Civic');
  const [duration, setDuration] = useState('1 Hour');
  const [arrivaltime, setArrivalTime] = useState('1 Hour');

  const handleBooking = () => {
    console.log('Email: ', useremail);
    console.log('Password: ', userpass);
  };

  return (
    <ImageBackground source={require('../Images/loginbg.png')} style={styles.background} blurRadius={3}>
      <TouchableOpacity onPress={() => navigation.navigate('')}>
        <Text style={{ 
          fontSize: 20, 
          right: 130, 
          bottom: 185,
          marginTop: Platform.OS === 'android' ? 50 : 10,
          color:'white' 
        }}>
          {"Back"}
        </Text>
        <View style={styles.container}>
        <Text style={styles.bookingdetails}>Booking Details</Text>
        <Text style={styles.arrivalcontainer}>Arrival: {arrivaltime}</Text>
        <Text>Duration: <Text style={styles.variables}>{duration}</Text></Text>
        <Text>Vehicle Details: {vehicle}</Text>
        <Text>Parking Area: {mall}</Text>
        <Text>Parking Spot: {parkingSlot}</Text>
        </View>
        </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  variables: {
    textAlign: 'right'
  }
  ,
  bookingdetails:{
    textAlign: 'center',
    fontSize: 35
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrivalcontainer:{
padding: 20,
fontSize: 30,
  },
  container: {
    width: 500,
    height: 800,
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