import React from "react";
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default class ListTodo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      refresh: false,
    };
  }
  
  render() {
    return (
      <FlatList
        data={this.props.dataTodo}
        renderItem={({ item }) => this.renderItem(item)}
        keyExtractor={item => item.id.toString()}
        refreshing={this.state.refresh}
      />
    );
  }

  renderItem = item => {
    let nameIcon;
    let styleText;
    if (item.selected) {
      nameIcon = "checkbox-marked";
      styleText = {
        color: "#cecece",
        textDecorationLine: "line-through",
      };
    } else {
      nameIcon = "checkbox-blank-outline";
    }
    return (
      <View style={styles.containerItem}>
        <TouchableOpacity
          onPress={() => {
            this.props.markTodo(item.id);
            this.setState({ refresh: !this.state.refresh });
          }}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Icon name={nameIcon} size={20} color="#000" />
          <Text style={[styles.textItem, styleText]}>{item.text}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.removeTodo(item.id);
            this.setState({ refresh: !this.state.refresh });
          }}
        >
          <Icon name="delete" size={20} color="#000" />
        </TouchableOpacity>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  containerItem: {
    margin: 10,
    flexDirection: "row",
    width: 200,
    justifyContent: "space-around",
    alignItems: "center",
  },
  textItem: {
    fontSize: 24,
    textAlign: "center",
  },
});
