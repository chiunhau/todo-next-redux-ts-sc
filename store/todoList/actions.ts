import { TodoActionTypes, ADD_TODO, CHECK_TODO, DELETE_TODO } from './types';

export function addTodo(title: string): TodoActionTypes {
  return {
    type: ADD_TODO,
    payload: {
      title,
      checked: false,
    },
  };
}

export function checkTodo(index: number): TodoActionTypes {
  return {
    type: CHECK_TODO,
    meta: {
      index,
    },
  };
}

export function deleteTodo(index: number): TodoActionTypes {
  return {
    type: DELETE_TODO,
    meta: {
      index,
    },
  };
}
