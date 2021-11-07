import { TEST_PASSWORD, TEST_USERNAME } from 'react-native-dotenv';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import { AuthFormData } from 'Screens/AuthScreen';
import { EAuthContext } from 'Enums/EAuthContext';
import { authContextMap } from 'Screens/AuthScreen/AuthScreen.constants';
import { signIn } from 'Redux/auth/actions/signInActions';
import { signUp } from 'Redux/auth/actions/signUpActions';

type UseAuthType = () => {
  additionalInfo: string;
  changeContext: () => void;
  isLogInContext: boolean;
  onSubmit: ({ username, password }: AuthFormData) => void;
  primaryButtonTitle: string;
  secondaryButtonTitle: string;
};

export const useAuth: UseAuthType = () => {
  const dispatch = useDispatch();

  const [context, setContext] = useState(EAuthContext.SIGN_IN);

  const isLogInContext = context === EAuthContext.SIGN_IN;

  const getSecondContext = () =>
    isLogInContext ? EAuthContext.SIGN_UP : EAuthContext.SIGN_IN;

  const changeContext = () => setContext(getSecondContext());

  const handleLogin = (username: string, password: string) =>
    dispatch(signIn(username, password));

  const handleRegistration = (username: string, password: string) =>
    dispatch(signUp(username, password));

  const onSubmit = ({ username, password }: AuthFormData) => {
    if (isLogInContext) return handleLogin(username, password);
    handleRegistration(username, password);
  };

  useEffect(() => {
    const testUsername = String(TEST_USERNAME);
    const testPassword = String(TEST_PASSWORD);
    if (__DEV__ && testUsername && testPassword)
      dispatch(signIn(testUsername, testPassword));
  }, []);

  return {
    additionalInfo: authContextMap[getSecondContext()].info,
    changeContext,
    isLogInContext,
    onSubmit,
    primaryButtonTitle: authContextMap[context].buttonTitle,
    secondaryButtonTitle: authContextMap[getSecondContext()].buttonTitle,
  };
};
