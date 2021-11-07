import { createSelector } from 'reselect';

import { RootState } from 'Redux/store';

const selectAuth = (state: RootState) => state.auth;

export const selectIsAuthenticated = createSelector(selectAuth, (auth) => auth.isAuthenticated)
