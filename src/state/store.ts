/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import throttle from 'lodash/throttle';
import reducers from './reducers';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    // Ignore write errors.
  }
};

// const persistedState = loadState();

export const store = createStore(
  reducers,
  // persistedState,
  {},
  applyMiddleware(thunk),
);

store.subscribe(throttle(() => {
  saveState({
  });
}, 1000));
