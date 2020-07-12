import React from "react"
import { Layout, SEO } from "../components"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>
      You just hit a route that doesn&#39;t exist... back to{" "}
      <a href="https://rockonyu.github.io">Home</a>
    </p>
  </Layout>
)

export default NotFoundPage
