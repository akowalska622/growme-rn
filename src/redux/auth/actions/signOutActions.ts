import { signOut as signOutRequest } from 'firebase/auth';

import { EAuthTypes } from 'Redux/auth/authTypes';
import { auth } from 'Config/firebase';

const signOutAction = () => ({
  type: EAuthTypes.signOut,
});

// TODO: fix response type
export const signOutSuccessfullyAction = () => ({
  type: EAuthTypes.signOutSuccess,
});

// TODO: fix error type
export const signOutUnsuccessfullyAction = (error: any) => ({
  type: EAuthTypes.signOutFailure,
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
