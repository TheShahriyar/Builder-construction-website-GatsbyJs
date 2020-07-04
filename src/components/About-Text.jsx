import React from "react"
import AboutImg from "../images/about.jpg"

const AboutText = () => {
  return (
    <>
      <section className="about-section pad80">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="about-image">
                <img src={AboutImg} alt="free construction template" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-text mbl-mt-30">
                <div className="about-title">
                  <h3>We Build Everything That You Need</h3>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  aperiam quaerat velit nam perspiciatis vitae, tempora, ut
                  iusto molestias, quam eligendi dolore id possimus. Eos libero
                  quasi placeat nam commodi quo fuga vitae dolores quibusdam
                  incidunt? Fugit quasi quis eius.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  aperiam quaerat velit nam perspiciatis vitae, tempora, ut
                  iusto molestias, quam eligendi dolore id possimus. Eos libero
                  quasi placeat nam commodi quo fuga vitae dolores quibusdam
                  incidunt? Fugit quasi quis eius.
                </p>
                <div className="contact">
                  <div className="phone">
                    <i className="fa fa-phone"></i>
                    <p>Phone Number</p>
                    <h4>+756 766 77765</h4>
                  </div>
                  <div className="email">
                    <i className="fa fa-envelope-o"></i>
                    <p>Email Address</p>
                    <h4>info@yourdomain.com</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutText
