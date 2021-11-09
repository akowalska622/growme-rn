import { TEST_PASSWORD, TEST_USERNAME } from 'react-native-dotenv';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import { EAuthContext } from 'Enums/EAuthContext';
import { IAuthFormData } from 'Screens/AuthScreen';
import { authContextMap } from 'Screens/AuthScreen/AuthScreen.constants';
import { signIn } from 'Redux/auth/actions/signInActions';
import { signUp } from 'Redux/auth/actions/signUpActions';

type UseAuthType = () => {
  additionalInfo: string;
  changeContext: () => void;
  isLogInContext: boolean;
  onSubmit: ({ username, password }: IAuthFormData) => void;
  primaryButtonTitle: string;
  secondaryButtonTitle: string;
};

export const useAuth: UseAuthType = () => {
  const dispatch = useDispatch();

  const [context, setContext] = useState(EAuthContext.signIn);

  const isLogInContext = context === EAuthContext.signIn;

  const getSecondContext = () =>
    isLogInContext ? EAuthContext.signUp : EAuthContext.signIn;

  const changeContext = () => setContext(getSecondContext());

  const handleLogin = (username: string, password: string) =>
    dispatch(signIn(username, password));

  const handleRegistration = (username: string, password: string) =>
    dispatch(signUp(username, password));

  const onSubmit = ({ username, password }: IAuthFormData) => {
    if (isLogInContext) return handleLogin(username, password);
    handleRegistration(username, password);
  };

  useEffect(() => {
    const testUsername = String(TEST_USERNAME);
    const testPassword = String(TEST_PASSWORD);
    if (__DEV__ && testUsername && testPassword)
      dispatch(signIn(testUsername, testPassword));
  }, [dispatch]);

  return {
    additionalInfo: authContextMap[getSecondContext()].info,
    changeContext,
    isLogInContext,
    onSubmit,
    primaryButtonTitle: authContextMap[context].buttonTitle,
    secondaryButtonTitle: authContextMap[getSecondContext()].buttonTitle,
  };
};
