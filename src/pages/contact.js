import React from "react"
import Contact from "../components/contact/Contact"
import Layout from "../components/layout/Layout"
import Seo from "../components/seo"

const ContactPage = () => {
  return (
    <Layout>
      <Seo title="Contact" />
      <Contact />
    </Layout>
  )
}

export default ContactPage
