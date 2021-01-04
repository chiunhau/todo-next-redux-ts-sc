export const ADD_TODO = 'ADD_TODO';
export const CHECK_TODO = 'CHECK_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export interface Todo {
  title: string;
  checked: boolean;
}

export interface TodoListState {
  todos: Todo[];
}

export interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: Todo;
}

export interface CheckTodoAction {
  type: typeof CHECK_TODO;
  meta: {
    index: number; //DANGEROUS
  };
}

export interface DeleteTodoAction {
  type: typeof DELETE_TODO;
  meta: {
    index: number; //DANGEROUS
  };
}

export type TodoActionTypes = AddTodoAction | CheckTodoAction | DeleteTodoAction;
