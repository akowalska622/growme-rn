import thunk from 'redux-thunk';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { enableMapSet } from 'immer';

enableMapSet();

import { authReducer } from 'Redux/auth/authReducer';
import { notificationsReducer } from 'Redux/notifications/notificationsReducer';

const baseReducer = combineReducers({
  auth: authReducer,
  notifications: notificationsReducer,
});

export type RootStateType = ReturnType<typeof store.getState>;

const middleware: any[] = [thunk];
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  baseReducer,
  composeEnhancers(applyMiddleware(...middleware)),
);
