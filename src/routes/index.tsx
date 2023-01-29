import { Suspense, lazy } from 'react';
import type { RouteObject } from "react-router-dom";
import { Navigate } from 'react-router-dom';

//layouts
import BaseLayout from '../layouts/BaseLayout';
import SidebarLayout from '../layouts/SidebarLayout';

//loader
import SuspenseLoader from '../components/UI/SuspenseLoader';

const Loader = (Component: any) => (props: any) =>
(
  <Suspense fallback={<SuspenseLoader />}>
    <Component {...props} />
  </Suspense>
);


//pages
const Home = Loader(lazy(() => import('../pages/Home')));
const About = Loader(lazy(() => import('../pages/About')));
const Login = Loader(lazy(() => import('../pages/Auth/Login')));
const NotFound = Loader(lazy(() => import('../pages/NotFound')));

const router: RouteObject[] = [
  {
    element: <BaseLayout />,
    path: '',
    children: [
      {
        path: '/',
        element: <Login />
      },
   
      {
        path: '*',
        element: <NotFound />
      }
    ]
  },
  {
    path: 'dashboard',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="home"  />
      },
      {
        path: 'home',
        element: <Home />
      },
    ]
  }
]

export default router;
