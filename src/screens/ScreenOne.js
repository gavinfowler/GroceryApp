/**
 * Grocery List App
 * CS3200 Mobile Development
 * 
 * @author GFowler 
 * @author CMano
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import navigationService from '../services/NavigationService';
import Counter from '../components/Counter';


export default class ScreenOne extends Component {
    static navigationOptions = {
        title: 'One'
    }

    /*** Mounting ***/
    componentWillMount() {
        console.log('One: componentWillMount');
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to Screen One
            </Text>
                <TouchableOpacity
                    onPress={() => { navigationService.navigate('Home', { from: 'from One' }) }}
                    style={styles.touchableButton}
                >
                    <Text
                        style={styles.touchableButtonText}
                    >
                        Go to Home
            </Text>
                </TouchableOpacity>
                <Counter/>
            </View>
        );
    }

    componentDidMount() {
        console.log('One: componentDidMount');

        this.willBlurListener = this.props.navigation.addListener(
            'willBlur',
            data => {
                console.log('One: willBlur');
            }
        )

        this.didBlurListener = this.props.navigation.addListener(
            'didBlur',
            data => {
                console.log('One: didBlur');
            }
        )

        this.willFocusListener = this.props.navigation.addListener(
            'willFocus',
            data => {
                console.log('One: willFocus');
            }
        )

        this.didFocusListener = this.props.navigation.addListener(
            'didFocus',
            data => {
                console.log('One: didFocus');
            }
        )
    }

    /*** UPDATING ***/
    componentWillReceiveProps(nextProps) {
        console.log('One: componentWillReceiveProps');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('One: shouldComponentUpdate');
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('One: componentWillUpdate');
    }

    //render() is the next step, but is defined already

    componentDidUpdate(prevProps, prevState) {
        console.log('One: componentDidUpdate');
    }

    /*** UNMOUNTING ***/
    componentWillUnmount() {
        console.log('One: componentWillUnmount');

        this.willBlurListener.remove();
        this.didBlurListener.remove();
        this.willFocusListener.remove();
        this.didFocusListener.remove();
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