import React from "react"
import BG from "../../images/bg/background-3.jpg"

const CallToAction2 = () => {
  return (
    <>
      <section
        className="pad80 parallax"
        style={{ backgroundImage: `url(${BG})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="call-to-action-2">
                <h3
                  style={{ color: "#fff", marginTop: "10px", fontSize: "24px" }}
                >
                  LOOKING FOR BEST COMPANY FOR YOUR NEXT PROJECT?
                </h3>
              </div>
            </div>
            <div className="col-md-4">
              <div className="buttons mbl-mt-30" style={{ display: "flex" }}>
                <a href="#" className="btn btn-primary white-bg mr-2">
                  Get a Quote
                </a>
                <a href="#" className="btn btn-primary">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CallToAction2
