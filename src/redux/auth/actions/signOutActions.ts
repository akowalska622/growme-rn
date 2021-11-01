import { EAuthTypes } from '../authTypes';
import { signOut as signOutRequest } from 'firebase/auth';

import { auth } from '../../../config/firebase';

const signOutAction = () => ({
  type: EAuthTypes.SIGN_OUT,
});

// TODO: fix response type
const signOutSuccessfullyAction = () => ({
  type: EAuthTypes.SIGN_OUT_SUCCESS,
});

// TODO: fix error type
const signOutUnsuccessfullyAction = (error: any) => ({
  type: EAuthTypes.SIGN_OUT_FAILURE,
  error,
});

// TODO: fix dispatch type
export const signOut = () => async (dispatch: any) => {
  dispatch(signOutAction());
  try {
    await signOutRequest(auth);
    dispatch(signOutSuccessfullyAction());
  } catch ({ message }) {
    dispatch(signOutUnsuccessfullyAction(message));
  }
};
