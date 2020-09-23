import React from "react"

const TeamMember = ({
  teamImage,
  name,
  designation,
  fbLink,
  twitterLink,
  ytLink,
}) => {
  return (
    <>
      <div className="team-member-3">
        <div className="team-member-img">
          <img className="img-responsive" src={teamImage} alt="" />
        </div>
        <div className="team-info">
          <span className="team-name">{name}</span>
          <span className="team-designation">{designation}</span>
        </div>
        <div className="social-icon">
          <ul className="icon">
            <li>
              <a href={fbLink}>
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href={twitterLink}>
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href={ytLink}>
                <i className="fa fa-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default TeamMember
