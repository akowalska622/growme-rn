import { signOut as signOutRequest } from 'firebase/auth';

import { EAuthTypes } from 'Redux/auth/authTypes';
import { auth } from 'Config/firebase';

const signOutAction = () => ({
  type: EAuthTypes.signOut,
});

export const signOutSuccessfullyAction = () => ({
  type: EAuthTypes.signOutSuccess,
});

export const signOutUnsuccessfullyAction = (message: string) => ({
  type: EAuthTypes.signOutFailure,
  message,
});

// TODO: fix dispatch type
export const signOut = () => async (dispatch: any) => {
  dispatch(signOutAction());
  try {
    await signOutRequest(auth);
    dispatch(signOutSuccessfullyAction());
  } catch ({ message }) {
    dispatch(signOutUnsuccessfullyAction(message as string));
  }
};
