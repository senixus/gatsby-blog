import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

const Author = () => {
  const data = useStaticQuery(graphql`
    query {
      allAirtable(limit: 3, sort: { fields: data___date, order: DESC }) {
        nodes {
          recordId
          data {
            title
            image
            date(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  return (
    <>
      <div className="about-me">About Me</div>
      <div className="author-info">
        <img
          src="https://randomuser.me/api/portraits/women/82.jpg"
          alt="author "
        />
        <h3>Rosemary Meyer</h3>
        <div className="info">Frontend Developer, Designer</div>
      </div>
      <hr />
      <div className="recent-posts">
        {data.allAirtable.nodes.map(post => (
          <Link to={`/posts/${post.recordId}`}>
            <div className="recents" key={post.recordId}>
              <div className="recent">
                <div>
                  <img src={post.data.image} alt={post.data.title} />
                </div>
                <div className="post-dates">
                  <p>{post.data.title}</p>
                  <p>{post.data.date}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Author
