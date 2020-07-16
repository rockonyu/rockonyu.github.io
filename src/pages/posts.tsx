import { Heading, Text, css } from "theme-ui"
import React, { FC } from "react"
import { PageProps, Link, graphql } from "gatsby"
import { Layout, SEO } from "../components"

export type Data = {
  site: {
    siteMetadata: {
      title: string
    }
  }
  allMarkdownRemark: {
    edges: {
      node: {
        excerpt: string
        frontmatter: {
          title: string
          date: string
          description: string
        }
        fields: {
          slug: string
        }
      }
    }[]
  }
}

const IndexPage: FC<PageProps<Data>> = ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout>
      <SEO title="Home" />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug} css={css({ my: 4 })}>
            <header>
              <Heading as="h2">
                <Link to={node.fields.slug}>{title}</Link>
              </Heading>
              <p css={css({ my: 2 })}>{node.frontmatter.date}</p>
            </header>
            <Text
              dangerouslySetInnerHTML={{
                __html: node.frontmatter.description || node.excerpt,
              }}
            ></Text>
          </article>
        )
      })}
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY/M/D")
            title
            description
          }
        }
      }
    }
  }
`
