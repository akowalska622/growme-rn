import { createSelector } from 'reselect';

import { RootState } from 'Redux/store';

const selectAuth = (state: RootState) => state.auth;

export const selectAuthenticated = createSelector(selectAuth, (auth) => auth.authenticated)
