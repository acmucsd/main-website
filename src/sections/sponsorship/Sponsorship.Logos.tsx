import Image from "next/image";
import OptiverImg from "public/assets/sponsor-images/optiver_logo.png";
import CSEImg from "public/assets/sponsor-images/CSE_logo.png";
import TESCImg from "public/assets/sponsor-images/tesc_logo.png";
import RobinhoodImg from "public/assets/sponsor-images/robinhood_logo.png";
import GearImg from "public/assets/sponsor-images/gear_logo.png";

const SponsorshipLogos: React.FC = () => {
  return (
    <section className="sponsorship__logos">
      <h1 className="sponsorship__logos__header">
        Thank you to our current sponsors!
      </h1>
      <div className="sponsorship__logos__img-grid">
        <a href="https://gear-tech.io/">
          <Image src={GearImg} alt="Gear" />
        </a>
      </div>
      <div className="sponsorship__logos__img-grid">
        <a href="https://www.optiver.com/">
          <Image src={OptiverImg} alt="Optiver" />
        </a>
        <a href="https://www.robinhood.com/">
          <Image src={RobinhoodImg} alt="Robinhood" />
        </a>
      </div>
      <div className="sponsorship__logos__img-grid">
        <a href="https://cse.ucsd.edu/">
          <Image src={CSEImg} alt="CSE" />
        </a>
        <a href="https://tesc.ucsd.edu/">
          <Image src={TESCImg} alt="TESC" />
        </a>
      </div>
    </section>
  );
};

export default SponsorshipLogos;
