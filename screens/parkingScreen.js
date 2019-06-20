import React from 'react';
import { Text,View,StyleSheet,TouchableOpacity, TouchableNativeFeedback, Dimensions,Button } from 'react-native';
import RoundButton from '../assets/roundButton';
import ReportButton from '../assets/reportButton';
function ParkingScreen() {
        
    return (
        <View style={styles.container}>
            <Text  style={styles.HeaderT}> חונה ב:צהוב</Text>
            
            <RoundButton isRipple onPress={() => alert('This works great') } style={styles.RoundButton} rippleColor="#46178F">
                    <Text style={styles.TextS}> שחרר חנייה </Text>
            </RoundButton>
            <ReportButton isRipple onPress={() => alert('This works great') } style={styles.curvedButton} rippleColor="#46178F">
                    <Text style={styles.textR}> דווח תקלה </Text>
            </ReportButton>
        </View>
      
        );
   
}
  const styles = StyleSheet.create({
    container: {
      flexDirection:'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      justifyContent: 'center',
      paddingTop:Dimensions.get('window').height*0.1
      
      
    },
    RoundButton: {
       
        width: Dimensions.get('window').width*0.7,
        height: Dimensions.get('window').width*0.7,
        borderRadius: Dimensions.get('window').width/2, //Then Make the Border Radius twice the size of width or Height   
        borderWidth:10,
        borderColor:"#46178F",
        alignItems:"center",
        justifyContent:"center",
        fontWeight: 'bold'
        
     
    },
   TextS: {
       fontSize: Dimensions.get('window').width*0.14,
       alignSelf:'center',
       alignItems:"center",
        justifyContent:"center",
        flexDirection:'column'
       
   },
   textR:{
    fontSize: Dimensions.get('window').width*0.09
   },

   HeaderT: {
        fontSize: Dimensions.get('window').width*0.15,
        alignSelf:'center',
        padding:20
   },
   curvedButton:
   {
    borderRadius:10,
    backgroundColor:'#68a0cf',
    borderWidth: 1,
    borderColor: '#fff',
    width: Dimensions.get('window').width*0.45,
    height: Dimensions.get('window').width*0.2
    
   }


  });

export default ParkingScreen;