/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
  ListView, 
  Alert
} from 'react-native';

import navigationServices from '../services/NavigationService'

import { Container, Header, Content, Button, Icon, List, ListItem, Text, Footer, Fab } from 'native-base'

const appColor='#228B22'

export default class MainPage extends Component {
  static navigationOptions = {
    title: 'List Detail',
    headerStyle: {
      backgroundColor: appColor
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      temp: null
    };
  }

  /*** Mounting ***/
  componentWillMount() {
    console.log('ListDetail: componentWillMount');
  }

  render() {
    return (
      <Container>
        <Content>
          <Text>
            {this.props.navigation.getParam('from').name}
          </Text>
        </Content>
        <Fab style={{backgroundColor:appColor}}  position="bottomRight" onPress={()=>alert('Add an item')}>
          <Icon active name="add" />
        </Fab>
      </Container>
    );
  }

  componentDidMount() {
    console.log('ListDetail: componentDidMount');
  }

  /*** UPDATING ***/
  componentWillReceiveProps(nextProps) {
    console.log('ListDetail: componentWillReceiveProps (nextProp.custom: ' + nextProps.navigation.getParam('custom') + ')');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('ListDetail: shouldComponentUpdate');
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('ListDetail: componentWillUpdate');
  }

  //render() is the next step, but is defined already

  componentDidUpdate(prevProps, prevState) {
    console.log('ListDetail: componentDidUpdate');
  }

  /*** UNMOUNTING ***/
  componentWillUnmount() {
    console.log('ListDetail: componentWillUnmount');
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