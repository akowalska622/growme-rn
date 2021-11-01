import { EAuthContext } from '../enums/EAuthContext';

export const authContextMap = {
  [EAuthContext.SIGN_IN]: {
    info: 'You have an account?',
    buttonTitle: 'Sign in',
  },
  [EAuthContext.SIGN_UP]: {
    info: "You don't have an account?",
    buttonTitle: 'Sign up',
  },
};
