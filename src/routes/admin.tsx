import { lazy } from 'react';
import { Route } from 'react-router-dom';

import { Route as RouteType } from '../models/route';

const Destruction = lazy(() => import('../pages/admin/Destruction'));

export const adminRoutes: RouteType[] = [
  { path: '/destruction', Component: Destruction, exact: true },
];

const AdminRoutes = () => (
  <>
    {adminRoutes.map(({ path, Component, exact }) => (
      <Route key={path} path={path} exact={exact}>
        {Component && <Component />}
      </Route>
    ))}
  </>
);

export default AdminRoutes;
