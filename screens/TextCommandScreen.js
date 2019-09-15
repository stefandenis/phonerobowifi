import { StyleSheet, Text, View ,Image, Button } from 'react-native';
import React, { Component } from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';


export default class TextCommands extends Component {
  
//   var net = require('net');
// OR, if not shimming via package.json "browser" field:
// var net = require('react-native-tcp')

// var server = net.createServer(function(socket) {
//   socket.write('excellent!');
// }).listen(12345);

// var client = net.createConnection(12345);

// client.on('error', function(error) {
//   console.log(error)
// });

// client.on('data', function(data) {
//   console.log('message was received', data)
// });
  
_goForward(){

  // tcp send forward command.

}
  
  render() {
    return (
     

      <View style={{ backgroundColor:'red',justifyContent: "center", alignItems: "center" }}>
      
          <Button
           
            onPress={this._goForward}
            title="FORWARD"/>
      
    
    
            <View style={{  justifyContent: "center", alignItems: "center", flexDirection: "row"}}>
      
         <Button
           onPress={this._goLeft}
           title="LEFT"/>

      
        <Button
           onPress={this._stop}
           title="STOP"/>


         <Button
           onPress={this._goRight}
           title="RIGHT"/>


      </View>
      

     
          <Button 
            onPress={this._goBackward}
            title="BACKWARD"
            />
     
</View>

          




    );
  }
}


const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    flex : 1,
    justifyContent: "center",
    margin: 20,
    paddingLeft: 100,
    backgroundColor: 'red'
  },

  buttonStyle:{
    backgroundColor: 'orange'
  }

  


});
