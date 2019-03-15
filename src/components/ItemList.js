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

import { NavigationEvents } from 'react-navigation';

import { Container, Header, Content, Button, Icon, List, ListItem, Text, Footer, Fab, Thumbnail, Left, Body, Right } from 'native-base';

import { deleteList, toggleItem } from '../redux/actions/actions';
import { TOGGLEITEM } from '../redux/actions/constants';

const appColor = '#228B22';

class ItemList extends Component {
  constructor(props) {
    // console.log(props.activeList.itemList);
    var date = new Date();
    // console.log(date.toLocaleString());
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      basic: true,
      listViewData: this.props.list[this.props.activeList].itemList,
    };
    // console.log(this.state.listViewData);
  }

  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
    // this.props.dispatchDeleteList(rowId);
    // console.log(rowId);
    // console.log(this.props.list);
  }

  toggle(index){
    this.props.dispatchToggleItem(index);
    this.forceUpdate();
  }

  render() {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return (
      <>
        <NavigationEvents onWillFocus={() => this.forceUpdate()} />
        <List
          leftOpenValue={75}
          rightOpenValue={-75}
          dataSource={this.ds.cloneWithRows(this.state.listViewData)}
          renderRow={(data, secId, rowId) =>
            <ListItem style={(data.active)?{backgroundColor:'white'}:{backgroundColor:'lightgrey'}} onPress={()=>this.toggle(rowId)}>
              <Text>{data.itemName}</Text>
            </ListItem>}
          renderLeftHiddenRow={(data, secId, rowId) =>
            <Button full style={{backgroundColor: '#228B22'}} onPress={() => { navigationService.navigate('Rename', { name: data, rowId: rowId }) }}>
              <Icon active name="paper" />
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

function mapDispatchToProps(dispatch) {
  return {
    dispatchToggleItem: (index) => dispatch(toggleItem(index)),
  };
}

function mapStateToProps(state) {
  return {
    list: state.list,
    activeList: state.activeList
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);