import produce from 'immer';

import { EAuthTypes } from 'Redux/auth/authTypes';

interface IAuthState {
  readonly isAuthenticated: boolean;
  readonly user: Object | null; // TODO: fix user type
  readonly error: string;
}

const initialState: IAuthState = {
  isAuthenticated: false,
  user: null,
  error: '',
};

export const authReducer = produce((draftState, { type, payload, error }) => {
  switch (type) {
    case EAuthTypes.signInSuccess:
    case EAuthTypes.signUpSuccess:
      draftState.user = payload;
      draftState.isAuthenticated = true;
      break;
    case EAuthTypes.signInFailure:
    case EAuthTypes.signUpFailure:
      draftState.error = error;
      break;
    case EAuthTypes.signOutSuccess:
      draftState.user = null;
      draftState.isAuthenticated = false;
      break;
    case EAuthTypes.signOutFailure:
      draftState.error = error;
      break;
  }
}, initialState);
