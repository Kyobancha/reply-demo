import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import { DynamicPage } from './views/DynamicPage'

export enum RoutePath {
  SPLAT_SEGMENT = '*',
}

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={RoutePath.SPLAT_SEGMENT} element={<DynamicPage />} />
  )
)
