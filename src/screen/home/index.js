import React, { Component } from "react";
import { View, Alert, Text, TextInput, StyleSheet, Button } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionsTodo from "./redux/actions";
import ListTodo from "./components/listTodo";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoText: "",
    };
  }

  render() {
    return (
      <>
        <View style={styles.container}>
          <Text style={styles.text}>Adicionat novo ToDo</Text>
          <TextInput
            style={styles.textInput}
            placeholder="O Que deseja fazer?"
            value={this.state.todoText}
            editable
            onChangeText={text => this.setState({ todoText: text })}
          />
          <Button title="Adicionar" onPress={() => this.handleSubmit()} />
        </View>
        <View style={styles.listContainer}>
          <ListTodo
            dataTodo={this.props.todoReducer.todoList}
            markTodo={this.props.todoDispatch.markTodo}
            removeTodo={this.props.todoDispatch.removeTodo}
          />
        </View>
      </>
    );
  }

  handleSubmit = () => {
    if (this.state.todoText !== "") {
      this.props.todoDispatch.addTodo({ text: this.state.todoText });
      this.setState({ todoText: "" });
    } else {
      Alert.alert("Erro", "Por gentileza insira algum valor");
    }
  };
}

const styles = StyleSheet.create({
  container: {
    height: "50%",
    alignItems: "center",
  },
  listContainer: {
    height: "50%",
  },
  text: {
    fontSize: 16,
    margin: 10,
  },
  textInput: {
    margin: 10,
    borderWidth: 1,
  },
});

const mapStateToProps = state => ({
  todoReducer: state.todoReducer,
});

const mapDispatchToProps = dispatch => ({
  todoDispatch: bindActionCreators(actionsTodo, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
