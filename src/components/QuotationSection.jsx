import React from "react"
import SectionTitle from "./SectionTitle"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

import men1 from "../images/testimonials/1.jpg"
import men2 from "../images/testimonials/2.jpg"
import men3 from "../images/testimonials/3.jpg"

const QuotationSection = () => {
  let settings = {
    className: "testimonial-container",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <>
      <section className="pad80">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <SectionTitle titleStyle="left" title="Get a Quote" />
              <form id="quotation" className="quotation-form">
                <div className="row">
                  <div className="col-md-6 col-sm-6">
                    <div className="form-group">
                      <input
                        name="name"
                        className="form-control"
                        id="name"
                        type="text"
                        placeholder="Your Name"
                        required="required"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="form-group">
                      <input
                        name="email"
                        className="form-control"
                        id="email"
                        type="text"
                        placeholder="E-mail"
                        required="required"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="form-group">
                      <input
                        name="phone"
                        className="form-control"
                        id="phone"
                        type="text"
                        placeholder="Your Phone"
                        required="required"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="form-group">
                      <select
                        name="category"
                        className="form-control"
                        id="category"
                        required="required"
                      >
                        <option value="">Category</option>
                        <option value="Apartment">Apartment</option>
                        <option value="Office">Office</option>
                        <option value="Kitchen">Kitchen</option>
                        <option value="Bathroom">Bathroom</option>
                        <option value="Drawing Room">Drawing Room</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        className="form-control"
                        id="message"
                        placeholder="Your Message"
                        required="required"
                        rows="6"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      id="submit"
                    >
                      Submit
                    </button>
                  </div>
                </div>
                <div id="msgSubmit" className="h3 text-center hidden"></div>
              </form>
            </div>
            <div className="col-md-6 mbl-mt-30">
              <SectionTitle titleStyle="left" title="Client's Review" />
              <Slider {...settings}>
                <div className="testimonial-item">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Tempore voluptate, amet corporis consequatur excepturi
                    maxime iure ipsam officia quasi facere mollitia veritatis,
                    voluptates, id eum. Eveniet consequatur explicabo aut vel?
                  </p>
                  <img src={men1} alt="free html5 template" />
                  <h5>--John Doe</h5>
                </div>
                <div className="testimonial-item">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Tempore voluptate, amet corporis consequatur excepturi
                    maxime iure ipsam officia quasi facere mollitia veritatis,
                    voluptates, id eum. Eveniet consequatur explicabo aut vel?
                  </p>
                  <img src={men2} alt="free html5 template" />
                  <h5>--John Doe</h5>
                </div>
                <div className="testimonial-item">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Tempore voluptate, amet corporis consequatur excepturi
                    maxime iure ipsam officia quasi facere mollitia veritatis,
                    voluptates, id eum. Eveniet consequatur explicabo aut vel?
                  </p>
                  <img src={men3} alt="free html5 template" />
                  <h5>--John Doe</h5>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default QuotationSection
