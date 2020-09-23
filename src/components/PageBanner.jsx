import React from "react"

const PageBanner = ({ bannerBG, pageName }) => {
  return (
    <>
      <section
        className="breadcrumb-section parallax"
        style={{
          backgroundImage: `url(${bannerBG})`,
          backgroundPosition: "center center",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="page-title">
                <h1>{pageName}</h1>
              </div>
            </div>
            <div className="col-md-7">
              <div className="breadcrumb">
                <ul>
                  <li>You Are Here :</li>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>{pageName}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PageBanner
