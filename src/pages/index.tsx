import React, { FC } from "react"
import { PageProps, graphql } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

export type Data = {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

const Container = styled.section`
  display: flex;
  width: 100vw;
  height: 100vh;
  height: -webkit-fill-available;
  flex-direction: column;
`

const Hero = styled.main`
  color: white;
  font-size: 3em;
  background-color: #2f393b;
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Navbar = styled.ul`
  list-style-type: none;
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: space-around;
  font-size: 1.2em;
`

const Link = styled.a`
  color: #2f393b;
  text-decoration: none;
`

const IndexPage: FC<PageProps<Data>> = () => {
  return (
    <Container>
      <Hero>
        <p css={{ marginBottom: 0 }}>Austin Chang</p>
        <small># JS Developer</small>
      </Hero>
      <Navbar>
        <li>
          <Link href="https://rockonyu.github.io/posts/">筆記</Link>
        </li>
        <li>
          <Link href="https://rockonyu.github.io/resume/">個人履歷</Link>
        </li>
      </Navbar>
    </Container>
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
