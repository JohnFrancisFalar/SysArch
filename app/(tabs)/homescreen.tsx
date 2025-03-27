import { Platform, Button, Text, View, Image, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from 'expo-router';
import { NavigationProp } from '@react-navigation/native';
import { TextInput } from 'react-native';

export default function homescreen() {
  const navigation = useNavigation<NavigationProp<any>>();
  const [searchQuery, setSearchQuery] = useState('');
  const handleMallPress = () => {
    navigation.navigate('login');
  };
  const handleSearch = () => {
    console.log('Search: ')
  }

  const malls = [
    {
        id: 'sm',
        name: 'SM Seaside Cebu',
        slot: 5,
        distance: '8 km'
    },
    {
        id: 'gaisano',
        name: 'Gaisano Tabunok',
        slot: 15,
        distance: '600 km'
    },
    {
        id: 'STC',
        name: 'South Town Centre',
        slot: 7,
        distance: '300 km'
    }
  ];
  const filterMalls = malls.filter((mall) => {
    const mallName = mall.name.toLowerCase();
    const query = searchQuery.toLowerCase();
    return mallName.includes(query);
  })

  return (
    
    <ImageBackground source={require('../Images/loginbg.png')} style={styles.background} blurRadius={3}>
      <TouchableOpacity onPress={() => navigation.navigate('login')}>
  <Text style={{ 
    fontSize: 20, 
    right: 130, 
    bottom: 75,
    marginTop: Platform.OS === 'android' ? 50 : 10,
    color:'white' 
  }}>
    {"Back"}
  </Text>
</TouchableOpacity>
        <View>
            <Image source={require('../Images/sweetSpotLogo.png')}
            style = {styles.logo}></Image>
          <Text style={styles.desc1}>FINDING THE RIGHT </Text>
          <Text style={styles.desc2}> SPOT AT THE RIGHT TIME </Text>
          
        </View>
<View style = {styles.tab2container}>
        <View style={[styles.container,]}>
            <TextInput style={[styles.search, {lineHeight: 50}]} placeholder='Search...' value = {searchQuery} onChangeText={(text) => setSearchQuery(text)}/>
            <Text style={styles.parkingnearby}>Parking Nearby</Text>
        </View>
        {filterMalls.map((mall) => (
  <TouchableOpacity key={mall.id} onPress={() => handleMallPress()}>
    <View style={styles.sm}>
      <Image source={require('../Images/loginbg.png')} style={styles.mallpic} />
      <View style={styles.namedesc}>
        <Text>{mall.name}</Text> 
        <Text>{mall.slot} spaces available</Text> 
        <Text>{mall.distance}</Text> 
      </View>
    </View>
  </TouchableOpacity>
))}
</View>
    
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    namedesc: {
        flexDirection: 'column',
        padding: 10
    },
    mallpic: {
        width: 120,
        height: 80
    },
    sm: {
        backgroundColor: 'white',
        padding: 15,
        flexDirection: 'row',
    },
    gaisano: {
        backgroundColor: 'white',
        padding: 15,
        flexDirection: 'row',
    },
    robinson: {
        backgroundColor: 'white',
        padding: 15,
        flexDirection: 'row',
    },
    tab2container: {
        height: '70%',
        width: '100%',
        bottom: -150,
        position: 'fixed',
        backgroundColor: '#D3D3D3',
        
    },
    container: {
        backgroundColor: 'White',
    },
    parkingnearby: {
        left: 10,
       fontSize: 30,
    },
    search: {
        fontSize: 20
    },
    logo: {
        position: 'absolute',
        height: 160,
        width: 220,
        right: -105,
        bottom: -50
    },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  desc1:{
    position: 'absolute',
    right: -75,
    fontFamily: 'san-serif',
    fontSize: 25,
    bottom: -60,
    color: 'white'
  },
  desc2:{
    position: 'absolute',
    right: -143,
    fontFamily: 'san-serif',
    fontSize: 25,
    bottom: -95,
    color: 'white'
  }

});