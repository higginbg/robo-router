import { useContext, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AppContext } from '../context/app';
import Nav from '../components/Nav';
import Header from '../components/Header';
import AdminRoutes from './admin';
import UserRoutes from './user';

const Home = lazy(() => import('../pages/public/Home'));
const Login = lazy(() => import('../pages/public/Login'));
const NotFound = lazy(() => import('../pages/public/NotFound'));

const Routes = () => {
  const { role } = useContext(AppContext);

  const fallback = (
    <div style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
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
