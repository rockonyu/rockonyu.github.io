import React, { FC } from "react"
import styled from "styled-components"
import MileStone from "./MileStone"
import SkillTree from "./SkillTree"
import Summary from "./Summary"

interface Props {
  description: string
  skills: string[]
  milestone: Array<{
    to: string
    from: string
    name: string
    title: string
    projects: Array<{ name: string; href?: string }>
  }>
}

const Section = styled.div`
  background-color: white;
  margin: 2em 0;
`
const Title = styled.h3`
  border-bottom: solid 1px #2f393b;
  padding-bottom: 0.5em;
  margin-bottom: 0.5em;
  letter-spacing: 5px;
`

const Main: FC<Props> = ({ description, skills, milestone }) => (
  <Section>
    <Title>SUMMARY</Title>
    <Summary>{description}</Summary>
    <Title>MILESTONE</Title>
    <MileStone items={milestone} />
    <Title>SKILL TREE</Title>
    <SkillTree items={skills} />
  </Section>
)

export default Main
