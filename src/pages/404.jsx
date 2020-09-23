import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

const NotFound = () => {
  return (
    <Layout>
      <section className="contact-section pad100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12 mx-auto">
              <div className="page-not-found">
                <h1> 404 </h1>
                <h2> Page Not Found </h2>
                <Link to="/"> Return to Homepage </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default NotFound
