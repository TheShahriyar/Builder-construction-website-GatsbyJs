import React from "react"
import AboutText from "../components/About-Text"
import CallToAction2 from "../components/CallToAction/CallToAction2"
import Layout from "../components/Layout"
import PageBanner from "../components/PageBanner"
import PiechartSection from "../components/PiechartSection"
import RunningProjectSection from "../components/RunningProject/RunningProjectSection"
import PageBG from "../images/bg/background-3.jpg"

const about = () => {
  return (
    <>
      <Layout>
        <PageBanner bannerBG={PageBG} pageName="About Us" />
        <AboutText />
        <PiechartSection />
        <RunningProjectSection />
        <CallToAction2 />
      </Layout>
    </>
  )
}

export default about
