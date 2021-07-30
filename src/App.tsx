import '@fortawesome/fontawesome-free/js/all.js';

import Routes from './routes';
import AppProvider from './context/app';

const App = () => (
  <AppProvider>
    <Routes />
  </AppProvider>
);

export default App;
