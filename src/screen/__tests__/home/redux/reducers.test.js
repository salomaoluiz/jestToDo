import TodoReducer from "../../../home/redux/reducers";
import * as types from "../../../home/redux/types";

describe("=== SCREEN === HOME --- REDUX -- Reducers", () => {
  //#region Return Default State

  it("Return Default State", () => {
    const initial_state = {
      todoList: [],
    };
    const received = TodoReducer(initial_state, {});
    const expected = initial_state;

    expect(received).toEqual(expected);
  });

  //#endregion

  //#region Add Todo

  it("Add Todo", () => {
    const initial_state = {
        todoList: []
    };
    const action = {
      type: types.ADD_TODO,
      payload: "Fazer Cafe",
    };
    const received = TodoReducer(initial_state, action);
    const expected = {
      todoList: [
        {
          id: 1,
          selected: false,
          text: "Fazer Cafe",
        },
      ],
    };

    expect(received).toEqual(expected);
  });

  //#endregion

  //#region Mark Todo

  it("Mark Todo", () => {
    const initial_state = {
      todoList: [
        {
          id: 1,
          selected: false,
          text: "Fazer Cafe",
        },
      ],
    };

    const action = {
      type: types.MARK_TODO,
      payload: 1,
    };
    const received = TodoReducer(initial_state, action);
    const expected = {
      todoList: [
        {
          id: 1,
          selected: true,
          text: "Fazer Cafe",
        },
      ],
    };

    expect(received).toEqual(expected);
  });

  //#endregion

  //#region Remove Todo

  it("Remove Todo", () => {
    const initial_state = {
      todoList: [
        {
          id: 1,
          selected: false,
          text: "Fazer Cafe",
        },
        {
          id: 2,
          selected: false,
          text: "Fazer os testes",
        },
      ],
    };

    const action = {
      type: types.REMOVE_TODO,
      payload: 2,
    };
    const received = TodoReducer(initial_state, action);
    const expected = {
      todoList: [
        {
          id: 1,
          selected: false,
          text: "Fazer Cafe",
        },
      ],
    };

    expect(received).toEqual(expected);
  });

  //#endregion
});