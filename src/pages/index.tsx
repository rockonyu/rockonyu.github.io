/** @jsx jsx */
import { jsx } from "theme-ui"
import { FC } from "react"
import { PageProps, graphql } from "gatsby"

export type Data = {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

const Link: FC<{ href: string }> = ({ children, href }) => (
  <a
    sx={{
      color: "#2f393b",
      textDecoration: "none",
    }}
    href={href}
  >
    {children}
  </a>
)

const IndexPage: FC<PageProps<Data>> = () => {
  return (
    <section
      sx={{
        display: "flex",
        width: "100vw",
        height: ["100vh", "-webkit-fill-available"],
        flexDirection: "column",
      }}
    >
      <main
        sx={{
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
        <p sx={{ mb: 0 }}>Austin Chang</p>
        <small># JS Developer</small>
      </main>
      <ul
        sx={{
          listStyleType: "none",
          display: "flex",
          flexGrow: 1,
          alignItems: "center",
          justifyContent: "space-around",
          fontSize: "1.2em",
        }}
      >
        <li>
          <Link href="https://rockonyu.github.io/posts/">筆記</Link>
        </li>
        <li>
          <Link href="https://rockonyu.github.io/resume/">個人履歷</Link>
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
