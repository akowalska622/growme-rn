import {
  optionsKnob as options,
  text,
  withKnobs,
} from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';

import { Screen } from '../../ui/Screen';
import { Text } from '../../ui/Text';
import { colorKeys } from 'Constants/colors';
import { fontKeys } from 'Constants/typography';

storiesOf('Text', module)
  .addDecorator(withKnobs)
  .addDecorator((story) => <Screen>{story()}</Screen>)
  .add('base', () => {
    const variant = options('variant', fontKeys, 'body', { display: 'select' });
    const color = options('color', colorKeys, 'text', { display: 'select' });
  
    return (
      <Text variant={variant} color={color}>
        {text('text', 'Hello World!')}
      </Text>
    );
  });
