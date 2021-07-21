import React from "react"
import "./styles.less"
import RedBullet from "../../assets/sponsor-bullets/diamond-red.svg"
import TurquoiseBullet from "../../assets/sponsor-bullets/diamond-turquoise.svg"
import YellowBullet from "../../assets/sponsor-bullets/diamond-yellow.svg"
import PurpleBullet from "../../assets/sponsor-bullets/diamond-purple.svg"
import PinkBullet from "../../assets/sponsor-bullets/diamond-pink.svg"

const BenefitList: React.FC = () => {
  return (
    <div className="sponsorship__benefits__benefit-list">
      <div className="sponsorship__benefits__benefit-list__bullet">
        <img src={RedBullet} />
        <p>
          Access to our diverse and large member database to recruit talented
          UCSD students.
        </p>
      </div>
      <div className="sponsorship__benefits__benefit-list__bullet">
        <img src={TurquoiseBullet} />
        <p>
          Opportunity to establish brand name and relationship with UCSD
          computing students by partnering with largest engineering org on
          campus.
        </p>
      </div>
      <div className="sponsorship__benefits__benefit-list__bullet">
        <img src={YellowBullet} />
        <p>
          Ability to expose students to different opportunities and unique life
          at their company.
        </p>
      </div>
      <div className="sponsorship__benefits__benefit-list__bullet">
        <img src={PurpleBullet} />
        <p>
          Get to help and guide university students, especially those that are
          struggling to navigate the many diverse fields in computing.
        </p>
      </div>
      <div className="sponsorship__benefits__benefit-list__bullet">
        <img src={PinkBullet} />
        <p>And much much more!</p>
      </div>
    </div>
  )
}
const SponsorshipBenefits: React.FC = () => {
  return (
    <section className="sponsorship__benefits">
      <h1 className="sponsorship__benefits__header">
        Benefits of Being a Sponsor
      </h1>
      <BenefitList />
      <span className="sponsorship__benefits__footer">
        Interested in hearing about how collaborating with us could benefit you?
        Feel free to reach out to us at{" "}
        <a href="mailto:sponsor@acmucsd.org">sponsor@acmucsd.org!</a>
      </span>
    </section>
  )
}

export default SponsorshipBenefits
