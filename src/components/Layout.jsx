import React from "react"

import "../css/bootstrap.min.css"
import "../css/font-awesome.min.css"
import "../css/animate.css"
import "../flaticon/flaticon.css"
import "../scss/style.scss"
import "../scss/responsive.scss"
import Navbar from "./Navbar/Navbar"
import TopBar from "./TopBar"
import Footer from "./Footer"

function Layout({ children }) {
  return (
    <>
      <TopBar />
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
