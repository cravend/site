import React from "react"
import Profile from "../components/profile.js"
import "../components/css/header.scss"

export default () => (
  <div className="trapezoid">
    <div style={{ margin: "0 auto", maxWidth: 650, padding: "3rem 1rem" }}>
      <Profile />
      <div style={{ float: "right" }}>
        <h1 style={{ textTransform: "uppercase" }}>Dalton Craven</h1>
        <p style={{ textTransform: "lowercase" }}>Web developer, high school student</p>
      </div>
    </div>
  </div>
)
