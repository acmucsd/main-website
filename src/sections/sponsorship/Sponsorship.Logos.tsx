import React from "react"
import "./styles.less"

import OptiverImg from "../../assets/sponsor-images/optiver_logo.png"
import CSEImg from "../../assets/sponsor-images/CSE_logo.png"
import TESCImg from "../../assets/sponsor-images/tesc_logo.png"
const SponsorshipLogos: React.FC = () => {
  return (
    <section className="sponsorship__logos">
      <h1 className="sponsorship__logos__header">
        Thank you to our current sponsors!
      </h1>
      <div className="sponsorship__logos__img-grid">
        <img src={OptiverImg} alt="Optiver" id="first" />
      </div>
      <div className="sponsorship__logos__img-grid">
        <img src={CSEImg} alt="CSE" />
        <img src={TESCImg} alt="TESC" />
      </div>
    </section>
  )
}

export default SponsorshipLogos
