import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  async logout() {

    try {

        await firebase.auth().signOut();

        // Navigate to login view

    } catch (error) {
        console.log(error);
    }

}

  render() {
    return (
      <View>
        <Text> This is create </Text>
      </View>
    );
  }
}
