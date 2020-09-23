import React from "react"
import CallToAction from "../components/CallToAction/CallToAction"
import CounterSection from "../components/CounterSection"
import Layout from "../components/Layout"
import PageBanner from "../components/PageBanner"
import QuotationSection from "../components/QuotationSection"
import ServicesSection from "../components/Services/ServicesSection"
import Teams from "../components/Teams/Teams"
import PageBG from "../images/bg/background-3.jpg"

const service = () => {
  return (
    <>
      <Layout>
        <PageBanner bannerBG={PageBG} pageName="Service" />
        <ServicesSection />
        <CounterSection />
        <Teams />
        <CallToAction />
        <QuotationSection />
      </Layout>
    </>
  )
}

export default service
