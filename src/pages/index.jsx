import React from "react"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import AboutText from "../components/About-Text"
import ServicesSection from "../components/Services/ServicesSection"
import RunningProjectSection from "../components/RunningProject/RunningProjectSection"
import CounterSection from "../components/CounterSection"
import PortfolioSection from "../components/PortfolioSection"
import CallToAction from "../components/CallToAction/CallToAction"
import QuotationSection from "../components/QuotationSection"
import Teams from "../components/Teams/Teams"
import PiechartSection from "../components/PiechartSection"
import CallToAction2 from "../components/CallToAction/CallToAction2"
import LatestNews from "../components/LatestNews"

export default function Home() {
  return (
    <Layout>
      <Banner />
      <AboutText />
      <ServicesSection />
      <RunningProjectSection />
      <CounterSection />
      <PortfolioSection />
      <CallToAction />
      <Teams />
      <PiechartSection />
      <QuotationSection />
      <CallToAction2 />
      <LatestNews />
    </Layout>
  )
}
