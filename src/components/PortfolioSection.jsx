import React from "react"
import SectionTitle from "./SectionTitle"
import Project1 from "../images/portfolio/project-1.jpg"
import Project2 from "../images/portfolio/project-2.jpg"
import Project3 from "../images/portfolio/project-3.jpg"
import Project4 from "../images/portfolio/project-4.jpg"
import Project5 from "../images/portfolio/project-5.jpg"
import Project6 from "../images/portfolio/project-6.jpg"
import Project7 from "../images/portfolio/project-7.jpg"
import Project8 from "../images/portfolio/project-8.jpg"
import Project9 from "../images/portfolio/project-9.jpg"

const PortfolioSection = () => {
  return (
    <>
      <section className="pad-t80 pad-b50">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <SectionTitle titleStyle="text-center" title="Our Project" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-6 bedroom">
              <div className="portfolio-post mb30">
                <img src={Project1} alt="" />
                <div className="hover-box">
                  <div className="inner-hover">
                    <h4>Portfolio Title</h4>
                    <a className="link" href="single-project.html">
                      <i className="fa fa-search"></i>
                    </a>
                    <a
                      className="zoom"
                      href="assets/images/portfolio/project-1.jpg"
                      data-lightbox="portfolio-1"
                    >
                      <i className="fa fa-picture-o"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 living">
              <div className="portfolio-post mb30">
                <img src={Project2} alt="" />
                <div className="hover-box">
                  <div className="inner-hover">
                    <h4>Portfolio Title</h4>
                    <a className="link" href="single-project.html">
                      <i className="fa fa-search"></i>
                    </a>
                    <a
                      className="zoom"
                      href="assets/images/portfolio/project-2.jpg"
                      data-lightbox="portfolio-1"
                    >
                      <i className="fa fa-picture-o"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 bathroom">
              <div className="portfolio-post mb30">
                <img src={Project3} alt="" />
                <div className="hover-box">
                  <div className="inner-hover">
                    <h4>Portfolio Title</h4>
                    <a className="link" href="single-project.html">
                      <i className="fa fa-search"></i>
                    </a>
                    <a
                      className="zoom"
                      href="assets/images/portfolio/project-3.jpg"
                      data-lightbox="portfolio-1"
                    >
                      <i className="fa fa-picture-o"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 bedroom living">
              <div className="portfolio-post mb30">
                <img src={Project4} alt="" />
                <div className="hover-box">
                  <div className="inner-hover">
                    <h4>Portfolio Title</h4>
                    <a className="link" href="single-project.html">
                      <i className="fa fa-search"></i>
                    </a>
                    <a
                      className="zoom"
                      href="assets/images/portfolio/project-4.jpg"
                      data-lightbox="portfolio-1"
                    >
                      <i className="fa fa-picture-o"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 bedroom bathroom">
              <div className="portfolio-post mb30">
                <img src={Project5} alt="" />
                <div className="hover-box">
                  <div className="inner-hover">
                    <h4>Portfolio Title</h4>
                    <a className="link" href="single-project.html">
                      <i className="fa fa-search"></i>
                    </a>
                    <a
                      className="zoom"
                      href="assets/images/portfolio/project-5.jpg"
                      data-lightbox="portfolio-1"
                    >
                      <i className="fa fa-picture-o"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 bathroom living">
              <div className="portfolio-post mb30">
                <img src={Project6} alt="" />
                <div className="hover-box">
                  <div className="inner-hover">
                    <h4>Portfolio Title</h4>
                    <a className="link" href="single-project.html">
                      <i className="fa fa-search"></i>
                    </a>
                    <a
                      className="zoom"
                      href="assets/images/portfolio/project-6.jpg"
                      data-lightbox="portfolio-1"
                    >
                      <i className="fa fa-picture-o"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 bedroom living bathroom">
              <div className="portfolio-post mb30">
                <img src={Project7} alt="" />
                <div className="hover-box">
                  <div className="inner-hover">
                    <h4>Portfolio Title</h4>
                    <a className="link" href="single-project.html">
                      <i className="fa fa-search"></i>
                    </a>
                    <a
                      className="zoom"
                      href="assets/images/portfolio/project-7.jpg"
                      data-lightbox="portfolio-1"
                    >
                      <i className="fa fa-picture-o"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 bedroom bathroom">
              <div className="portfolio-post mb30">
                <img src={Project8} alt="" />
                <div className="hover-box">
                  <div className="inner-hover">
                    <h4>Portfolio Title</h4>
                    <a className="link" href="single-project.html">
                      <i className="fa fa-search"></i>
                    </a>
                    <a
                      className="zoom"
                      href="assets/images/portfolio/project-8.jpg"
                      data-lightbox="portfolio-1"
                    >
                      <i className="fa fa-picture-o"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 living">
              <div className="portfolio-post mb30">
                <img src={Project9} alt="" />
                <div className="hover-box">
                  <div className="inner-hover">
                    <h4>Portfolio Title</h4>
                    <a className="link" href="single-project.html">
                      <i className="fa fa-search"></i>
                    </a>
                    <a
                      className="zoom"
                      href="assets/images/portfolio/project-9.jpg"
                      data-lightbox="portfolio-1"
                    >
                      <i className="fa fa-picture-o"></i>
                    </a>
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

export default PortfolioSection
