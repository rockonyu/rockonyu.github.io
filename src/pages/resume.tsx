import React from "react"
import Footer from "../components/resume/Footer"
import Main from "../components/resume/Main"
import resume from "../components/resume/resume.json"
import Header from "../components/header"
import SEO from "../components/seo"
import "../components/layout.css"
import styled from "styled-components"

const Container = styled.section`
  * {
    font-family: 微軟正黑體, Helvetica;
  }
`

const Resume = () => (
  <Container>
    <Header siteTitle={resume.basics.name} />
    <SEO
      title="2020 張瑀的個人履歷"
      description="Austin 是專注網際網路的軟體工作者，使用不同技術總計約六年的網頁開發經驗，作為前端工程師則透過 React、TypeScript、AngularJS 等技術開發，在專案期限內協助數個客戶網站順利上線。職業生涯與許多專業工作者合作，其認真面對工作的態度均獲得正面回饋。此外也對技術發展保持開放態度，持續審視當前職涯並持續學習，希望與有才華的同事互相技術交流與實際應用在商用產品。"
    />
    <Main
      description={resume.basics.description}
      skills={resume.skills}
      milestone={resume.milestone}
    />
    <Footer
      name={resume.basics.name}
      enname={resume.basics.enname}
      email={resume.basics.email}
      linkedin={resume.basics.linkedin}
    />
  </Container>
)

export default Resume
