import React from "react"

import img1 from "../images/others/running-5.jpg"
import img2 from "../images/others/running-1.jpg"
import img3 from "../images/others/running-3.jpg"
import SectionTitle from "./SectionTitle"

const LatestNews = () => {
  return (
    <>
      <section
        className="pad-t80 pad-b50"
        style={{ backgroundColor: "#f9f9f9" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <SectionTitle titleStyle="text-center" title="Latest News" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="latest-news">
                <div className="latest-news-img">
                  <img src={img1} className="img-responsive" alt="blog-post" />
                  <div>
                    <span>JUNE</span>
                    <span>29</span>
                  </div>
                </div>
                <div className="comment">
                  <p>
                    Posted In: <span>Business, Blog</span>
                  </p>
                  <p>
                    <span>
                      <a href="#">
                        <i className="fa fa-comments"></i>
                      </a>{" "}
                      15
                    </span>
                    <span>
                      <a href="#">
                        <i className="fa fa-eye"></i>
                      </a>{" "}
                      11
                    </span>
                  </p>
                </div>
                <h4>
                  <a href="#">
                    Lorem Ipsum is dummy text of type setting industry.
                  </a>
                </h4>
                <p>
                  Vivamus magna justo, lacinia eget consectetur convallis at
                  tellus. Lorem ipsum dolor sit consectetur adipiscing elit
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="latest-news">
                <div className="latest-news-img">
                  <img src={img2} className="img-responsive" alt="blog-post" />
                  <div>
                    <span>JUNE</span>
                    <span>29</span>
                  </div>
                </div>
                <div className="comment">
                  <p>
                    Posted In: <span>Business, Blog</span>
                  </p>
                  <p>
                    <span>
                      <a href="#">
                        <i className="fa fa-comments"></i>
                      </a>{" "}
                      15
                    </span>
                    <span>
                      <a href="#">
                        <i className="fa fa-eye"></i>
                      </a>{" "}
                      11
                    </span>
                  </p>
                </div>
                <h4>
                  <a href="#">
                    Lorem Ipsum is dummy text of type setting industry.
                  </a>
                </h4>
                <p>
                  Vivamus magna justo, lacinia eget consectetur convallis at
                  tellus. Lorem ipsum dolor sit consectetur adipiscing elit
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="latest-news">
                <div className="latest-news-img">
                  <img src={img3} className="img-responsive" alt="blog-post" />
                  <div>
                    <span>JUNE</span>
                    <span>29</span>
                  </div>
                </div>
                <div className="comment">
                  <p>
                    Posted In: <span>Business, Blog</span>
                  </p>
                  <p>
                    <span>
                      <a href="#">
                        <i className="fa fa-comments"></i>
                      </a>{" "}
                      15
                    </span>
                    <span>
                      <a href="#">
                        <i className="fa fa-eye"></i>
                      </a>{" "}
                      11
                    </span>
                  </p>
                </div>
                <h4>
                  <a href="#">
                    Lorem Ipsum is dummy text of type setting industry.
                  </a>
                </h4>
                <p>
                  Vivamus magna justo, lacinia eget consectetur convallis at
                  tellus. Lorem ipsum dolor sit consectetur adipiscing elit
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default LatestNews
