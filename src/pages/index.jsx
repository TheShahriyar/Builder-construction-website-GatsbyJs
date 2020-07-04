import React from "react"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import AboutText from "../components/About-Text"
import ServicesSection from "../components/Services/ServicesSection"

export default function Home() {
  return (
    <Layout>
      <Banner />
      <AboutText />
      <ServicesSection />
    </Layout>
  )
}
