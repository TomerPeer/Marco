import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import NavBarDrawer from './NavBar';
export default function App() {
  return (
    <View style={styles.container}>
      <NavBarDrawer></NavBarDrawer> 
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  
});
