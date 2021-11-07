import { createUserWithEmailAndPassword } from 'firebase/auth';

import { EAuthTypes } from 'Redux/auth/authTypes';
import { auth } from 'Config/firebase';

const signUpAction = () => ({
  type: EAuthTypes.SIGN_UP,
});

// TODO: fix response type
const signUpSuccessfullyAction = (response: any) => ({
  type: EAuthTypes.SIGN_UP_SUCCESS,
  payload: response,
});

// TODO: fix error type
const signUpUnsuccessfullyAction = (error: any) => ({
  type: EAuthTypes.SIGN_UP_FAILURE,
  error,
});

// TODO: fix dispatch type
export const signUp =
  (username: string, password: string) => async (dispatch: any) => {
    dispatch(signUpAction());
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        username,
        password,
      );
      dispatch(signUpSuccessfullyAction(user));
    } catch ({ message }) {
      dispatch(signUpUnsuccessfullyAction(message));
    }
  };
