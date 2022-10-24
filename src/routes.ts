import {Home, About, Products, DCD} from './pages';

// other
import {FC} from 'react';

// interface
interface Route {
  key: string;
  title: string;
  path: string;
  enabled: boolean;
  component: FC<{}>;
}

export const routes: Array<Route> = [
  {
    key: 'home-route',
    title: 'Home',
    path: '/',
    enabled: true,
    component: Home,
  },
  {
    key: 'about-route',
    title: 'About',
    path: '/about',
    enabled: true,
    component: About,
  },
  {
    key: 'products-route',
    title: 'Products',
    path: '/products',
    enabled: true,
    component: Products,
  },
  {
    key: 'dev-color-design-route',
    title: 'Color Design',
    path: '/dcd',
    enabled: true,
    component: DCD,
  },
];