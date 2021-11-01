import { Button, Text, TextInput, View } from 'react-native';

import { styles } from './AuthScreen.styles';
import { useAuth } from '../hooks/useAuth';
import { useInput } from '../hooks/useInput';

export const AuthScreen = () => {
  const [username, handleUsernameChange] = useInput('');
  const [password, handlePasswordChange] = useInput('');
  const [repeatedPassword, handleRepeatedPasswordChange] = useInput('');

  const {
    additionalInfo,
    changeContext,
    handlePrimaryButtonPress,
    isLogInContext,
    primaryButtonTitle,
    secondaryButtonTitle,
  } = useAuth(username, password, repeatedPassword);

  return (
    <View style={styles.container}>
      <View style={styles.signInContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="E-mail"
          onChangeText={handleUsernameChange}
          value={username}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          onChangeText={handlePasswordChange}
          secureTextEntry
          autoCorrect={false}
          value={password}
        />
        {!isLogInContext && (
          <TextInput
            style={styles.textInput}
            placeholder="Repeat password"
            onChangeText={handleRepeatedPasswordChange}
            secureTextEntry
            autoCorrect={false}
            value={repeatedPassword}
          />
        )}
        <Button title={primaryButtonTitle} onPress={handlePrimaryButtonPress} />
        {isLogInContext && <Text>I forgot my password.</Text>}
      </View>
      <View style={styles.switchContextContainer}>
        <Text>{additionalInfo}</Text>
        <Button title={secondaryButtonTitle} onPress={changeContext} />
      </View>
    </View>
  );
};
