import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import { StartPage } from './views/Startpage'
import { DynamicPage } from './views/DynamicPage'

export enum RoutePath {
  HOME = '/',
  SPLAT_SEGMENT = '*',
}

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={RoutePath.HOME} element={<StartPage />} />
      <Route path={RoutePath.SPLAT_SEGMENT} element={<DynamicPage />} />
    </>
  )
)
