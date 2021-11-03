import { Button, Text, View } from 'react-native';
import { useForm } from 'react-hook-form';

import { AuthFormData, validationRules } from './AuthScreen.validation';
import { Validator } from '../../ui/Validator';
import { styles } from './AuthScreen.styles';
import { useAuth } from '../../hooks/useAuth';

export const AuthScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormData>();

  const {
    additionalInfo,
    changeContext,
    onSubmit,
    isLogInContext,
    primaryButtonTitle,
    secondaryButtonTitle,
  } = useAuth();

  console.log(errors);

  return (
    <View style={styles.container}>
      <View style={styles.signInContainer}>
        <Validator
          control={control}
          // isError={errors.username}
          name="username"
          placeholder="E-mail"
          rules={validationRules.username}
        />
        {/* <Text>{errors.username}</Text> */}
        <Validator
          autoCorrect={false}
          control={control}
          // isError={errors.password}
          name="password"
          placeholder="Password"
          rules={validationRules.password}
          secureTextEntry
        />
        {/* <Text>{errors.password}</Text> */}
        {!isLogInContext && (
          <>
            <Validator
              autoCorrect={false}
              control={control}
              // isError={errors.repeatedPassword}
              name="repeatedPassword"
              placeholder="Repeat password"
              rules={validationRules.repeatedPassword}
              secureTextEntry
            />
            {/* <Text>{errors.repeatedPassword}</Text> */}
          </>
        )}
        <Button title={primaryButtonTitle} onPress={handleSubmit(onSubmit)} />
        {isLogInContext && <Text>I forgot my password.</Text>}
      </View>
      <View style={styles.switchContextContainer}>
        <Text>{additionalInfo}</Text>
        <Button title={secondaryButtonTitle} onPress={changeContext} />
      </View>
    </View>
  );
};
