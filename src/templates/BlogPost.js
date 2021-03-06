import React from 'react'
import { graphql } from 'gatsby'
import MediaQuery from 'react-responsive'
import Image from 'gatsby-image'
import Box from 'ui-box'
import { Disqus } from 'gatsby-plugin-disqus'

import Bio from 'components/Bio'
import Layout from 'components/Layout'
import SEO from 'components/Seo'
import Share from 'components/Share'
import TableOfContents from 'components/TableOfContents'

import { Flex, Heading, ListItem, Link, Paragraph, UnorderedList } from 'primitives'

import { rhythm, scale } from 'utils/typography'

export default function BlogPost(props) {
  const post = props.data.markdownRemark
  const siteTitle = props.data.site.siteMetadata.title
  const siteUrl = props.data.site.siteMetadata.siteUrl
  const { previous, next } = props.pageContext

  const url = `${siteUrl}${props.location.pathname}`
  const disqusConfig = {
    url,
    identifier: post.id,
    title: post.frontmatter.title,
  }

  const hero = post.frontmatter.hero ? post.frontmatter.hero.childImageSharp.fluid : {}
  const domainRegex = /(https?:\/\/)?(www\.)?([\w\.\-_]+).*/

  return (
    <MediaQuery maxWidth={504}>
      {mobile => (
        <Layout location={props.location} title={siteTitle}>
          <SEO
            title={post.frontmatter.title}
            description={post.frontmatter.description || post.excerpt}
            location={props.location}
            image={`https://featurepeek.com${hero.src}`}
          />
          <Flex
            background="linear-gradient(#fff, #effefe)"
            margin={mobile ? -15 : -39}
            paddingBottom={80}
            paddingTop={40}
            paddingX={mobile ? 16 : 40}
          >
            <Flex alignItems="center" width="100%">
              <Box paddingRight={40}>
                <Link href="/blog" underline={false}>
                  ← All blog posts
                </Link>
                <Heading marginTop={0} size={480}>
                  {post.frontmatter.title}
                </Heading>
                <Paragraph color="#999" {...scale(-1 / 8)} marginBottom={rhythm(1)} marginTop={rhythm(-0.5)}>
                  {post.frontmatter.date}&nbsp;&nbsp;{'\u00B7'}&nbsp;&nbsp;{post.timeToRead} minute read
                </Paragraph>
                <Paragraph marginTop={0} fontSize={24}>
                  {post.frontmatter.description}
                </Paragraph>
                <Bio author={post.frontmatter.author} />
              </Box>
            </Flex>
            <Box margin="auto" width="100%">
              <Box borderRadius={28} boxShadow="0 8px 16px rgba(0, 0, 0, 0.15)" overflow="hidden" width="100%">
                <Image fluid={hero} />
              </Box>
              {post.frontmatter.heroAttributionURL && (
                <Paragraph fontSize={12} marginBottom={0} marginTop={16} opacity={0.7} textAlign="center">
                  <em>
                    Hero image courtesy of{' '}
                    <Link href={post.frontmatter.heroAttributionURL} target="_blank">
                      {post.frontmatter.heroAttributionURL.match(domainRegex)[3]}
                    </Link>
                  </em>
                </Paragraph>
              )}
            </Box>
          </Flex>
          <Box marginX={mobile ? -15 : -39} marginY={-39}>
            <img alt="" height="40" src="/img/curve.svg" width="100%" />
          </Box>
          <Box marginTop={rhythm(4)} marginLeft={mobile ? 0 : 77} maxWidth={rhythm(30)}>
            <Box>
              {!mobile && (
                <Box style={{ position: 'sticky' }} top={96}>
                  <Share title={post.frontmatter.title} url={url} />
                </Box>
              )}
              <TableOfContents html={post.tableOfContents} />
              <div className="blog-post" dangerouslySetInnerHTML={{ __html: post.html }} />
            </Box>
            <UnorderedList display="flex" flexWrap="wrap" justifyContent="space-between" marginTop={64}>
              <ListItem>
                {previous && (
                  <Link href={`/blog${previous.fields.slug}`} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </ListItem>
              <ListItem>
                {next && (
                  <Link href={`/blog${next.fields.slug}`} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                )}
              </ListItem>
            </UnorderedList>
            <hr style={{ height: 0, margin: 80 }} />
            <Disqus config={disqusConfig} />
          </Box>
        </Layout>
      )}
    </MediaQuery>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      tableOfContents(absolute: false)
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        author
        hero {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heroAttributionURL
      }
      timeToRead
    }
  }
`
