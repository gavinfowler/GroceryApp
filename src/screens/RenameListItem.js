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
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Keyboard
} from 'react-native';
import { Button } from 'native-base'
import navigationService from '../services/NavigationService';
import { connect } from 'react-redux';
import { renameItem } from '../redux/actions/actions';

class RenameListItem extends Component {
  static navigationOptions = {
    title: 'Rename List Item',
    headerStyle: {
      backgroundColor: '#228B22'
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      text: this.props.navigation.getParam('name').itemName,
    };
  }

  render() {
    // console.log(this.props.navigation.getParam('name'));
    return (
      <View style={styles.container}>
        {/* <Text>{this.props.navigation.getParam('name').name}</Text>
        <Text>{this.props.navigation.getParam('rowId')}</Text> */}
        <TextInput
          onChangeText={(temp) => this.setState({ text: temp })}
          editable={true}
          value={this.state.text}
          onSubmitEditing={Keyboard.dismiss}
          autoFocus={true}
          style={{ fontSize: 20 }}
        />
        <View style={styles.buttonContainer}>
          <Button style={styles.buttons}><Text style={styles.buttonText} onPress={() => this.save()}>Save</Text></Button>
          <Button style={styles.buttons}><Text style={styles.buttonText} onPress={() => navigationService.goBack()}>Cancel</Text></Button>
        </View>
      </View>
    );
  }

  save() {
    this.props.dispatchRenameItem(this.props.navigation.getParam('rowId'), this.state.text);
    navigationService.goBack();
  }

}

function mapDispatchToProps(dispatch) {
  return {
    dispatchRenameItem: (index, newName) => dispatch(renameItem(index, newName)),
  };
}

export default connect(null, mapDispatchToProps)(RenameListItem);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  buttonContainer: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  buttons: {
    backgroundColor: '#228B22',
    width: '25%',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
  },
});