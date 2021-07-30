import { lazy } from 'react';
import { Route } from 'react-router-dom';

import { Route as RouteType } from '../models/route';

const Dashboard = lazy(() => import('../pages/user/Dashboard'));
const Robots = lazy(() => import('../pages/user/Robots'));
const Robot = lazy(() => import('../pages/user/Robots/Robot'));

export const userRoutes: RouteType[] = [
  { path: '/dashboard', Component: Dashboard, exact: true },
  { path: '/robots', Component: Robots, exact: true },
  { path: '/robots/:id', Component: null, children: <Robot />, exact: true },
];

const UserRoutes = () => (
  <>
    {userRoutes.map(({ path, Component, children, exact = false }) =>
      children ? (
        <Route key={path} path={path} children={children} exact={exact} />
      ) : (
        <Route key={path} path={path} exact={exact}>
          {Component && <Component />}
        </Route>
      )
    )}
  </>
);

export default UserRoutes;
