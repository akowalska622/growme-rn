import * as yup from 'yup';
import { Button, Text, View } from 'react-native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// TODO: change to absolute imports
import { FormInput } from '../../ui/FormInput';
import { Screen } from '../../ui/Screen';
import { styles } from './AuthScreen.styles';
import { useAuth } from '../../hooks/useAuth';
import { useShowSecret } from '../../hooks/useShowSecret';

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

  const { showSecret: showPassword, toggleSecret: togglePassword } =
    useShowSecret();
  const {
    showSecret: showConfirmPassword,
    toggleSecret: toggleConfirmPassword,
  } = useShowSecret();

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
        {isLogInContext && <Text>I forgot my password.</Text>}
      </View>
      <View style={styles.switchContextContainer}>
        <Text>{additionalInfo}</Text>
        <Button title={secondaryButtonTitle} onPress={changeContext} />
      </View>
    </Screen>
  );
};
