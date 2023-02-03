import React from 'react'
import { 
  createBrowserRouter, 
  Navigate, 
  RouterProvider 
} from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage';
import { DcPage } from '../heroes/pages/DcPage';
import { MarvelPage } from '../heroes/pages/MarvelPage';
import { HeroesApp } from '../HeroesApp';

const router = createBrowserRouter([
  {
    path: "/",
    // element: <HeroesApp />,
    element: <Navigate to={"/marvel"} />,
    errorElement: <div>Here error page</div>
  },
  {
    path: "/marvel",
    element: <MarvelPage />,
    errorElement: <div>Here error page</div>
  },
  {
    path: "/dc",
    element: <DcPage />,
    errorElement: <div>Here error page</div>
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <div>Here error page</div>
  }
]);

export const AppRoutes = () => {
  return (
    <RouterProvider router={ router } />
  )
}
