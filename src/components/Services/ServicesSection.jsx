import React from "react"
import BG1 from "../../images/bg/background-1.jpg"
import SectionTitle from "../SectionTitle"
import Service from "./Service"

const ServicesSection = () => {
  return (
    <>
      <section
        className="pad-t80 pad-b50 parallax"
        style={{ backgroundImage: `url(${BG1})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <SectionTitle titleStyle="text-center white" title="Services" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <Service
                serviceColor="white"
                iconName="flaticon-drawing"
                title="Nulla portor accumsan"
              >
                <p>
                  Vestibulum ac diam sit amet quam vehicula elementum sed sit
                  amet dui. Nulla porttitor accumsan.
                </p>
              </Service>
            </div>
            <div className="col-lg-4 col-sm-6">
              <Service
                serviceColor="white"
                iconName="flaticon-construction"
                title="Vestibulum ac diam sit"
              >
                <p>
                  Praesent sapien massa, convallis a pellentesque nec, egestas
                  non nisi. Mauris blandit aliquet elit.
                </p>
              </Service>
            </div>
            <div className="col-lg-4 col-sm-6">
              <Service
                serviceColor="white"
                iconName="flaticon-transport"
                title="Praesent sapien massa"
              >
                <p>
                  Vivamus suscipit tortor eget felis porttitor volutpat.
                  Pellentesque in ipsum id orci porta dapibus.
                </p>
              </Service>
            </div>
            <div className="col-lg-4 col-sm-6">
              <Service
                serviceColor="white"
                iconName="flaticon-people"
                title="Pellentesque in ipsum"
              >
                <p>
                  Cras ultricies ligula sed magna dictum porta. Curabitur
                  aliquet quam id dui posuere blandit.
                </p>
              </Service>
            </div>
            <div className="col-lg-4 col-sm-6">
              <Service
                serviceColor="white"
                iconName="flaticon-construction-3"
                title="Cras ultricies ligula sed"
              >
                <p>
                  Lorem ipsum dolor sit amet, consect adipiscing elit.
                  Vestibulum ac diam sit amet quam vehicula elementum.
                </p>
              </Service>
            </div>
            <div className="col-lg-4 col-sm-6">
              <Service
                serviceColor="white"
                iconName="flaticon-construction-4"
                title="Lorem ipsum dolor sit"
              >
                <p>
                  Curabitur aliquet quam id dui posuere blandit. Cras ultricies
                  ligula sed magna dictum porta.
                </p>
              </Service>
            </div>
            <div className="col-lg-4 col-sm-6">
              <Service
                serviceColor="white"
                iconName="flaticon-security"
                title="Lorem ipsum dolor sit"
              >
                <p>
                  Curabitur aliquet quam id dui posuere blandit. Cras ultricies
                  ligula sed magna dictum porta.
                </p>
              </Service>
            </div>
            <div className="col-lg-4 col-sm-6">
              <Service
                serviceColor="white"
                iconName="flaticon-construction-6"
                title="Lorem ipsum dolor sit"
              >
                <p>
                  Curabitur aliquet quam id dui posuere blandit. Cras ultricies
                  ligula sed magna dictum porta.
                </p>
              </Service>
            </div>
            <div className="col-lg-4 col-sm-6">
              <Service
                serviceColor="white"
                iconName="flaticon-house"
                title="Lorem ipsum dolor sit"
              >
                <p>
                  Curabitur aliquet quam id dui posuere blandit. Cras ultricies
                  ligula sed magna dictum porta.
                </p>
              </Service>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServicesSection
