import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';

import { Input } from '.';
import { Screen } from '../Screen';

const actions = {
  inputRef: () => {},
  onBlur: action('onBlur'),
  onChange: action('onChange'),
  onIconPress: action('onIconPress'),
};

const input = {
  editable: false,
  error: '',
  value: '',
};

// TODO: fix children type
const InputStage = ({ children }: { children: any }) => (
  <Screen style={{ position: 'relative' }}>{children}</Screen>
);

storiesOf('Input', module)
  .addDecorator((story) => <InputStage>{story()}</InputStage>)
  .add('default', () => <Input {...actions} {...input} label="Default input" />)
  .add('focused', () => (
    <Input {...actions} {...input} value="Hello World" label="Focused input" />
  ))
  .add('invalid', () => (
    <Input
      {...actions}
      {...input}
      error="This field is required"
      value="he"
      label="Invalid input"
    />
  ))
  .add('icon', () => (
    <Input {...actions} {...input} label="With icon" icon="crop" />
  ));
