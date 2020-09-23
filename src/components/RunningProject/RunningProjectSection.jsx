import React from "react"
import SectionTitle from "../SectionTitle"
import RunningProject1 from "../../images/others/running-1.jpg"
import RunningProject2 from "../../images/others/running-3.jpg"
import RunningProject3 from "../../images/others/running-4.jpg"

const RunningProjectSection = () => {
  return (
    <>
      <section className="pad-t80 pad-b50">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <SectionTitle
                titleStyle="text-center"
                title="Our Running Project"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="feature-6">
                <img className="img-responsive" src={RunningProject1} alt="" />
                <h4>Praesent sapien massa</h4>
                <div>
                  <strong>Client : </strong> Decorisa
                </div>
                <div>
                  <strong>Deadline : </strong> 21/12/2020
                </div>
                <p>
                  Donec sollicitudin molestie malesua. Praesent sapien massa,
                  convallis a pellentesque nec, egestas non nisi.
                </p>
                <a href="#" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-6">
                <img className="img-responsive" src={RunningProject2} alt="" />
                <h4>Praesent sapien massa</h4>
                <div>
                  <strong>Client : </strong> Decorisa
                </div>
                <div>
                  <strong>Deadline : </strong> 21/12/2020
                </div>
                <p>
                  Donec sollicitudin molestie malesua. Praesent sapien massa,
                  convallis a pellentesque nec, egestas non nisi.
                </p>
                <a href="#" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-6">
                <img className="img-responsive" src={RunningProject3} alt="" />
                <h4>Praesent sapien massa</h4>
                <div>
                  <strong>Client : </strong> Decorisa
                </div>
                <div>
                  <strong>Deadline : </strong> 21/12/2020
                </div>
                <p>
                  Donec sollicitudin molestie malesua. Praesent sapien massa,
                  convallis a pellentesque nec, egestas non nisi.
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

export default RunningProjectSection
