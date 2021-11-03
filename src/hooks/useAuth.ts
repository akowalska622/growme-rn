import { TEST_PASSWORD, TEST_USERNAME } from 'react-native-dotenv';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import { EAuthContext } from '../enums/EAuthContext';
import { authContextMap } from 'Screens/AuthScreen.constants';
import { signIn } from '../redux/auth/actions/signInActions';
import { signUp } from '../redux/auth/actions/signUpActions';

type UseAuthType = (
  username: string,
  password: string,
  repeatedPassword: string,
) => {
  additionalInfo: string;
  changeContext: () => void;
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

  const handleLogin = () => dispatch(signIn(username, password));

  const handleRegistration = () =>
    username &&
    password === repeatedPassword &&
    dispatch(signUp(username, password));

  const handlePrimaryButtonPress = () => {
    if (isLogInContext) return handleLogin();
    handleRegistration();
  };

  useEffect(() => {
    const testUsername = String(TEST_USERNAME);
    const testPassword = String(TEST_PASSWORD);
    if (process.env.NODE_ENV === 'development' && testUsername && testPassword)
      dispatch(signIn(testUsername, testPassword));
  }, []);

  return {
    additionalInfo: authContextMap[getSecondContext()].info,
    changeContext,
    handlePrimaryButtonPress,
    isLogInContext,
    primaryButtonTitle: authContextMap[context].buttonTitle,
    secondaryButtonTitle: authContextMap[getSecondContext()].buttonTitle,
  };
};
