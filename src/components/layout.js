import React from 'react'
import Box from 'ui-box'

import Nav from 'components/Nav'
import Footer from 'components/Footer'

import { rhythm } from 'utils/typography'

export default function Layout(props) {
  const { location, children } = props
  // const rootBlogPath = `${__PATH_PREFIX__}/blog`

  return (
    <div>
      <Nav />
      <Box
        marginBottom={124}
        marginTop={100}
        marginX="auto"
        maxWidth={location.pathname.startsWith('/blog') ? rhythm(24) : rhythm(52)}
        padding={rhythm(1.5)}
      >
        <main>{children}</main>
      </Box>
      <Footer />
    </div>
  )
}
