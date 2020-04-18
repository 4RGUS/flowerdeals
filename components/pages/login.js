import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import * as firebase from "firebase";
import {Actions} from 'react-native-router-flux';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email : "",
      pass : ""
    };
  }


  timpass(){
    return(
      console.log(this.state.email)
    )
  }
  async login() {
    
    try {
        await firebase.auth()
            .signInWithEmailAndPassword(this.state.email, this.state.pass);

        console.log("Logged In!");

        // Navigate to the create
      Actions.create();

    } catch (error) {
        console.log(error.toString())
    }

}

  render() {
    return (
      <View>
        <TextInput
          onChangeText = {(email)=> this.setState({email})}
          placeholder = "E-mail"
        />
        <TextInput
          onChangeText = {(pass)=> this.setState({pass})}
          placeholder = "Password"
          secureTextEntry
        />

        <Button
        onPress = {this.timpass}
        title = "Log in"
        />

      </View>
    );
  }
}
