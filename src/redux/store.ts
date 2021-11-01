import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

import { authReducer } from './auth/authReducer';

const baseReducer = combineReducers({
  auth: authReducer,
});

export type RootState = ReturnType<typeof store.getState>;

const middleware: any[] = [];
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  baseReducer,
  composeEnhancers(applyMiddleware(...middleware)),
);
