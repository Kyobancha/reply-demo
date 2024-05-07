import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

export enum RoutePath {
  HOME = '/',
  TEST = '/test',
}

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={RoutePath.HOME} element={<p>Home</p>} />
      <Route path={RoutePath.TEST} element={<p>Test</p>} />
    </>
  )
)
