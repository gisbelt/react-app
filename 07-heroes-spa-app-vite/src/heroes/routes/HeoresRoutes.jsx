import React from 'react'
import { 
  Navigate, 
} from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../../ui/components';
import { DcPage, HeroPage, MarvelPage, SearchPage } from '../pages';

export const HeoresRoutesChildren = [
  {
    path: "/*", //any route other than the login through marvel
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
    path: "/search",
    element: <SearchPage />,
    errorElement: <div>Here error page</div>
  },
  {
    path: "/hero",
    element: <HeroPage />,
    errorElement: <div>Here error page</div>
  },
]

export const HeoresRoutes = () => {
    
    return (
      <>
        <Navbar />
        <div className='container py-3'>
            <Outlet />
        </div>
      </>
    )
}
