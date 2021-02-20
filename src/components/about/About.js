import React from "react"
import "./about.scss"

const About = () => {
  return (
    <>
      <section className="posts-section container">
        <div className="posts-and__author ">
          <div className="about">
            <div className="about-info">
              <div className="author-image__about">
                <img
                  src="https://randomuser.me/api/portraits/women/82.jpg"
                  alt="author "
                />
              </div>
              <div className="text-info">
                <h4>Rosemary Meyer</h4>
                <p>
                  Frontend web developer and web designer Mainly
                  CSS/HTML/JavaScript(React, Vue) .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
