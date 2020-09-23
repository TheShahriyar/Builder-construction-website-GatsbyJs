import React from "react"
import { PieChart } from "react-minimal-pie-chart"
import BG from "../images/bg/background-2.jpg"
import SectionTitle from "./SectionTitle"

const PiechartSection = () => {
  return (
    <>
      <section
        className="pad-t80 pad-b50 parallax"
        style={{
          backgroundImage: `url(${BG})`,
          backgroundPosition: "center center",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <SectionTitle titleStyle="text-center white" title="Our Skill" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="progress-chart-feature white">
                <PieChart
                  background="#f1f1f1"
                  animation
                  animationDuration={1000}
                  animationEasing="ease-out"
                  center={[50, 50]}
                  data={[
                    {
                      color: "#f1f1f1",
                      title: "One",
                      value: 25,
                    },
                    {
                      color: "#f6d014",
                      title: "Two",
                      value: 75,
                    },
                  ]}
                  lineWidth={10}
                  radius={30}
                  lengthAngle={360}
                  rounded
                />
                <h4>Analyse</h4>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="progress-chart-feature white">
                <PieChart
                  background="#f1f1f1"
                  animation
                  animationDuration={1000}
                  animationEasing="ease-out"
                  center={[50, 50]}
                  data={[
                    {
                      color: "#f1f1f1",
                      title: "One",
                      value: 5,
                    },
                    {
                      color: "#f6d014",
                      title: "Two",
                      value: 95,
                    },
                  ]}
                  lineWidth={10}
                  radius={30}
                  lengthAngle={360}
                  rounded
                />
                <h4>Design</h4>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="progress-chart-feature white">
                <PieChart
                  background="#f1f1f1"
                  animation
                  animationDuration={1000}
                  animationEasing="ease-out"
                  center={[50, 50]}
                  data={[
                    {
                      color: "#f1f1f1",
                      title: "One",
                      value: 20,
                    },
                    {
                      color: "#f6d014",
                      title: "Two",
                      value: 80,
                    },
                  ]}
                  lineWidth={10}
                  radius={30}
                  lengthAngle={360}
                  rounded
                />
                <h4>Develope</h4>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="progress-chart-feature white">
                <PieChart
                  background="#f1f1f1"
                  animation
                  animationDuration={1000}
                  animationEasing="ease-out"
                  center={[50, 50]}
                  data={[
                    {
                      color: "#f1f1f1",
                      title: "One",
                      value: 15,
                    },
                    {
                      color: "#f6d014",
                      title: "Two",
                      value: 85,
                    },
                  ]}
                  lineWidth={10}
                  radius={30}
                  lengthAngle={360}
                  rounded
                />
                <h4>Responsibility</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PiechartSection
