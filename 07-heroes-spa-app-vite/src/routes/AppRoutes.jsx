import React from 'react'
import { 
  createBrowserRouter, 
  RouterProvider 
} from 'react-router-dom'
import { LoginPage } from '../auth/pages';
import { HeoresRoutes, HeoresRoutesChildren } from '../heroes';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <div>Here error page</div>
  },
  {
    path: "/", 
    element: <HeoresRoutes />,
    children: HeoresRoutesChildren,
    errorElement: <div>Here error page</div>
  }  
]);

export const AppRoutes = () => {
  return (
    <RouterProvider router={ router } />
  )
}