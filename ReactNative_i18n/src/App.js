/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react';
import { createAppContainer } from 'react-navigation'
import { StyleSheet, View,StatusBar, AppState } from 'react-native'
import MainTabNavigator from "./containers/main.route";
import CampingStackNavigator from "./containers/camping/camping.route";

class App extends Component {

  render() {

    const AppContainer = createAppContainer(CampingStackNavigator)
    return (
      <View style = {styles.container}>
        <AppContainer/>
      </View>
    )
  }

};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})