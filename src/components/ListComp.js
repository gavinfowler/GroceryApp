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
import { connect } from 'react-redux';

import navigationService from "../services/NavigationService";

import {NavigationEvents} from 'react-navigation'

import { Container, Header, Content, Button, Icon, List, ListItem, Text, Footer, Fab, Thumbnail, Left, Body, Right } from 'native-base';

import { deleteList } from '../redux/actions/actions'

const appColor = '#228B22';
const data = [
  'List1',
  'List2',
  'List3',
  'List4',
  'List5',
  'List6',
];

class ListComp extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      basic: true,
      listViewData: this.props.list,
    };
  }

  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
    this.props.dispatchDeleteList(rowId);
    // console.log(rowId);
    // console.log(this.props.list);
  }

  /*** Mounting ***/
  componentWillMount() {
    console.log('MainPage: componentWillMount');
  }

  render() {
    var date = new Date();
    console.log(date.toLocaleString());
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    console.log(ds);
    return (
      <>
      <NavigationEvents onWillFocus={()=>this.forceUpdate()}/>
      <List
        leftOpenValue={75}
        rightOpenValue={-75}
        dataSource={this.ds.cloneWithRows(this.state.listViewData)}
        renderRow={data =>
          <ListItem thumbnail onPress={() => { navigationService.navigate('ListDetails', { from: data }) }}>
            <Left>
              <Thumbnail square source={{ uri: data.icon }} />
            </Left>
            <Body>
              <Text> {data.name} </Text>
            </Body>
            <Right>
              <Text> {data.date} </Text>
            </Right>
          </ListItem>}
        renderLeftHiddenRow={(data, secId, rowId) =>
          <Button full onPress={() => { navigationService.navigate('Rename', { name: data, rowId: rowId }) }}>
            <Icon active name="information-circle" />
          </Button>}
        renderRightHiddenRow={(data, secId, rowId, rowMap) =>
          <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
            <Icon active name="trash" />
          </Button>}
      />
      </>
    );
  }
}

function mapDispatchToProps(dispatch){
  return {
    dispatchDeleteList: (index) => dispatch(deleteList(index)),
  };
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

function mapStateToProps(state) {
  return {
    list: state.list
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListComp);