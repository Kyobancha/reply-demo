import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import { StartPage } from './views/Startpage'

export enum RoutePath {
  HOME = '/',
  TEST = '/test',
}

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={RoutePath.HOME} element={<StartPage />} />
      <Route path={RoutePath.TEST} element={<p>Test</p>} />
    </>
  )
)
