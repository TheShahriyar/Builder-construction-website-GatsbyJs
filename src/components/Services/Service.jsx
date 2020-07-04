import React from "react"

const Service = ({ children, serviceColor, iconName, title }) => {
  return (
    <>
      <div className={`feature-2 ${serviceColor}`}>
        <div className="media">
          <div className="media-left">
            <div className="feature-icon text-center">
              <i className={`${iconName}`}></i>
            </div>
          </div>
          <div className="media-body">
            <a href="#">
              <h3 className="media-heading">{title}</h3>
            </a>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default Service
