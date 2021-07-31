import { lazy } from 'react';
import { Route, RouteProps } from 'react-router-dom';

const Destruction = lazy(() => import('../pages/admin/Destruction'));

export const adminRoutes: RouteProps[] = [
  { path: '/destruction', component: Destruction, exact: true,  },
];

const AdminRoutes = () => (
  <>
    {adminRoutes.map((route) => (
      <Route key={route.path as string} {...route} />
    ))}
  </>
);

export default AdminRoutes;
