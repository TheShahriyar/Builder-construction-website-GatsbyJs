import React, { Component } from "react"
import Layout from "../components/Layout"
import PageBanner from "../components/PageBanner"
import PageBG from "../images/bg/background-3.jpg"

export default class contact extends Component {
  render() {
    return (
      <>
        <Layout>
          <PageBanner bannerBG={PageBG} pageName="Contact" />
          <section className="contact-section pad100">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="section-title text-center">
                    <h3>Contact Us</h3>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div className="contact-info-box">
                    <i className="fa fa-map-marker"></i>
                    <h4>Office Location</h4>
                    <p>
                      795 Fake Ave, Door 6 <br />
                      Wonderland, CA 94107, USA
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="contact-info-box">
                    <i className="fa fa-phone"> </i>
                    <h4>Call Us</h4>
                    <p>
                      Phone: +351123456789 <br />
                      Fax: +351987654321
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="contact-info-box">
                    <i className="fa fa-envelope"> </i>
                    <h4>Email Us</h4>
                    <p>
                      info@marble.com <br />
                      support@marble.com
                    </p>
                  </div>
                </div>
              </div>
              <div className="row pad-t60">
                <div className="col-lg-7 mx-auto col-sm-12">
                  <form action="" className="contact-form">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label>First Name</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label>Last Name</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label>Email</label>
                          <input type="email" className="form-control" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label>Phone</label>
                          <input type="tel" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Subject</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>Message</label>
                      <textarea rows="5" className="form-control"></textarea>
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn btn-primary">
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </Layout>
      </>
    )
  }
}
