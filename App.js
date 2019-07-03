import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Graph from "./src/components/Graph";
import Dropbox from "./src/components/Dropbox";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Graph parkingSpaces={[6, 9, 3, 0]} /> */}
      <Dropbox parking={["Red,Green,Blue,Yellow"]} />
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
    backgroundColor: '#fff',
  },
  
});
