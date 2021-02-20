import React from "react"
import About from "../components/about/About"
import Layout from "../components/layout/Layout"
import Seo from "../components/seo"

const AboutPage = () => {
  return (
    <Layout>
      <Seo title="About" />
      <About />
    </Layout>
  )
}

export default AboutPage
