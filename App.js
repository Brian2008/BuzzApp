import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTagNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation'

import fbScreen from './Screens/fb.js'
import inScreen from './Screens/in.js'

export default class App extends React.Component{
    render(){
        return(
            <AppNavigator/>
        )
    }
}
const TabNavigator = createBottomTagNavigator({
    fb:{screen:fbScreen},
    in:{screen:inScreen}
})

const AppContainer = createAppContainer(TabNavigator);