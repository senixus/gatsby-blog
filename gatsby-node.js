const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`template/blog.js`)

  const result = await graphql(`
    query {
      allAirtable {
        nodes {
          recordId
        }
      }
    }
  `)

  result.data.allAirtable.nodes.map(node => {
    createPage({
      path: `/posts/${node.recordId}`,
      component: blogPostTemplate,
      context: {
        recordId: node.recordId,
      },
    })
  })
}
