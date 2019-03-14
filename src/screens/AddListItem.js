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
import { connect } from 'react-redux'
import { renameList } from '../redux/actions/actions'

class AddListItem extends Component {
  static navigationOptions = {
    title: 'Add List Item',
    headerStyle: {
      backgroundColor: '#228B22'
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  render() {
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
          <Button style={styles.buttons}><Text style={styles.buttonText} onPress={() => navigationService.navigate('Main')}>Cancel</Text></Button>
        </View>
      </View>
    );
  }

  save() {
    alert('save');
    // this.props.dispatchRenameList(this.props.navigation.getParam('rowId'), this.state.text);
    // navigationService.navigate('Main');
  }

}

function mapDispatchToProps(dispatch) {
  return {
    dispatchRenameList: (index, newName) => dispatch(renameList(index, newName))
  };
}

export default connect(null, mapDispatchToProps)(AddListItem);

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