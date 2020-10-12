import React from "react"

const TopBar = () => {
  return (
    <>
      <section className="top-header-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
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
            <div className="col-lg-6">
              <div className="top-header-address">
                <div className="top-phone mr10">
                  <i className="fa fa-phone"></i> +466 123 333 589
                </div>
                <div className="top-address">
                  <i className="fa fa-map-marker"></i> 128 W 44th St, New York,
                  New York 10075
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TopBar
