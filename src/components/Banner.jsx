import React from "react"
import BannerImage from "../images/bg/banner-5.jpg"

const Banner = () => {
  return (
    <>
      <section
        className="banner-section parallax"
        style={{ backgroundImage: `url(${BannerImage})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="banner-text">
                <h1>Welcome to builder company</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id
                  quas porro esse nesciunt quod nulla similique excepturi iusto
                  recusandae enim.
                </p>
                <a href="#" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner
