import { FC } from 'react'
import { Home, About, Tests, LoginSignUp, Test, CreateTest } from './pages'
import { Logout } from './pages/Logout/Logout'

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
    key: 'tests-route',
    title: 'Tests',
    path: '/tests',
    enabled: true,
    component: Tests,
    access: 'private',
  },
  {
    key: 'create-test-route',
    title: 'Create Test',
    path: '/createtest',
    enabled: true,
    component: CreateTest,
    access: 'private',
  },
  {
    key: 'test-route',
    title: '',
    path: '/tests/test',
    enabled: true,
    component: Test,
    access: 'private',
  },
  {
    key: 'login-sign-up-route',
    path: '/login-sign-up',
    enabled: true,
    component: LoginSignUp,
  },
  {
    key: 'logout-route',
    path: '/logout',
    enabled: true,
    component: Logout,
  },
]
