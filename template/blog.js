import React from "react"
import Layout from "../src/components/layout/Layout"
import { graphql } from "gatsby"
import PostDetails from "../src/components/posts/PostDetails"

export const query = graphql`
  query($recordId: String) {
    airtable(recordId: { eq: $recordId }) {
      data {
        title
        image
        details
        date
      }
    }
  }
`

const Blog = props => {
  return (
    <Layout>
      <PostDetails post={props.data} />
    </Layout>
  )
}

export default Blog
