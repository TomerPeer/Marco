import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavBarDrawer from './NavBar';
import Graph from './src/components/Graph';
export default function App() {
  return (
    <View style={styles.container}>
      <NavBarDrawer style={styles.z}></NavBarDrawer>
       <Graph parkingSpaces={[3,6,9,0]}></Graph>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  z:{
    
  }
  
});
