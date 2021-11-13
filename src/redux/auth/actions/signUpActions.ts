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

export const signUpUnsuccessfullyAction = (message: string) => ({
  type: EAuthTypes.signUpFailure,
  message,
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
      dispatch(signUpUnsuccessfullyAction(message as string));
    }
  };
