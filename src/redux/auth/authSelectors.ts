import { createSelector } from 'reselect';

import { RootStateType } from 'Redux/store';

const selectAuth = (state: RootStateType) => state.auth;

export const selectIsAuthenticated = createSelector(
  selectAuth,
  (auth) => auth.isAuthenticated,
);
