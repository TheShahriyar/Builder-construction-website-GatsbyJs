import React from "react"
import Layout from "../components/Layout"
import PageBanner from "../components/PageBanner"
import Teams from "../components/Teams/Teams"
import PageBG from "../images/bg/background-3.jpg"

const team = () => {
  return (
    <>
      <Layout>
        <PageBanner bannerBG={PageBG} pageName="Project" />
        <Teams />
      </Layout>
    </>
  )
}

export default team
