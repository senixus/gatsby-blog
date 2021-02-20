import "./navbar.scss"
import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <nav>
      <div className="navbar container ">
        <div>
          <div className="navbar-nav">
            <ul>
              <li className="nav-item">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link to="/bookmarks">Bookmarks</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
