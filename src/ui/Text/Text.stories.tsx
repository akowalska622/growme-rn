import {
  optionsKnob as options,
  text,
  withKnobs,
} from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';

import { Screen } from 'UI/Screen';
import { Text } from 'UI/Text';
import { colorKeys } from 'Constants/colors';
import { fontKeys } from 'Constants/typography';

storiesOf('Typography', module)
  .addDecorator(withKnobs)
  .addDecorator((story) => <Screen>{story()}</Screen>)
  .add('Text', () => {
    const variant = options('variant', fontKeys, 'body', { display: 'select' });
    const color = options('color', colorKeys, 'text', { display: 'select' });

    // TODO: fix color and variant errors
    return (
      <Text color={color} variant={variant}>
        {text('text', 'Hello World!')}
      </Text>
    );
  });
