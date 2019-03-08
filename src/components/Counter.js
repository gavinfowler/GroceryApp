import React, { Component } from 'react';
import {
    StyleSheet,
    Text
} from 'react-native';
import { connect } from 'react-redux';

class Counter extends Component {

    render() {
        return (
            <Text style={styles.touchableButtonText}>
                {this.props.count}
            </Text>
        );
    }
}

function mapStateToProps(state) {
    return {
        count: state.count
    };
}

const styles = StyleSheet.create({
  touchableButtonText: {
    fontSize: 20
  }
});

export default connect(mapStateToProps)(Counter);