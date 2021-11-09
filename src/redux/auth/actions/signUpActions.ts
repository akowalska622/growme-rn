import { createUserWithEmailAndPassword } from 'firebase/auth';

import { EAuthTypes } from 'Redux/auth/authTypes';
import { auth } from 'Config/firebase';

const signUpAction = () => ({
  type: EAuthTypes.signUp,
});

// TODO: fix response type
export const signUpSuccessfullyAction = (response: any) => ({
  type: EAuthTypes.signUpSuccess,
  payload: response,
});

// TODO: fix error type
export const signUpUnsuccessfullyAction = (error: any) => ({
  type: EAuthTypes.signUpFailure,
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
