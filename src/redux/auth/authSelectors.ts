import { createSelector } from 'reselect';

import { RootState } from '../store';

const authSelector = (state: RootState) => state.auth;

export const isSignedIn = createSelector(authSelector, (auth) => auth.isSignedIn)
