import React, { FC } from "react"
import { css } from "theme-ui"
import { PageProps, graphql, Link as GatsbyLink } from "gatsby"

export type Data = {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

const Link: FC<{ to: string }> = ({ children, to }) => (
  <GatsbyLink
    css={{
      color: "#2f393b",
      textDecoration: "none",
    }}
    to={to}
  >
    {children}
  </GatsbyLink>
)

const IndexPage: FC<PageProps<Data>> = () => {
  return (
    <section
      css={css({
        display: "flex",
        width: "100vw",
        height: ["-webkit-fill-available", "100vh"],
        flexDirection: "column",
      })}
    >
      <main
        css={{
          color: "white",
          fontSize: "3em",
          backgroundColor: "#2f393b",
          height: "calc(100vh - 100px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p css={css({ mb: 0 })}>Austin Chang</p>
        <small># JS Developer</small>
      </main>
      <ul
        css={{
          listStyleType: "none",
          display: "flex",
          flexGrow: 1,
          alignItems: "center",
          justifyContent: "space-around",
          fontSize: "1.2em",
        }}
      >
        <li>
          <Link to="/posts">筆記</Link>
        </li>
        <li>
          <Link to="/resume">個人履歷</Link>
        </li>
      </ul>
    </section>
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
  }
`
