import React from 'react'
import { graphql } from 'gatsby'

import Layout from 'components/Layout'
import SEO from 'components/Seo'

export default function IndexPage(props) {
  // const siteTitle = props.data.site.siteMetadata.title
  return (
    <Layout location={props.location}>
      <SEO title="Home" />
      {/* <Heading>Empower your designers. Liberate your developers.</Heading> */}
      <div style={{ height: '100vh' }} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
