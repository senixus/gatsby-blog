import React, { useEffect, useState } from "react"
import "./bookmarks.scss"
import { Link } from "gatsby"

const Bookmarks = () => {
  const url = process.env.BOOKMARK_URL
  const [bookmarks, setBookmarks] = useState([])

  useEffect(() => {
    const getBookmarks = async () => {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${process.env.RAINDROP_ACCESS_TOKEN}`,
        },
      })
      const data = await response.json()
      setBookmarks(data)
    }

    getBookmarks()
  }, [])

  return (
    <main className="bookmarks container">
      {bookmarks.items &&
        bookmarks.items.map(bookmark => (
          <div key={bookmark._id} className="bookmarks-item pd">
            <div className="bookmarks-item__image">
              <Link to={bookmark.link} target="_blank">
                <img src={bookmark.cover} alt={bookmark.title} />
              </Link>
            </div>
            <div className="bookmarks-item__info">
              <Link to={bookmark.link} target="_blank">
                <h3 className="pd">{bookmark.title}</h3>
              </Link>

              <p className="pd">{bookmark.excerpt}</p>
              <p className="pd">
                <Link to={bookmark.link} target="_blank">
                  <span>{bookmark.domain}</span>
                </Link>

                <span>{bookmark.created.substr(0, 10)}</span>
              </p>
            </div>
          </div>
        ))}
    </main>
  )
}

export default Bookmarks
