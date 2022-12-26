import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <>       
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
                <div className="container">
                    <Link className="navbar-brand" to="/">useContext</Link>
                    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                            <NavLink 
                                className={ ( isActive ) => `nav-link ${ isActive ? 'active' : '' }` }
                                to='/'
                            >
                                Home
                            </NavLink>
                            <NavLink 
                                className={ ( isActive ) => `nav-link ${ isActive ? 'active' : '' }` }
                                to='/about'
                            >
                                About
                            </NavLink>
                            <NavLink 
                                className={ ( isActive ) => `nav-link ${ isActive ? 'active' : '' }` }
                                to='/login'
                            >
                                Login
                            </NavLink>
                        </ul>
                        <form className="d-flex my-2 my-lg-0">
                            <input className="form-control me-sm-2" type="text" placeholder="Search" />
                            <button className="btn btn-outline-warning my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}
