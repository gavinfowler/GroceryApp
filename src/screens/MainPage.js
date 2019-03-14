/**
 * Grocery List App
 * CS3200 Mobile Development
 * 
 * @author GFowler
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

import { NavigationEvents } from 'react-navigation'

import ListComp from '../components/ListComp';
import navigationService from '../services/NavigationService'

import { Container, Header, Content, Button, Icon, List, ListItem, Text, Footer, Fab } from 'native-base';

const appColor = '#228B22'

export default class MainPage extends Component {
  static navigationOptions = {
    title: 'Main Page',
    headerStyle: {
      backgroundColor: appColor
    }
  }

  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      basic: true,
      listViewData: this.props.list,
    };
  }


  render() {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return (
      <Container>
        {/* <NavigationEvents onWillFocus={()=>console.log(focus)}/> */}
        <Content>
          <ListComp />
        </Content>
        <Fab style={{ backgroundColor: appColor }} position="bottomRight" onPress={() => { navigationService.navigate('AddList') }}>
          <Icon active name="add" />
        </Fab>
      </Container>
    );
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
