import { useDispatch } from 'react-redux';
import { useState } from 'react';

import { EAuthContext } from '../enums/EAuthContext';
import { authContextMap } from 'Screens/AuthScreen.constants';
import { signIn } from '../redux/auth/authActions';

type UseAuthType = (
  username: string,
  password: string,
  repeatedPassword: string,
) => {
  additionalInfo: string,
  changeContext: () => void,
  handlePrimaryButtonPress: () => void;
  isLogInContext: boolean;
  primaryButtonTitle: string;
  secondaryButtonTitle: string;
};

export const useAuth: UseAuthType = (username, password, repeatedPassword) => {
  const dispatch = useDispatch();

  const [context, setContext] = useState(EAuthContext.SIGN_IN);

  const isLogInContext = context === EAuthContext.SIGN_IN;

  const getSecondContext = () =>
    isLogInContext ? EAuthContext.SIGN_UP : EAuthContext.SIGN_IN;

  const changeContext = () => setContext(getSecondContext());

  const handleLogin = () => dispatch(signIn()); // TODO: pass username and password

  const handleRegistration = () => {
    if (username && password === repeatedPassword) {
      // dispatch(registerUser({ username, password })); // TODO: add register action
      changeContext();
    }
  };

  const handlePrimaryButtonPress = () => {
    if (isLogInContext) return handleLogin();
    handleRegistration();
  };

  return {
    additionalInfo: authContextMap[getSecondContext()].info,
    changeContext,
    handlePrimaryButtonPress,
    isLogInContext,
    primaryButtonTitle: authContextMap[context].buttonTitle,
    secondaryButtonTitle: authContextMap[getSecondContext()].buttonTitle,
  };
};