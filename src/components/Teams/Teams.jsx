import React from "react"
import SectionTitle from "../SectionTitle"
import TeamMember from "./TeamMember"

import Team1 from "../../images/team/team1.png"
import Team2 from "../../images/team/team2.png"
import Team3 from "../../images/team/team3.png"
import Team4 from "../../images/team/team4.png"

const Teams = () => {
  return (
    <>
      <section className="pad-t80 pad-b50">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <SectionTitle titleStyle="text-center" title="Team Member" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <TeamMember
                teamImage={Team1}
                name="John Snow"
                designation="CEO"
                fbLink="/"
                twitterLink="/"
                ytLink="/"
              />
            </div>
            <div className="col-md-3 col-sm-6">
              <TeamMember
                teamImage={Team2}
                name="John Snow"
                designation="CEO"
                fbLink="/"
                twitterLink="/"
                ytLink="/"
              />
            </div>
            <div className="col-md-3 col-sm-6">
              <TeamMember
                teamImage={Team3}
                name="John Snow"
                designation="CEO"
                fbLink="/"
                twitterLink="/"
                ytLink="/"
              />
            </div>
            <div className="col-md-3 col-sm-6">
              <TeamMember
                teamImage={Team4}
                name="John Snow"
                designation="CEO"
                fbLink="/"
                twitterLink="/"
                ytLink="/"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Teams
