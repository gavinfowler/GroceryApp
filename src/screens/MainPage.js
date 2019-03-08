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
  ListView
} from 'react-native';

import { Container, Header, Content, Button, Icon, List, ListItem, Text, Footer, Fab } from 'native-base'

const data = [
  'List1',
  'List2',
  'List3',
  'List4',
  'List5',
  'List6',
]

export default class MainPage extends Component {
  static navigationOptions = {
    title: 'Main Page'
  }

  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      basic: true,
      listViewData: data,
    };
  }

  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
  }

  /*** Mounting ***/
  componentWillMount() {
    console.log('MainPage: componentWillMount');
  }

  render() {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return (
      <Container>
        <Header>
          <Text style={styles.welcome}>
            Welcome to The Main Page
        </Text>
        </Header>
        <Content>
          <List
            leftOpenValue={75}
            rightOpenValue={-75}
            dataSource={this.ds.cloneWithRows(this.state.listViewData)}
            renderRow={data =>
              <ListItem>
                <Text> {data} </Text>
              </ListItem>}
            renderLeftHiddenRow={data =>
              <Button full onPress={() => alert(data)}>
                <Icon active name="information-circle" />
              </Button>}
            renderRightHiddenRow={(data, secId, rowId, rowMap) =>
              <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                <Icon active name="trash" />
              </Button>}
          />
        </Content>
        {/* <Footer>
          <Button rounded transparent >
            <Icon active name="add"/>
          </Button>
        </Footer> */}
        <Fab position="bottomRight">
          <Icon active name="add" />
        </Fab>
      </Container>
    );
  }

  componentDidMount() {
    console.log('MainPage: componentDidMount');
  }

  /*** UPDATING ***/
  componentWillReceiveProps(nextProps) {
    console.log('MainPage: componentWillReceiveProps (nextProp.custom: ' + nextProps.navigation.getParam('custom') + ')');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('MainPage: shouldComponentUpdate');
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('MainPage: componentWillUpdate');
  }

  //render() is the next step, but is defined already

  componentDidUpdate(prevProps, prevState) {
    console.log('MainPage: componentDidUpdate');
  }

  /*** UNMOUNTING ***/
  componentWillUnmount() {
    console.log('MainPage: componentWillUnmount');
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