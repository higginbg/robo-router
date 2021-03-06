import { useContext, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { UserContext } from '../context/user';
import Nav from '../components/Nav';
import Header from '../components/Header';
import AdminRoutes from './admin';
import UserRoutes from './user';

const Home = lazy(() => import('../pages/public/Home'));
const Login = lazy(() => import('../pages/public/Login'));
const NotFound = lazy(() => import('../pages/public/NotFound'));

const Routes = () => {
  const { role } = useContext(UserContext);

  const fallback = (
    <div
      style={{
        fontSize: '2.5em',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        userSelect: 'none',
      }}
    >
      Loading...
    </div>
  );

  return (
    <Router>
      <Header />
      <Nav />
      <main>
        <Suspense fallback={fallback}>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>

            <Route exact path='/login'>
              <Login />
            </Route>

            {role === 'Supreme ruler' && (
              <>
                <UserRoutes />
                <AdminRoutes />
              </>
            )}

            {role === 'User' && <UserRoutes />}

            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Suspense>
      </main>
    </Router>
  );
};

export default Routes;
