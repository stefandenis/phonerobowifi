//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
var net = require('react-native-tcp');

// create a component
export default class TCPconnectionScreen extends Component {
   
    
   
    render() {
        return (
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center',backgroundColor:'red'}}>
            <View style={styles.container}>
              
                <Text>Connect to server: </Text>
              
            </View>

            <View style= {{ flex:1, justifyContent: 'center', alignItems: 'center'}}>
                {/* handle input*/}

            </View>
                   
            </View>
            );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50'
        
    },
});


