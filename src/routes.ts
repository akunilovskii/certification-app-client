import { FC } from 'react'
import { Home, About, Products, DCD, LoginSignUp } from './pages'

export interface IRoute {
  key: string
  title?: string
  path: string
  enabled: boolean
  component: FC<{}>
  access?: string
}

export const routes: Array<IRoute> = [
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
    access: 'private',
  },
  {
    key: 'login-sign-up',
    path: '/login-sign-up',
    enabled: true,
    component: LoginSignUp,
  },
]
