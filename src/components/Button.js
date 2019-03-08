import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';

import { increment, decrement } from '../redux/actions/actions';

class Button extends Component {
    render() {
        return (
            <TouchableOpacity
                onPress={() => this.props.dispatchIncrement(this.props.incr)}
                style={styles.touchableButton}
            >
                <Text 
                    style={styles.touchableButtonText}>
                    {this.props.name}
                </Text>
            </TouchableOpacity>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatchIncrement: (val) => dispatch(increment(val)),
        dispatchDecrement: () => dispatch(decrement())
    };
}

const styles = StyleSheet.create({
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

export default connect(null, mapDispatchToProps)(Button);