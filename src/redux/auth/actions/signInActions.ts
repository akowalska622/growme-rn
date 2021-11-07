import { signInWithEmailAndPassword } from 'firebase/auth';

import { EAuthTypes } from 'Redux/auth/authTypes';
import { auth } from 'Config/firebase';

const signInAction = () => ({
  type: EAuthTypes.SIGN_IN,
})

// TODO: fix response type
const signInSuccessfullyAction = (response: any) => ({
  type: EAuthTypes.SIGN_IN_SUCCESS,
  payload: response,
});

// TODO: fix error type
const signInUnsuccessfullyAction = (error: any) => ({
  type: EAuthTypes.SIGN_IN_FAILURE,
  error,
});

// TODO: fix dispatch type
export const signIn = (username: string, password: string) => async (dispatch: any) => {
  dispatch(signInAction());
  try {
    const { user } = await signInWithEmailAndPassword(auth, username, password);
    dispatch(signInSuccessfullyAction(user));
  } catch ({ message }) {
    dispatch(signInUnsuccessfullyAction(message));
  }
};
