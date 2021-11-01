import produce from 'immer';

import { EAuthTypes } from './authTypes';

interface IAuthState {
  readonly isSignedIn: boolean;
  readonly user: Object | null; // TODO: fix user type
  readonly error: string;
}

const initialState: IAuthState = {
  isSignedIn: false,
  user: null,
  error: '',
};

export const authReducer = produce((draftState, { type, payload, error }) => {
  switch (type) {
    case EAuthTypes.SIGN_IN_SUCCESS:
    case EAuthTypes.SIGN_UP_SUCCESS:
      draftState.user = payload;
      draftState.isSignedIn = true;
      draftState.error = '';
      break;
    case EAuthTypes.SIGN_IN_FAILURE:
    case EAuthTypes.SIGN_UP_FAILURE:
      draftState.user = null;
      draftState.error = error;
      break;
    case EAuthTypes.SIGN_OUT_SUCCESS:
      draftState.user = null;
      draftState.isSignedIn = false;
      draftState.error = '';
      break;
    case EAuthTypes.SIGN_OUT_FAILURE:
      draftState.error = error;
      break;
  }
}, initialState);
