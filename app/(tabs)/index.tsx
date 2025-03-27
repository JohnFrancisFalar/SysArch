import { Button, Text, View, Image, StyleSheet, Platform, ImageBackground } from 'react-native';
import React from 'react';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useNavigation } from 'expo-router';
import { NavigationProp } from '@react-navigation/native';
import { navigate } from 'expo-router/build/global-state/routing';
import Login from './login';

export default function intro() {
  const navigation = useNavigation<NavigationProp<any>>(); 
  return (
    <ImageBackground source = {require('../Images/parking.png')}
    style = {styles.background} blurRadius={3}
    >
    <View>
      <View style = {styles.logo}>
      <Image source={require('../Images/sweetSpotLogo.png')}
      ></Image></View>
      <ThemedText style={styles.welcome}>Welcome to</ThemedText>
      <ThemedText style={[styles.title, { lineHeight: 100 }]}>SweetSpot</ThemedText>
      <ThemedText style={styles.desc}>
        A Smart Parking System is a an efficient parking 
        system integrated with a mobile app where drivers 
        who wish to park their vehicles are given a visual 
        representation to where their designated parking 
        space is when they enter the parking lot.  It is a very
        time efficient and reduces the drivers time to find a 
        parking space.</ThemedText>
        <Button title="Get Started" onPress={() => navigation.navigate('login')}/>
        
      </View>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1
  },
  logo: {
    alignItems: 'center',
    top: 10,
    resizeMode: 'contain',
  },
  desc: {
    top: -230,
    textAlign: 'center',
    color:'white',
  },
  welcome: {
    color:'white',
    textAlign: 'center',
    fontFamily: 'serif',
    fontSize: 40,
    top: -100,
    lineHeight: 50
  },
  title: {
    fontFamily: 'serif',
    
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: '25%',
    fontSize: 60,
    color: 'orange',
    top: -250
  },


});
