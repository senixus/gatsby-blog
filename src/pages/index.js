import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Layout from "../components/layout/Layout"
import SEO from "../components/seo"
import Posts from "../components/posts/Posts"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allAirtable {
        nodes {
          recordId
          data {
            title
            date
            details
            image
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <Posts posts={data} />
    </Layout>
  )
}

export default IndexPage
