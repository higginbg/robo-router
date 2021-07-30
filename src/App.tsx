import '@fortawesome/fontawesome-free/js/all.js';

import Routes from './routes';
import UserProvider from './context/user';

const App = () => (
  <UserProvider>
    <Routes />
  </UserProvider>
);

export default App;
