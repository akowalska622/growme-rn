import * as yup from 'yup';
import { Button, Text, View } from 'react-native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// TODO: change to absolute imports
import { FormInput } from '../../ui/FormInput';
import { Screen } from '../../ui/Screen';
import { styles } from './AuthScreen.styles';
import { useAuth } from '../../hooks/useAuth';

enum EAuthScreenFields {
  username = 'username',
  password = 'password',
  confirmPassword = 'confirmPassword',
}

export interface AuthFormData {
  username: string;
  password: string;
  confirmPassword: string;
}

// TODO: use Grid and text components
export const AuthScreen = () => {
  const {
    additionalInfo,
    changeContext,
    isLogInContext,
    onInvalid,
    onSubmit,
    primaryButtonTitle,
    secondaryButtonTitle,
  } = useAuth();

  const authSchema = yup.object().shape({
    username: yup.string().email().required(),
    password: yup.string().required(),
    confirmPassword: isLogInContext
      ? yup.string()
      : yup
          .string()
          .required()
          .oneOf(
            [yup.ref(EAuthScreenFields.password), null],
            "Passwords don't match!",
          ),
  });

  const { control, handleSubmit } = useForm<AuthFormData>({
    resolver: yupResolver(authSchema),
  });

  return (
    <Screen>
      <View style={styles.signInContainer}>
        <FormInput
          label="E-mail"
          control={control}
          name={EAuthScreenFields.username}
        />
        <FormInput
          label="Password"
          autoCorrect={false}
          control={control}
          name={EAuthScreenFields.password}
          secureTextEntry
        />
        {!isLogInContext && (
          <FormInput
            label="Confirm password"
            autoCorrect={false}
            control={control}
            name={EAuthScreenFields.confirmPassword}
            secureTextEntry
          />
        )}
        <Button
          title={primaryButtonTitle}
          onPress={handleSubmit(onSubmit, onInvalid)}
        />
        {isLogInContext && <Text>I forgot my password.</Text>}
      </View>
      <View style={styles.switchContextContainer}>
        <Text>{additionalInfo}</Text>
        <Button title={secondaryButtonTitle} onPress={changeContext} />
      </View>
    </Screen>
  );
};
