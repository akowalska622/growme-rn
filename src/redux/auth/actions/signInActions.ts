import { signInWithEmailAndPassword } from 'firebase/auth';

import { EAuthTypes } from 'Redux/auth/authTypes';
import { auth } from 'Config/firebase';

const signInAction = () => ({
  type: EAuthTypes.signIn,
});

// TODO: fix response type
export const signInSuccessfullyAction = (response: any) => ({
  type: EAuthTypes.signInSuccess,
  payload: response,
  withoutAlert: true,
});

// TODO: fix error type
export const signInUnsuccessfullyAction = (error: any) => ({
  type: EAuthTypes.signInFailure,
  error,
});

// TODO: fix dispatch type
export const signIn =
  (username: string, password: string) => async (dispatch: any) => {
    dispatch(signInAction());
    try {
      const { user } = await signInWithEmailAndPassword(
        auth,
        username,
        password,
      );
      dispatch(signInSuccessfullyAction(user));
    } catch ({ message }) {
      dispatch(signInUnsuccessfullyAction(message));
    }
  };
