import { createReducer } from 'redux-act';
import { increment, incrementIfOdd, decrement } from '../actions/counter';

const initial = {
  counter: 0
};

const counter = createReducer({
  [increment]: state => state + 1,
  [incrementIfOdd]: state => (state % 2 !== 0 ? state + 1 : state),
  [decrement]: state => state - 1
}, initial.counter);

export default { counter };
