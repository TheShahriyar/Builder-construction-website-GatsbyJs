import React from 'react'

import "../css/bootstrap.min.css"
import "../css/font-awesome.min.css"
import "../css/animate.css"
import "../flaticon/flaticon.css"
import "../scss/style.scss"
import "../scss/responsive.scss"
import Navbar from './Navbar/Navbar'

function Layout({children}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default Layout
