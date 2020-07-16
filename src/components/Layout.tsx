/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React, { FC, Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Header, Footer } from "."
import { Global, css } from "@emotion/core"

type Props = {
  title?: string
  footer?: JSX.Element
}

const Layout: FC<Props> = ({ title, children, footer }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Fragment>
      <Global
        styles={css`
          a {
            color: #0366d6;
            text-decoration: none;

            &:hover {
              text-decoration: underline;
            }
          }
        `}
      />
      <Header siteTitle={title || data.site.siteMetadata.title} />
      <main
        css={{
          margin: "0 auto",
          maxWidth: 960,
          minHeight: "80vh",
          padding: "0 1rem 1.5rem",
        }}
      >
        {children}
      </main>
      <Footer>{footer}</Footer>
    </Fragment>
  )
}

export default Layout
