import Image from "next/image";
import RedBullet from "public/assets/sponsor-bullets/diamond-red.svg";
import TurquoiseBullet from "public/assets/sponsor-bullets/diamond-turquoise.svg";
import YellowBullet from "public/assets/sponsor-bullets/diamond-yellow.svg";
import PurpleBullet from "public/assets/sponsor-bullets/diamond-purple.svg";
import PinkBullet from "public/assets/sponsor-bullets/diamond-pink.svg";

const BenefitList: React.FC = () => {
  return (
    <div className="sponsorship__benefits__benefit-list">
      <div className="sponsorship__benefits__benefit-list__bullet">
        <img src={RedBullet.src} alt="red bullet" />
        <p>
          Access to our diverse and large member database to recruit talented
          UCSD students.
        </p>
      </div>
      <div className="sponsorship__benefits__benefit-list__bullet">
        <img src={TurquoiseBullet.src} alt="turquoise bullet" />
        <p>
          Opportunity to establish brand name and relationship with UCSD
          computing students by partnering with largest engineering org on
          campus.
        </p>
      </div>
      <div className="sponsorship__benefits__benefit-list__bullet">
        <img src={YellowBullet.src} alt="a Yellow bullet" />
        <p>
          Ability to expose students to different opportunities and unique life
          at their company.
        </p>
      </div>
      <div className="sponsorship__benefits__benefit-list__bullet">
        <img src={PurpleBullet.src} alt="a Purple bullet" />
        <p>
          Get to help and guide university students, especially those that are
          struggling to navigate the many diverse fields in computing.
        </p>
      </div>
      <div className="sponsorship__benefits__benefit-list__bullet">
        <img src={PinkBullet.src} alt="a Pink bullet" />
        <p>And much much more!</p>
      </div>
    </div>
  );
};
const SponsorshipBenefits: React.FC = () => {
  return (
    <section className="sponsorship__benefits">
      <h1 className="sponsorship__benefits__header">
        Benefits of Being a Sponsor
      </h1>
      <BenefitList />
      <span className="sponsorship__benefits__footer">
        Interested in hearing about how collaborating with us could benefit you?
        Feel free to reach out to us at&nbsp;
        <a href="mailto:sponsor@acmucsd.org">sponsor@acmucsd.org!</a>
      </span>
    </section>
  );
};

export default SponsorshipBenefits;
