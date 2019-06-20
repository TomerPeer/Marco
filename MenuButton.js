import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Ionicons} from '@expo/vector-icons'

export default function MenuButton(){

    return(

        <Ionicons 
            name="md-menu"
            color="#00000"
            size={32}
            style={styles.menuIcone}
            onPress={() => {}}
        />
            
        

    );
}

const styles = StyleSheet.create({
    menuIcone: {
      zIndex: 9,
      position: "absolute",
      top:40,
      left:20,
    }
  })