import React from "react"
import Error from "../components/error/Error"
import Layout from "../components/layout/Layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Error />
  </Layout>
)

export default NotFoundPage
