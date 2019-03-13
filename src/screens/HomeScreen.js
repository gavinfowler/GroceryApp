/**
 * Grocery List App
 * CS3200 Mobile Development
 * 
 * @author GFowler 
 * @author CMano
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import navigationService from '../services/NavigationService';
import Counter from '../components/Counter';
import Button from '../components/Button';


export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home'
  }

  constructor(props) {
    super(props);
  }

  /*** Mounting ***/
  componentWillMount() {
    console.log('Home: componentWillMount');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to The Home Screen
            </Text>
        <TouchableOpacity
          onPress={() => { navigationService.navigate('One') }}
          style={styles.touchableButton}
        >
          <Text
            style={styles.touchableButtonText}
          >
            Go to Screen One
            </Text>
        </TouchableOpacity>
        <Counter/>
        <Button
          name='Up'
          incr={10}
          style={styles.touchableButton}
        />
        <Button
          name='Down'
          incr={-1}
          style={styles.touchableButton}
        />
      </View>
    );
  }

  componentDidMount() {
    console.log('Home: componentDidMount');
  }

  /*** UPDATING ***/
  componentWillReceiveProps(nextProps) {
    console.log('Home: componentWillReceiveProps (nextProp.custom: ' + nextProps.navigation.getParam('custom') + ')');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Home: shouldComponentUpdate');
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('Home: componentWillUpdate');
  }

  //render() is the next step, but is defined already

  componentDidUpdate(prevProps, prevState) {
    console.log('Home: componentDidUpdate');
  }

  /*** UNMOUNTING ***/
  componentWillUnmount() {
    console.log('Home: componentWillUnmount');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  touchableButton: {
    backgroundColor: 'lightblue',
    padding: 10,
    margin: 10,
    borderRadius: 20
  },
  touchableButtonText: {
    fontSize: 20
  }
});