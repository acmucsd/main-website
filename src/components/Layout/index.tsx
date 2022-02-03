/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import NavigationBar from "../NavigationBar"
import Footer from "../Footer"



const Layout = ({ children }) => {

  return (
    <>
      <NavigationBar />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          minHeight: 960,
          padding: `81px 0`,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
