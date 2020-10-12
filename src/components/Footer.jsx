import React from "react"

const Footer = () => {
  return (
    <>
      <section
        className="footer-section pad-t80 parallax"
        style={{ backgroundColor: "#222" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="footer-title">
                <h3>About Us</h3>
              </div>
              <div className="footer-text">
                <p>
                  Curabitur non nulla sit amet nisl tempus convallis quis ac
                  lectus.
                  <span className="text-brand-color">Vivamus magna justo</span>,
                  lacinia eget consectetur sed, convallis at tellus. Nulla
                  porttitor accumsan tincidunt.
                </p>
                <p>
                  Vivamus suscipit tortor eget felis porttitor volutpat.
                  Vestibulum ante ipsum primis in faucibus orci
                  <span className="text-brand-color">luctus et</span> ultrices
                  posuere cubilia Curae.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-title">
                <h3>Office Hour</h3>
              </div>
              <div className="footer-office-hour">
                <ul>
                  <li>
                    <a href="#">Opining Days :</a>
                  </li>
                  <li>
                    <a href="#">Monday – Friday : 9am to 20 pm</a>
                  </li>
                  <li>
                    <a href="#">Saturday : 9am to 17 pm</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="#">Vacations :</a>
                  </li>
                  <li>
                    <a href="#">All Sunday Days</a>
                  </li>
                  <li>
                    <a href="#">All Official Holidays</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-title">
                <h3>Service List</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-long-arrow-right"></i>Interior Design
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-long-arrow-right"></i>Architecture
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-long-arrow-right"></i>Bedroom Design
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-long-arrow-right"></i>Bathroom
                      Interior
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-long-arrow-right"></i>Living Room
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-long-arrow-right"></i>Kitchen Interior
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-title">
                <h3>Subscribe</h3>
              </div>
              <p>Vivamus magna justo, lacinia eget consectetur sed.</p>
              <form>
                <div className="form-group footer-subscribe">
                  <input
                    type="email"
                    className="form-control"
                    id="Email1"
                    placeholder="Subscribe with us"
                  />
                  <button type="submit" className="btn btn-default">
                    Join
                  </button>
                </div>
              </form>
              <div className="top-header-social">
                <ul className="top-social">
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
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
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-rss"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row copyright">
            <div className="col-md-6">
              <div className="copyright-text">
                <p>
                  Builder © All Rights Reserved. Developed by
                  <a href="/">
                    The Shahriyar
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="footer-menu">
                <ul>
                  <li>
                    <a href="#">News</a>
                  </li>
                  <li>
                    <a href="#">FAQs</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms of Use</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer
