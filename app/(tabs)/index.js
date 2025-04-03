import { Button, Text, View, Image, StyleSheet, ImageBackground, ScrollView, Dimensions } from 'react-native';
import React from 'react';
import { useNavigation } from 'expo-router';

export default function intro() {
  const navigation = useNavigation();
  const screenHeight = Dimensions.get('window').height;

  return (
    <ImageBackground source={require('../Images/parking.png')} style={styles.background} blurRadius={3}>
      <ScrollView contentContainerStyle={[styles.scrollViewContent, { minHeight: screenHeight }]}>
        <View style={styles.logo}>
          <Image source={require('../Images/sweetSpotLogo.png')} style={styles.logoImage} />
        </View>
        <Text style={styles.welcome}>Welcome to</Text>
        <Text style={styles.title}>SweetSpot</Text>
        <Text style={styles.desc}>
          A Smart Parking System is an efficient parking system integrated with a mobile app where drivers who wish to park their vehicles are given a visual representation to where their designated parking space is when they enter the parking lot. It is very time efficient and reduces the drivers time to find a parking space.
        </Text>
        <Button title="Get Started" onPress={() => navigation.navigate('login')} />
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingVertical: 20,
    alignItems: 'center', // Center content horizontally
  },
  logo: {
    marginBottom: 20,
    alignItems: 'center',
  },
  logoImage: {
    width: 200, // Adjust logo size as needed
    height: 200, // Adjust logo size as needed
    resizeMode: 'contain',
  },
  desc: {
    textAlign: 'center',
    color: 'white',
    marginHorizontal: 20,
    marginTop: 20,
    fontSize: 16, // Adjusted font size for mobile
  },
  welcome: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'serif',
    fontSize: 32, // Adjusted font size for mobile
    marginTop: 20,
    lineHeight: 40,
  },
  title: {
    fontFamily: 'serif',
    textAlign: 'center',
    fontSize: 48, // Adjusted font size for mobile
    color: 'orange',
    marginTop: 10,
  },
});