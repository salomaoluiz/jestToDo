import * as types from "./types";

export const addTodo = meta => ({
  type: types.ADD_TODO,
  payload: meta.text,
});

export const markTodo = id => ({
  type: types.MARK_TODO,
  payload: id,
});

export const removeTodo = id => ({
  type: types.REMOVE_TODO,
  payload: id,
});
