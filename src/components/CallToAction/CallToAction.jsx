import React from "react"
import BG1 from "../../images/bg/background-1.jpg"

const CallToAction = () => {
  return (
    <>
      <section
        className="call-to-action-section pad80"
        style={{ backgroundImage: `url(${BG1})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="call-to-action">
                <h3>
                  Trusted By More Than <br />
                  <span>34678</span> Happy People
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit quos est nam sit beatae asperiores inventore ea culpa
                  explicabo officiis dolorum amet ipsam illum non iure, corrupti
                  pariatur dolor repudiandae?
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

export default CallToAction
