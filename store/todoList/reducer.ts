import {
  ADD_TODO,
  CHECK_TODO,
  DELETE_TODO,
  Todo,
  TodoListState,
  TodoActionTypes
} from './types';
import * as R from 'ramda';

const initialState: TodoListState = {
  todos: [
    { title: 'Learn Typescript', checked: true },
    { title: 'Go for a run', checked: false },
    { title: 'Buy soymilk', checked: false }
  ]
}

const reducer = (state = initialState, action: TodoActionTypes) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos, action.payload
        ]
      }
    case CHECK_TODO:
      const toggleCheck = (todo: Todo): Todo => {
        const lens = R.lensProp('checked');
        return R.set(lens, !R.view(lens, todo), todo)
      };

      return {
        ...state,
        todos: R.adjust(action.meta.index, toggleCheck, state.todos)
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: R.remove(action.meta.index, 1, state.todos)
      };

    default:
      return state
  }
}

export default reducer