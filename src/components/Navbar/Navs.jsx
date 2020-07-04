import React from "react"
import { Link } from "gatsby"

const Navs = () => {
  return (
    <>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link" activeClassName="active">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link" activeClassName="active">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/service" className="nav-link" activeClassName="active">
            Service
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/project" className="nav-link" activeClassName="active">
            Project
          </Link>
        </li>
        <li className="nav-item drop">
          <Link to="/team" className="nav-link" activeClassName="active">
            Pages
          </Link>
          <ul className="drop-down">
            <li>
              <Link to="/team">Team</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/404">404 Page</Link>
            </li>
          </ul>
        </li>
        <li className="nav-item drop">
          <Link className="nav-link" to="#" activeClassName="active">
            Blog
          </Link>
          <ul className="drop-down">
            <li>
              <Link to="blog-right-sidebar.html">Blog Right Sidebar</Link>
            </li>
            <li>
              <Link to="blog-single-pos-right-sidebar.html">
                Single Right Sidebar
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="contact.html" activeClassName="active">
            Contact
          </Link>
        </li>
      </ul>
    </>
  )
}

export default Navs
