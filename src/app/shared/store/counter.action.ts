import { createAction, props } from '@ngrx/store';

export const increment = createAction('INCREMENT');

export const decrement = createAction('DECREMENT');

export const reset = createAction('RESET');

export const customCounter = createAction(
  'CUSTOMCOUNTER',
  props<{ value: number }>()
);

export const proccedCustomCounter = createAction(
  'PROCCEDCOUNTER',
  props<{ value: number; actionType: string }>()
);

//bellow code related to simple Example

export const nameChange = createAction(
  'NAMECHANGE',
  props<{ value: string; age: Number }>()
);
