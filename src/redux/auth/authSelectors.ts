import { createSelector } from 'reselect';

import { RootState } from 'Redux/store';

const authSelector = (state: RootState) => state.auth;

export const isSignedInSelector = createSelector(authSelector, (auth) => auth.isSignedIn)
