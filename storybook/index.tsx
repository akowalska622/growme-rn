import './rn-addons';
import { configure, getStorybookUI } from '@storybook/react-native';
import { loadStories } from './storyLoader';

import { theme } from './theme';

configure(loadStories, module);

const StorybookUIRoot = getStorybookUI({
  asyncStorage: null,
  host: '192.168.1.6',
  port: 7007,
  theme,
});

export default StorybookUIRoot;
