import React from "react"
import CallToAction from "../components/CallToAction/CallToAction"
import CounterSection from "../components/CounterSection"
import Layout from "../components/Layout"
import PageBanner from "../components/PageBanner"
import PortfolioSection from "../components/PortfolioSection"
import QuotationSection from "../components/QuotationSection"
import RunningProjectSection from "../components/RunningProject/RunningProjectSection"
import PageBG from "../images/bg/background-3.jpg"

const project = () => {
  return (
    <>
      <Layout>
        <PageBanner bannerBG={PageBG} pageName="Project" />
        <RunningProjectSection />
        <CounterSection />
        <PortfolioSection />
        <CallToAction />
        <QuotationSection />
      </Layout>
    </>
  )
}

export default project
