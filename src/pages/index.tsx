import React from "react"
import { Link } from "gatsby"
import { Layout, Image, SEO } from "../components"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi there</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <p>
      正在努力生成網站內容中，先前往
      <Link to="/resume/">個人履歷</Link>。
    </p>
    <footer>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  </Layout>
)

export default IndexPage
