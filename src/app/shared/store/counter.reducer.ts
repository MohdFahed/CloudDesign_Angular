import { createReducer, on } from '@ngrx/store';
import { initalState, initalNameState } from './counter.state';
import {
  customCounter,
  decrement,
  increment,
  nameChange,
  proccedCustomCounter,
  reset,
} from './counter.action';

export function CounterReducer(state: any, action: any) {
  return _conterReducer(state, action);
}

const _conterReducer = createReducer(
  initalState,
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: 0,
    };
  }),
  on(customCounter, (state, action) => {
    return {
      ...state,
      counter: state.counter + action.value,
    };
  }),
  on(proccedCustomCounter, (state, action) => {
    return {
      ...state,
      counter:
        action.actionType == 'add'
          ? state.counter + Number(action.value)
          : state.counter - Number(action.value),
    };
  })
);

export function nameChageReducer(state: any, action: any) {
  return _nameChangeReducer(state, action);
}

const _nameChangeReducer = createReducer(
  initalNameState,
  on(nameChange, (state, action) => {
    return {
      ...state,
      name: action.value,
    };
  })
);
