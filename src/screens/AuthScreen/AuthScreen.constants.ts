import { EAuthContext } from 'Enums/EAuthContext';

export const authContextMap = {
  [EAuthContext.signIn]: {
    info: 'You have an account?',
    buttonTitle: 'Sign in',
  },
  [EAuthContext.signUp]: {
    info: "You don't have an account?",
    buttonTitle: 'Sign up',
  },
};
