import React, { FC } from "react"
import styled from "styled-components"
import MaxWidth from "./MaxWidth"

interface Props {
  name: string
  label: string
}

const Section = styled.div`
  background-color: #2f393b;
  color: white;
  padding: 1em;
  padding-left: 0;
`

const Name = styled.h1`
  font-size: 1.5em;
`

const Header: FC<Props> = ({ name, label }) => (
  <Section>
    <MaxWidth>
      <Name>{name}</Name>
    </MaxWidth>
  </Section>
)

export default Header
