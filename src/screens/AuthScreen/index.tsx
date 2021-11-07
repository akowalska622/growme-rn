import * as yup from 'yup';
import { Button, View } from 'react-native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { FormInput } from 'UI/FormInput';
import { Screen } from 'UI/Screen';
import { Text } from 'UI/Text';
import { styles } from './AuthScreen.styles';
import { useAuth } from 'Hooks/useAuth';
import { useToggle } from 'Hooks/useToggle';

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

  const [showPassword, togglePassword] = useToggle();
  const [showConfirmPassword, toggleConfirmPassword] = useToggle();

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
          icon={showPassword ? 'ios-eye-off' : 'ios-eye'}
          name={EAuthScreenFields.password}
          onIconPress={togglePassword}
          secureTextEntry={!showPassword}
        />
        {!isLogInContext && (
          <FormInput
            label="Confirm password"
            autoCorrect={false}
            control={control}
            icon={showConfirmPassword ? 'ios-eye-off' : 'ios-eye'}
            name={EAuthScreenFields.confirmPassword}
            onIconPress={toggleConfirmPassword}
            secureTextEntry={!showConfirmPassword}
          />
        )}
        <Button title={primaryButtonTitle} onPress={handleSubmit(onSubmit)} />
      </View>
      <View style={styles.switchContextContainer}>
        <Text variant="callout">{additionalInfo}</Text>
        <Button title={secondaryButtonTitle} onPress={changeContext} />
      </View>
    </Screen>
  );
};
