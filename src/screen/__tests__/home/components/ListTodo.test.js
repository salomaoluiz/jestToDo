import ListTodo from "../../../home/components/listTodo";
import React from "react";
import { shallow } from "enzyme";

describe("=== SCREEN === HOME --- COMPONENTS -- ListTodo", () => {
  //#region Configurations

  const props = {
    listTodo: [
      {
        id: 1,
        text: "Configurar o Jest",
        selected: true
      },
      {
        id: 2,
        text: "Fazer os testes",
        selected: false
      }
    ],
    markTodo: jest.fn(),
    removeTodo: jest.fn()
  };
  const wrapper = shallow(<ListTodo {...props} />);

  //#endregion

  //#region Render and is Equal

  it("Render and is Equal", () => {
    expect(wrapper).toMatchSnapshot();
  });

  //#endregion

  //#region Find KeyExtractor and return the id Value

  it("Find KeyExtractor and return the id Value", () => {
    const keyExtractor = wrapper
      .find("FlatList")
      .props()
      .keyExtractor(props.listTodo[0]);

    expect(keyExtractor).toEqual("1");
  });

  //#endregion

  //#region Render Item when is selected

  it("Render Item when is selected ", () => {
    const itemMarkWrapper = wrapper
      .find("FlatList")
      .props()
      .renderItem({ item: props.listTodo[0] });
    expect(itemMarkWrapper).toMatchSnapshot();
  });

  //#endregion

  describe("Render Item -", () => {
    //#region Configurations

    const itemWrapper = shallow(
      wrapper
        .find("FlatList")
        .props()
        .renderItem({ item: props.listTodo[1] })
    );

    //#endregion

    //#region Render Item when is not selected

    it("Render Item when is not selected ", () => {
      expect(itemWrapper).toMatchSnapshot();
    });

    //#endregion

    //#region Find TouchableOpacity of the Finish Todo and press

    it("Find TouchableOpacity of the Finish Todo and press", () => {
      itemWrapper
        .find("TouchableOpacity")
        .at(0)
        .props()
        .onPress();

      expect(props.markTodo).toHaveBeenCalledTimes(1);
      expect(wrapper.state().refresh).toBe(true);
    });

    //#endregion

    //#region Find TouchableOpacity of the delete Todo press

    it("Find TouchableOpacity of the delete Todo press", () => {
      itemWrapper
        .find("TouchableOpacity")
        .at(1)
        .props()
        .onPress();

      expect(props.removeTodo).toHaveBeenCalledTimes(1);
      expect(wrapper.state().refresh).toBe(false);
    });

    //#endregion
  });
});
