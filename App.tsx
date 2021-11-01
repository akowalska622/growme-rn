import { Provider } from 'react-redux';

import { Navigation } from './src/Navigation';
import { store } from './src/redux/store';

const App = () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);

export default App;
