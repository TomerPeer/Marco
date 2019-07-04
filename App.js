import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Graph from "./src/components/Graph";
import Dropbox from "./src/components/Dropbox";
import NavBarDrawer from './NavBar';

export default function App() {
  return (
    <View style={styles.container}>
      <NavBarDrawer style={styles.z}></NavBarDrawer>
       <Graph parkingSpaces={[3,6,9,0]}></Graph>
    </View>
    )
    }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  
  },
  z:{
    
  }
 
});
