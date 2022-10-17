import React, { Fragment } from 'react'
import Nav from './Nav/Nav'

function Layout({children}) {
  return (
    <Fragment>
      <Nav />
        {children}
    </Fragment>
  )
}

export default Layout
