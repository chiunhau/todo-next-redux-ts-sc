import { combineReducers } from 'redux';
import {createStore, applyMiddleware, compose} from 'redux';
import ReduxThunk from 'redux-thunk';
import dataReducer from './data/reducer';
import todoListReducer from './todoList/reducer';


const rootReducer = combineReducers({
  data: dataReducer,
  todoList: todoListReducer
})

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any
  }
}

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(ReduxThunk)));

export type RootState = ReturnType<typeof rootReducer>
export default store