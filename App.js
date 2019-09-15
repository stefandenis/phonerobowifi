import { StyleSheet, Text, View ,Image, Button } from 'react-native';
import React, { Component } from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import TCPconnectionScreen from './screens/TCPconnectionScreen'
import TextCommandScreen from './screens/TextCommandScreen'
import ChooseModeScreen from './screens/TextCommandScreen'


const MainNavigator = createStackNavigator({
  TCPconnection: {screen: TCPconnectionScreen},
  TextCommand: {screen: TextCommandScreen},
  ChoseMode: {screen: ChooseModeScreen}



});

const App = createAppContainer(MainNavigator);

export default App;