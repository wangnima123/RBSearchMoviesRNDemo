/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component,} from 'react';

import main from './components/Main'

import { Platform, StyleSheet, Text, View, NavigatorIOS } from 'react-native';

type
Props = {};
export default class App extends Component {

  render() {
    return (
        <NavigatorIOS
            initialRoute={{
              id: 'main',
              component:main,
                title:"Search Movies",
            }}
            style={{flex: 1}}
        />
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
});
