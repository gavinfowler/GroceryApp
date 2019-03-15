/**
 * Grocery List App
 * CS3200 Mobile Development
 * 
 * @author GFowler
 */

import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';

import navigationServices from '../services/NavigationService'

import {
  Container,
  Content,
  Icon,
  Text,
  Fab,
  Thumbnail,
  Card,
  CardItem,
  Left,
  Body,
  List,
  ListItem,
} from 'native-base'
import { getList } from '../redux/actions/actions';
import { connect } from 'react-redux';
import ItemList from '../components/ItemList';

const appColor = '#228B22';

class ListDetails extends Component {
  static navigationOptions = {
    title: 'List Detail',
    headerStyle: {
      backgroundColor: appColor
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      temp: null
    };
  }

  componentWillMount() {
    this.props.dispatchGetList(this.props.navigation.getParam('index'));
  }

  render() {
    if (this.props.activeList != null) {
      return (
        <Container>
          <Content>
            <Card>
              <CardItem>
                <Left>
                  <Thumbnail square large source={{ uri: this.props.activeList.icon }} />
                  <Body>
                    <Text>
                      {this.props.activeList.name}
                    </Text>
                    <Text note>
                      {this.props.activeList.date}
                    </Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <ItemList />
              </CardItem>
            </Card>
          </Content>
          <Fab style={{ backgroundColor: appColor }} position="bottomRight" onPress={() => navigationServices.navigate('AddListItem')}>
            <Icon active name="add" />
          </Fab>
        </Container>
      );
    }
    else {
      return (
        <Container>
          <Content>
            <Text>
              Please Hold...
            </Text>
          </Content>
          <Fab style={{ backgroundColor: appColor }} position="bottomRight" onPress={() => navigationServices.navigate('AddListItem')}>
            <Icon active name="add" />
          </Fab>
        </Container>
      );
    }
  }

  renderSubList() {
    let results = [];
    tempKey = 0;
    for (a of this.props.activeList.itemList) {
      // console.log(a);
      results.push(<ListItem
        key={tempKey++}
        style={[a.active ? { backgroundColor: 'white' } : { backgroundColor: 'grey' }]}>
        <Text>{a.itemName}</Text>
      </ListItem>);
    }
    return results;
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchGetList: (index) => dispatch(getList(index))
  };
}

function mapStateToProps(state) {
  return {
    activeList: state.activeList
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListDetails);

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