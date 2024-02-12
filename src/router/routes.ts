import { LazyExoticComponent, lazy } from 'react';
import NoLazyPage from '../01-lazyload/pages/NoLazyPage';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';

type JSXelement = () => JSX.Element;

interface Route {
  path: string;
  to: string;
  Component: LazyExoticComponent<JSXelement> | JSXelement;
  name: string;
}

const LazyLayout = lazy(() => import('../01-lazyload/layout/LazyLayout'));

export const routes: Route[] = [
  {
    path: '/lazy-layout/*',
    to: 'lazy-layout',
    Component: LazyLayout,
    name: 'Lazy layout',
  },
  {
    path: '/no-lazy',
    to: 'no-lazy',
    Component: NoLazyPage,
    name: 'No Lazy Page',
  },
];
