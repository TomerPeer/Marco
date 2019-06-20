
import React, {Component} from 'react';
import {StyleSheet, Text, View,TouchableOpacity,TouchableNativeFeedback} from 'react-native';



export default class RoundButton extends Component {
    
    render ()
     {
        let {onPress, isRipple, rippleColor, children, style} = this.props;
        return (
            <View>
                <TouchableNativeFeedback
                    onPress={onPress}
                    background={isRipple ? TouchableNativeFeedback.Ripple(rippleColor || "#000000") : null}>
                    <View style={style}>
                        {children}
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    myButton:{
      padding: 5,
      height: 200,
      width: 200,  //The Width must be the same as the height
      borderRadius:200/2, //Then Make the Border Radius twice the size of width or Height   
      borderWidth:10,
      borderColor:"#8B008B",
      alignItems:"center",
      justifyContent:"center"
     
  
    }
  });
