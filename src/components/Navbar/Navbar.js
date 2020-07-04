import React, { Component } from "react"

import Logo from '../../images/logo.png'
import Navs from "./Navs"

export default class Navbar extends Component {

  state = {
    scrolled: false,
    isOpen: false,
  }

  toggleNav = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    return (
      <>
        <header className="clearfix" id="header">
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              <a className="navbar-brand" href="index.html">
                <img alt="" src={Logo} />
              </a>
              <button
                className = {
                  `${this.state.isOpen ? "navbar-toggler" : "navbar-toggler collapsed"}`
                }
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={this.toggleNav}
              >
                <i className="fa fa-bars"></i>
              </button>
              < div className = {
                `${this.state.isOpen ? "collapse navbar-collapse show" : "collapse navbar-collapse"}`
              }
              id = "navbarSupportedContent" >
                <Navs />
              </div>
            </div>
          </nav>
        </header>
      </>
    )
  }
}
