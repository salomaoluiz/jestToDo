import * as types from "./types";

const initialState = {
  loading: false,
  todoList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return {
        ...state,
        todoList: [
          ...state.todoList,
          {
            id: state.todoList.length + 1,
            text: action.payload,
            selected: false,
          },
        ],
      };

    case types.MARK_TODO: {
      const oldTodoList = state.todoList;

      const index = oldTodoList.findIndex(item => item.id === action.payload);

      oldTodoList.splice(index, 1, {
        ...oldTodoList[index],
        selected: !oldTodoList[index].selected,
      });

      return {
        ...state,
        todoList: oldTodoList,
      };
    }

    case types.REMOVE_TODO: {
      const oldTodoList = state.todoList;

      const index = oldTodoList.findIndex(item => item.id === action.payload);

      oldTodoList.splice(index, 1);

      console.log(oldTodoList);

      return {
        ...state,
        todoList: oldTodoList,
      };
    }
    default:
      return state;
  }
};
