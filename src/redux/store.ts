import { combineReducers, createStore } from 'redux';

import { authReducer } from './auth/authReducer';

const baseReducer = combineReducers({
  auth: authReducer,
});

export type RootState = ReturnType<typeof store.getState>

export const store = createStore(baseReducer);
