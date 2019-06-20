import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MenuButton from '../MenuButton'
export default function HomeScreen() {

        return (
            <View style={styles.container}>
                <MenuButton />
              <Text style={styles.text1}>Hello</Text>
            </View>
          );
        }
    
 


const styles = StyleSheet.create({
  container: {
    flex: 1,
   // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    fontSize:30
  }
});
