import { createReducer } from 'redux-act';
// import {
//   login, logout, addUser, removeUser, newMessage
// } from './actions';

const initial = {
  app: {
    username: null
  },
  users: {},
  messages: {
    list: [],
    entities: {}
  },
};

const app = createReducer({

}, initial.app);

// const users = createReducer({
//   [addUser]: (state, payload) => {
//     return { ...state, [payload.username]: true };
//   },
//   [removeUser]: (state, payload) => {
//     const newState = { ...state };
//     delete newState[payload.username];
//     return newState;
//   }
// }, initial.users);

// const messages = createReducer({
//   [newMessage]: (state, payload) => {
//     const { message } = payload;
//     return {
//       ...state,
//       list: [ ...state.list, message.id ],
//       entities: { ...state.entities, [message.id]: message }
//     };
//   }
// }, initial.messages);

export default { app };
