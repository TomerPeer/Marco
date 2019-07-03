import React from 'react';
import {Platform, Dimensions} from 'react-native';
import {createDrawerNavigator,createAppContainer} from 'react-navigation';

import HomeScreen from './screens/HomeScreen';

const width = Dimensions.get('window').width;

const DrawerConfig = {
    darwerWidth: width*0.83,
}

const DrawNavBar = createDrawerNavigator(
    {
    Home:{
        screen: HomeScreen
     },
    },
    DrawerConfig
);
export default createAppContainer(DrawNavBar);