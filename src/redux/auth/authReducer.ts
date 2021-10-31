import produce from 'immer';

import { AuthActionsType } from './authActions';
import { EAuthTypes } from './authTypes';

interface IAuthState {
  readonly isSignedIn: boolean;
}

const initialState: IAuthState = {
  isSignedIn: true, // TODO: change to false when authorization flow is set up
};

export const authReducer = produce((draftState, { type }: AuthActionsType) => {
  switch (type) {
    case EAuthTypes.SIGN_IN:
      draftState.isSignedIn = true;
      break;
    case EAuthTypes.SIGN_OUT:
      draftState.isSignedIn = false;
      break;
  }
}, initialState);
