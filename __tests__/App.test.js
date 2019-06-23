import React from "react";
import HomeScreen from "../src/screen/home";
import { shallow } from "enzyme";
import configureStore from "redux-mock-store";
import { Alert } from "react-native";

jest.mock("Alert", () => ({
  alert: jest.fn(),
}));

describe("=== SCREEN === HOME --- HomeScreen", () => {
  //#region Configurations

  const middleware = [];
  const mockStore = configureStore(middleware);

  const initial_state = {
    todoReducer: {
      todoList: [
        {
          id: 1,
          text: "Configurar o Jest",
          selected: true,
        },
        {
          id: 1,
          text: "Fazer os testes",
          selected: false,
        },
      ],
    },
  };
  const store = mockStore(initial_state);

  const wrapper = shallow(<HomeScreen store={store} />)
    .dive()
    .dive();

  //#endregion

  //#region Render and is Equal

  it("Render and is Equal", () => {
    expect(wrapper).toMatchSnapshot();
  });

  //#endregion

  //#region Find TextInput and change the value

  it("Find TextInput and change the value", () => {
    expect(wrapper.state().todoText).toEqual("");
    wrapper
      .find("TextInput")
      .props()
      .onChangeText("Fazer Cafe");

    expect(wrapper.state().todoText).toEqual("Fazer Cafe");
  });

  //#endregion

  //#region Find Button and press that when have textTodo

  it("Find Button and press that when have textTodo", () => {
    wrapper
      .find("Button")
      .props()
      .onPress();

    const actions = store.getActions();

    expect(actions[0].type).toEqual("ADD_TODO");
    expect(wrapper.state().todoText).toEqual("");
  });

  //#endregion

  //#region Find Button and press that when textTodo is empty

  it("Find Button and press that when textTodo is empty", () => {
    wrapper
      .find("Button")
      .props()
      .onPress();

    expect(Alert.alert).toHaveBeenCalledTimes(1);
    expect(Alert.alert.mock.calls[0][0]).toEqual("Erro");
    expect(Alert.alert.mock.calls[0][1]).toEqual("Por gentileza insira algum valor");
  });

  //#endregion
});
