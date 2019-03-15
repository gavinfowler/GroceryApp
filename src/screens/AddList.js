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
import { addList } from '../redux/actions/actions';

class AddList extends Component {
  static navigationOptions = {
    title: 'Add List',
    headerStyle: {
      backgroundColor: '#228B22'
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      icon: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.buttonText}>List Name</Text>
        <TextInput
          onChangeText={(temp) => this.setState({ name: temp })}
          editable={true}
          value={this.state.name}
          onSubmitEditing={Keyboard.dismiss}
          autoFocus={true}
          style={{ fontSize: 20 }}
        />
        <Text style={styles.buttonText}>Text Icon (URL)</Text>
        <TextInput
          onChangeText={(temp) => this.setState({ icon: temp })}
          editable={true}
          value={this.state.icon}
          onSubmitEditing={Keyboard.dismiss}
          style={{ fontSize: 20 }}
        />
        <View style={styles.buttonContainer}>
          <Button style={styles.buttons} onPress={() => { this.save() }}><Text style={styles.buttonText}>Save</Text></Button>
          <Button style={styles.buttons} onPress={() => { navigationService.goBack() }}><Text style={styles.buttonText}>Cancel</Text></Button>
        </View>
      </View>
    );
  }

  save() {
    this.props.dispatchAddList(this.state.name, this.state.icon);
    console.log(this.state.name + ' saved with icon ' + this.state.icon);
    navigationService.navigate('Main');
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchAddList: (name, icon) => dispatch(addList(name, icon))
  };
}

export default connect(null, mapDispatchToProps)(AddList);

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