import {
    addTodo,
    markTodo,
    removeTodo,
  } from "../../../home/redux/actions";
  import * as types from "../../../home/redux/types";
  
  describe("=== SCREEN === HOME --- REDUX -- Actions", () => {
    //#region AddTodo return the value equals
  
    it("AddTodo return the value equals", () => {
      const textTodo = "Fazer Cafe";
      const received = addTodo({ text: textTodo });
      const expected = {
        type: types.ADD_TODO,
        payload: "Fazer Cafe",
      };
  
      expect(received).toEqual(expected);
    });
  
    //#endregion
  
    //#region markTodo return the value equals
  
    it("markTodo return the value equals", () => {
      const received = markTodo(1);
      const expected = {
        type: types.MARK_TODO,
        payload: 1,
      };
  
      expect(received).toEqual(expected);
    });
  
    //#endregion
  
    //#region removeTodo return the value equals
  
    it("removeTodo return the value equals", () => {
      const received = removeTodo(1);
      const expected = {
        type: types.REMOVE_TODO,
        payload: 1,
      };
  
      expect(received).toEqual(expected);
    });
  
    //#endregion
  });