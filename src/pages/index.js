import React from "react"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-md-6">Left Side</div>
          <div className="col-md-6">Right Side</div>
        </div>
      </div>
    </Layout>
  )
}
