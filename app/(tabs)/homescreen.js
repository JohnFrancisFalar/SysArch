import { Platform, Button, Text, View, Image, StyleSheet, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from 'expo-router';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');

  const malls = [
    { id: 'sm', name: 'SM Seaside Cebu', slot: 5, distance: '8 km', image: require('../Images/loginbg.png') },
    { id: 'gaisano', name: 'Gaisano Tabunok', slot: 15, distance: '600 m', image: require('../Images/loginbg.png') },
    { id: 'stc', name: 'South Town Centre', slot: 7, distance: '300 m', image: require('../Images/loginbg.png') },
    { id: 'gm', name: 'Gaisano Minglanilla', slot: 7, distance: '300 m', image: require('../Images/loginbg.png') }
  ];

  const filteredMalls = malls.filter(mall => mall.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <ImageBackground source={require('../Images/loginbg.png')} style={styles.background} blurRadius={3}>
      <View style={styles.overlay}>
        <TouchableOpacity onPress={() => navigation.navigate('login')}>
          <Text style={styles.backText}>{'← Back'}</Text>
        </TouchableOpacity>

        <View style={styles.logoContainer}>
          <Image source={require('../Images/sweetSpotLogo.png')} style={styles.logo} />
          <Text style={styles.tagline}>FINDING THE RIGHT SPOT AT THE RIGHT TIME</Text>
        </View>
        <View style={styles.mallcontainers}>
          <View style={styles.searchContainer}>
            <Ionicons name="search" size={20} color="#999" style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search..."
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>

          <Text style={styles.sectionTitle}>Parking Nearby</Text>

          <ScrollView>
            {filteredMalls.map(mall => (
              <TouchableOpacity key={mall.id} style={styles.card}>
                <Image source={mall.image} style={styles.mallImage} />
                <View style={styles.mallDetails}>
                  <View>
                    <Text style={styles.mallName}><Ionicons name="location" size={16} color="#007AFF" /> {mall.name}</Text>
                    <Text style={styles.mallInfo}>{mall.slot} spaces available</Text>
                    <Text style={styles.mallInfo}>{mall.distance}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  mallcontainers: {
    backgroundColor: "transparent", // changed from grey
    flex:1, // added flex 1
  },
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'android' ? 50 : 30,
  },
  backText: {
    fontSize: 18,
    color: 'white',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
  },
  tagline: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
    paddingHorizontal: 15,
    marginVertical: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  mallImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  mallDetails: {
    marginLeft: 15,
    flex: 1,
  },
  mallName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  mallInfo: {
    fontSize: 14,
    color: '#666',
  },
});