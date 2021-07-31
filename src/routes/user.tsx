import { lazy } from 'react';
import { Route, RouteProps } from 'react-router-dom';

const Dashboard = lazy(() => import('../pages/user/Dashboard'));
const Robots = lazy(() => import('../pages/user/Robots'));
const Robot = lazy(() => import('../pages/user/Robots/Robot'));

export const userRoutes: RouteProps[] = [
  { path: '/dashboard', component: Dashboard, exact: true },
  { path: '/robots', component: Robots, exact: true },
  { path: '/robots/:id', children: <Robot />, exact: true },
];

const UserRoutes = () => (
  <>
    {userRoutes.map((route) => (
      <Route key={route.path as string} {...route} />
    ))}
  </>
);

export default UserRoutes;
