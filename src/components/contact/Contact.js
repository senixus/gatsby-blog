import React from "react"

import "./contact.scss"

const Contact = () => {
  return (
    <section className="contact-section container">
      <div className="contacts">
        <div className="contact-item">
          <form
            id="form"
            action={`https://formspree.io/f/${process.env.FORMSPREE_FORM_ID}`}
            method="POST"
          >
            <div className="form-group">
              <div className="label-div">
                <label htmlFor="name">Name :</label>
              </div>
              <input
                typ="text"
                name="name"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group">
              <div className="label-div">
                <label htmlFor="email">Email :</label>
              </div>
              <input
                typ="email"
                name="email"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <div className="label-div">
                <label htmlFor="message">Message :</label>
              </div>
              <textarea
                cols="30"
                rows="10"
                name="message"
                id="message"
                placeholder="Message"
              ></textarea>
            </div>
            <div className="form-group">
              <button type="submit" id="button">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
