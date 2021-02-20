import React from "react"
import { Link } from "gatsby"
import Author from "../author/Author"
import "./post.scss"

const Posts = ({ posts }) => {
  const handlePost = post => {
    return post.data.details.length >= 250
      ? post.data.details.substr(0, 250) + "..."
      : post.data.details
  }

  return (
    <section className="posts-section container">
      <div className="posts-and__author ">
        <div className="posts">
          {posts.allAirtable.nodes &&
            posts.allAirtable.nodes.map(post => {
              return (
                <div className="post" key={post.recordId}>
                  <Link to={`/posts/${post.recordId}`} className="post-title">
                    <h2>{post.data.title}</h2>
                  </Link>
                  <p className="post-date">
                    Posted on {post.data.date} by senixus
                  </p>
                  <Link to={`/posts/${post.recordId}`}>
                    <img src={post.data.image} alt={post.data.title} />
                  </Link>

                  <div className="post-detail">
                    <p>{handlePost(post)}</p>
                  </div>
                  <Link
                    to={`/posts/${post.recordId}`}
                    className="read-more__btn"
                    type="button"
                  >
                    Read More
                  </Link>
                </div>
              )
            })}
        </div>
        <div className="author">
          <Author />
        </div>
      </div>
    </section>
  )
}

export default Posts
