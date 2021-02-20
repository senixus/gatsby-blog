import React from "react"
import Navbar from "../navbar/Navbar"
import "../../../styles/main.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}

export default Layout
