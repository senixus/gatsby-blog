import { Link } from "gatsby"
import React from "react"
import Author from "../author/Author"
import "./post.scss"

const PostDetails = ({ post }) => {
  return (
    <section className="posts-section container">
      <div className="posts-and__author ">
        <div className="posts">
          <div className="post">
            <Link to="/#" className="post-title">
              <h2>{post.airtable.data.title}</h2>
            </Link>
            <p className="post-date">
              Posted on {post.airtable.data.date} by Senixus
            </p>
            <Link to="/#">
              <img
                src={post.airtable.data.image}
                alt={post.airtable.data.title}
              />
            </Link>

            <div className="post-detail">
              <p>{post.airtable.data.details}</p>
            </div>
          </div>
        </div>

        <div className="author">
          <Author />
        </div>
      </div>
    </section>
  )
}

export default PostDetails
