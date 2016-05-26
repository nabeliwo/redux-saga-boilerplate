import { createAction } from 'redux-act';

export const increment = createAction('increment');
export const incrementIfOdd = createAction('increment if odd');
export const incrementAsync = createAction('increment async');
export const decrement = createAction('decrement');
