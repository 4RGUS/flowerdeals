//imports
import React, {Component} from 'react';
import * as firebase from "firebase";
import Pages from './components/pages';
import {Router, Stack, Scene} from 'react-native-router-flux';


//main class
export default class App extends Component {

  constructor(props){
    super(props);

    firebase.initializeApp({
      apiKey: "AIzaSyCLoyOXmf8nG8gRvU3s6eMwaKB4AmPV71o",
    authDomain: "flower-deals.firebaseapp.com",
    databaseURL: "https://flower-deals.firebaseio.com",
    projectId: "flower-deals",
    storageBucket: "flower-deals.appspot.com",
    messagingSenderId: "72567050700"
    })
  }


  render() {
    return (
      <Router>
      <Stack key="root">
        <Scene key="login" component={Pages.Login} title="Login"/>
        <Scene key="created" component={Pages.Create} title = "Create"/>
      </Stack>
    </Router>
    );
  }
}
