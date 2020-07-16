import React, { FC } from "react"
import { Link } from "gatsby"
import { css } from "theme-ui"

type Props = {
  siteTitle: string
}

const baseStyles = css({
  color: `white`,
  "&:hover": {
    textDecoration: `none`,
  },
})

const Header: FC<Props> = ({ siteTitle }) => (
  <header
    css={{
      background: "#2f393b",
      mb: "1.45rem",
    }}
  >
    <section
      css={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 css={{ margin: 0 }}>
        <Link to="/posts" css={baseStyles}>
          {siteTitle}
        </Link>

        <small css={{ float: "right" }}>
          <Link to="/tags" css={baseStyles}>
            Tags
          </Link>
        </small>
      </h1>
    </section>
  </header>
)

export default Header
