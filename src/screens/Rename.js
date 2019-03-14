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

export default class Rename extends Component {
  static navigationOptions = {
    title: 'Rename',
    headerStyle: {
      backgroundColor: '#228B22'
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      text: this.props.navigation.getParam('name').name,
      id: this.props.navigation.getParam('rowId'),
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={(temp) => this.setState({ text: temp })}
          editable={true}
          value={this.state.text}
          onSubmitEditing={Keyboard.dismiss}
          autoFocus={true}
          style={{ fontSize: 20 }}
        />
        <View style={styles.buttonContainer}>
          <Button style={styles.buttons}><Text style={styles.buttonText}>Save</Text></Button>
          <Button style={styles.buttons}><Text style={styles.buttonText}>Cancel</Text></Button>
        </View>
      </View>
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
  buttonContainer:{
    width:'100%',
     flex:1,
     flexDirection:'row', 
     justifyContent:'space-around'
  },
  buttons:{
    backgroundColor: '#228B22',
    width:'25%',
    justifyContent: 'center',
  },
  buttonText:{
    color: 'black',
    fontSize: 20, 
  },
});