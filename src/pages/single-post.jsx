import React from "react"
import Layout from "../components/Layout"
import PageBanner from "../components/PageBanner"
import PageBG from "../images/bg/background-3.jpg"

import BlogImage from "../images/others/img-2.jpg"
import Human1 from "../images/testimonials/1.jpg"
import Human2 from "../images/testimonials/2.jpg"
import Human3 from "../images/testimonials/3.jpg"

const singlePost = () => {
  return (
    <>
      <Layout>
        <PageBanner bannerBG={PageBG} pageName="Contact" />

        <section className="pad100">
          <div className="container">
            <div className="row">
              <div className="col-md-9">
                {/* <!-- Start Blog Post --> */}
                <div className="single-blog-post">
                  <div className="blog-img">
                    <img
                      src={BlogImage}
                      className="img-responsive"
                      alt="Blog Image"
                    />
                  </div>
                  <div className="blog-post-content">
                    <div className="post-format width10">
                      <i className="fa fa-picture-o"></i>
                    </div>
                    <div className="post-description">
                      <ul className="post-meta">
                        <li>
                          <i className="fa fa-user"></i>Super User
                        </li>
                        <li>
                          <i className="fa fa-folder-open-o"></i>Blog
                        </li>
                        <li>
                          <i className="fa fa-calendar-o"></i>10 Nov 2020
                        </li>
                        <li>
                          <i className="fa fa-eye"></i>Hits: 223
                        </li>
                      </ul>
                      <h1>Max is the best template ever</h1>
                    </div>
                    <div className="post-text">
                      <p>
                        Pellentesque habitant morbi tristique senectus et netus
                        et malesuada fames ac turpis egestas. Vestibulum tortor
                        quam, feugiat vitae, ultricies eget, tempor sit amet,
                        ante. Donec eu libero sit amet quam egestas semper.
                        Aenean ultricies mi vitae est. Mauris placerat eleifend
                        leo. Donec sollicitudin molestie malesuada. Curabitur
                        arcu erat, accumsan id imperdiet et, porttitor at sem.
                        Vestibulum ac diam sit amet quam vehicula elementum sed
                        sit amet dui. Vivamus suscipit tortor eget felis
                        porttitor volutpat. Nulla quis lorem ut libero malesuada
                        feugiat. Mauris blandit aliquet elit, eget tincidunt
                        nibh pulvinar a. Quisque velit nisi, pretium ut lacinia
                        in, elementum id enim. Nulla quis lorem ut libero
                        malesuada feugiat. Quisque velit nisi, pretium ut
                        lacinia in, elementum id enim. Pellentesque in ipsum id
                        orci porta dapibus.
                      </p>
                      <p>
                        Pellentesque habitant morbi tristique senectus et netus
                        et malesuada fames ac turpis egestas. Vestibulum tortor
                        quam, feugiat vitae, ultricies eget, tempor sit amet,
                        ante. Donec eu libero sit amet quam egestas semper.
                        Aenean ultricies mi vitae est. Mauris placerat eleifend
                        leo. Donec sollicitudin molestie malesuada. Curabitur
                        arcu erat, accumsan id imperdiet et, porttitor at sem.
                        Vestibulum ac diam sit amet quam vehicula elementum sed
                        sit amet dui. Vivamus suscipit tortor eget felis
                        porttitor volutpat. Nulla quis lorem ut libero malesuada
                        feugiat. Mauris blandit aliquet elit, eget tincidunt
                        nibh pulvinar a. Quisque velit nisi, pretium ut lacinia
                        in, elementum id enim. Nulla quis lorem ut libero
                        malesuada feugiat. Quisque velit nisi, pretium ut
                        lacinia in, elementum id enim. Pellentesque in ipsum id
                        orci porta dapibus.
                      </p>
                      <blockquote className="primary">
                        <p>
                          Vivamus suscipit tortor eget felis porttitor volutpat.
                          Curabitur non nulla sit amet nisl tempus convallis
                          quis ac lectus. Vivamus magna justo, lacinia eget
                          consectetur sed, convallis at tellus. Proin eget
                          tortor risus. Nulla porttitor accumsan tincidunt.
                          Pellentesque ultrices ultrices sapien, nec tincidunt
                          nunc posuere ut. Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit. Nam scelerisque tristique
                          dolor vitae tincidunt.
                        </p>
                      </blockquote>
                      <p>
                        Pellentesque habitant morbi tristique senectus et netus
                        et malesuada fames ac turpis egestas. Vestibulum tortor
                        quam, feugiat vitae, ultricies eget, tempor sit amet,
                        ante. Donec eu libero sit amet quam egestas semper.
                        Aenean ultricies mi vitae est. Mauris placerat eleifend
                        leo. Donec sollicitudin molestie malesuada. Curabitur
                        arcu erat, accumsan id imperdiet et, porttitor at sem.
                        Vestibulum ac diam sit amet quam vehicula elementum sed
                        sit amet dui. Vivamus suscipit tortor eget felis
                        porttitor volutpat. Nulla quis lorem ut libero malesuada
                        feugiat. Mauris blandit aliquet elit, eget tincidunt
                        nibh pulvinar a. Quisque velit nisi, pretium ut lacinia
                        in, elementum id enim. Nulla quis lorem ut libero
                        malesuada feugiat. Quisque velit nisi, pretium ut
                        lacinia in, elementum id enim. Pellentesque in ipsum id
                        orci porta dapibus.
                      </p>
                    </div>
                    <ul className="post-tag">
                      Tags:
                      <li>
                        <a href="#">HTML</a>,
                      </li>
                      <li>
                        <a href="#">Bootstrap</a>,
                      </li>
                      <li>
                        <a href="#">Creative</a>,
                      </li>
                      <li>
                        <a href="#">Retina</a>
                      </li>
                    </ul>
                  </div>

                  {/* <!-- Start Comment Section --> */}
                  <div className="comment-section">
                    <h2>4 Comments</h2>

                    <ul className="comment-tree">
                      <li>
                        <div className="comment-box">
                          <img alt="" src={Human1} />
                          <div className="comment-content">
                            <h4>
                              John Doe <a href="#">Reply</a>
                            </h4>
                            <span>July 6, 2020. 8:30 pm.</span>
                            <p>
                              Class aptent taciti sociosqu litora torquent per
                              conubia per himenaeos. Nulla tristique in semper
                              vel. Vestibulum sodales ante a purus volutpat
                              euismod. Proin sodales quam nec ante sollicitudin
                              lacinia.
                            </p>
                          </div>
                        </div>
                        <ul className="depth">
                          <li>
                            <div className="comment-box">
                              <img alt="" src={Human3} />
                              <div className="comment-content">
                                <h4>
                                  John Doe <a href="#">Reply</a>
                                </h4>
                                <span>July 6, 2020. 8:30 pm.</span>
                                <p>
                                  Class aptent taciti sociosqu litora torquent
                                  per conubia per himenaeos. Nulla tristique in
                                  semper vel.
                                </p>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <div className="comment-box">
                          <img alt="" src={Human2} />
                          <div className="comment-content">
                            <h4>
                              John Doe <a href="#">Reply</a>
                            </h4>
                            <span>July 6, 2020. 8:30 pm.</span>
                            <p>
                              Morbi in sem quis dui placerat ornare.
                              Pellentesque odio nisi, euismod in, pharetra a,
                              ultricies in, diam. Sed arcu. Cras consequat.
                            </p>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="comment-box">
                          <img alt="" src={Human1} />
                          <div className="comment-content">
                            <h4>
                              John Doe <a href="#">Reply</a>
                            </h4>
                            <span>July 6, 2020. 8:30 pm.</span>
                            <p>
                              Class aptent taciti sociosqu litora torquent per
                              conubia per himenaeos. Nulla tristique in semper
                              vel. Vestibulum sodales ante a purus volutpat
                              euismod. Proin sodales quam nec ante sollicitudin
                              lacinia.
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <form className="comment-form">
                      <h2>Leave a Reply</h2>
                      <div className="row">
                        <div className="col-md-4">
                          <input
                            name="name"
                            id="name1"
                            type="text"
                            placeholder="Name (required)"
                          />
                        </div>
                        <div className="col-md-4">
                          <input
                            name="mail"
                            id="mail1"
                            type="text"
                            placeholder="Email (required)"
                          />
                        </div>
                        <div className="col-md-4">
                          <input
                            name="website"
                            id="website1"
                            type="text"
                            placeholder="Website"
                          />
                        </div>
                        <div className="col-md-12">
                          <textarea
                            name="comment"
                            id="comment1"
                            placeholder="Your Message (required)"
                          ></textarea>
                          <input
                            type="submit"
                            id="submit_contact1"
                            className="btn btn-primary"
                            value="Post Comment"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                  {/* <!-- End Comment Section --> */}
                </div>
                {/* <!-- End Blog Post --> */}
              </div>
              <div className="col-md-3 right-sidebar mbl-mt-30">
                <div className="widget widget-search">
                  <div className="widget-title">
                    <h3>Search</h3>
                  </div>
                  <input
                    name="name"
                    id="name1"
                    type="search"
                    placeholder="Search"
                  />
                </div>
                <div className="widget widget-archive">
                  <div className="widget-title">
                    <h3>Blog Archive</h3>
                  </div>
                  <ul>
                    <li>
                      <a href="#">June 2020 (2)</a>
                    </li>
                    <li>
                      <a href="#">July 2020 (4)</a>
                    </li>
                    <li>
                      <a href="#">Aug 2020 (3)</a>
                    </li>
                    <li>
                      <a href="#">Sep 2020 (5)</a>
                    </li>
                  </ul>
                </div>
                <div className="widget widget-category">
                  <div className="widget-title">
                    <h3>Blog Categories</h3>
                  </div>
                  <ul>
                    <li>
                      <a href="#">Blog (4)</a>
                    </li>
                    <li>
                      <a href="#">Template (4)</a>
                    </li>
                    <li>
                      <a href="#">Bootstrap (4)</a>
                    </li>
                    <li>
                      <a href="#">Design (4)</a>
                    </li>
                  </ul>
                </div>

                <div className="widget widget-tag">
                  <div className="widget-title">
                    <h3>Tag Cloud</h3>
                  </div>
                  <ul className="tags-list">
                    <li>
                      <a href="#">Business</a>
                    </li>
                    <li>
                      <a href="#">Joomla</a>
                    </li>
                    <li>
                      <a href="#">HTML</a>
                    </li>
                    <li>
                      <a href="#">Template</a>
                    </li>
                    <li>
                      <a href="#">Wordpress</a>
                    </li>
                  </ul>
                </div>
                <div className="widget widget-text">
                  <div className="widget-title">
                    <h3>Text Widget</h3>
                  </div>
                  <p>
                    Suspendisse urna nibh, viverra non, semper suscipit, posuere
                    a, pede.
                  </p>
                  <p>
                    Donec nec justo eget felis facilisis fermentum. Aliquam
                    porttitor mauris sit amet orci.
                  </p>
                </div>
                <div className="widget widget-text">
                  <div className="widget-title">
                    <h3>Contact Right</h3>
                  </div>
                  <p>You can contact or visit us during working time.</p>
                  <p>Tel: 1234 - 5678 - 9012</p>
                  <p>Email: support@example.com</p>
                  <p>Working Hours: 8:00 a.m - 17:00 a.m</p>
                </div>
                <div className="widget widget-social">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-pinterest"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-dribbble"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-behance"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-git"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default singlePost
