import React from "react"
import CountUp from "react-countup"

const CounterSection = () => {
  return (
    <>
      <section
        className="pad-t80 pad-b50"
        style={{ backgroundColor: "#f6d014" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3 col-sm-6">
                  <div className="animated-counter text-center white">
                    <div className="animated-number">
                      <CountUp end={125} duration={10} />
                    </div>
                    <h4>
                      Completed
                      <br />
                      Projects
                    </h4>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="animated-counter text-center white">
                    <div className="animated-number">
                      <CountUp end={8285} duration={10} />
                    </div>
                    <h4>
                      Coffee
                      <br />
                      Ordered
                    </h4>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="animated-counter text-center white">
                    <div className="animated-number">
                      <CountUp end={2245} duration={10} />
                    </div>
                    <h4>
                      Happy
                      <br />
                      Client
                    </h4>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="animated-counter text-center white">
                    <div className="animated-number">
                      <CountUp end={543} duration={10} />
                    </div>
                    <h4>
                      Completed
                      <br />
                      Projects
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CounterSection
