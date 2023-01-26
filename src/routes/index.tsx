import { Suspense, lazy } from 'react';
import type { RouteObject } from "react-router-dom";

//layouts
import BaseLayout from '../layouts/BaseLayout';

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

const router: RouteObject[] = [
  {
    element: <BaseLayout />,
    path: '',
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
    ]
  }
]

export default router;
