import React from "react"
import Bookmarks from "../components/bookmarks/Bookmarks"
import Layout from "../components/layout/Layout"
import SEO from "../components/seo"

const BookmarksPage = () => {
  return (
    <Layout>
      <SEO title="Bookmarks" />
      <Bookmarks />
    </Layout>
  )
}

export default BookmarksPage
