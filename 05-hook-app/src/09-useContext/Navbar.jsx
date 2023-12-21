
import { Link, NavLink } from "react-router-dom"

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">useContext</Link>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink
                            exact
                            activeClassName="active"
                            className="nav-link"
                            aria-current="page"
                            to="/">
                            Home
                        </NavLink>
                        <NavLink
                            exact
                            activeClassName="active"
                            className="nav-link"
                            aria-current="page"
                            to="/about">
                            About
                        </NavLink>
                        <NavLink
                            exact
                            activeClassName="active"
                            className="nav-link"
                            aria-current="page"
                            to="/login">
                            Login
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}
