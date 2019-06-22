import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/screen/home";
import { Provider } from "react-redux";
import store from "./src/config/store";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HomeScreen />
      </Provider>
    );
  }
}
