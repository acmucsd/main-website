import Image from "next/image";
import OptiverImg from "public/assets/sponsor-images/optiver_logo.png";
import CSEImg from "public/assets/sponsor-images/CSE_logo.png";
import TESCImg from "public/assets/sponsor-images/tesc_logo.png";
import RobinhoodImg from "public/assets/sponsor-images/robinhood_logo.png";
import GearImg from "public/assets/sponsor-images/gear_logo.png";
import LockheedMartin from "public/assets/sponsor-images/lockheed_martin_logo.png";
import Roblox from "public/assets/sponsor-images/roblox.svg";
import JaneStreet from "public/assets/sponsor-images/jane_street.png";

const SponsorshipLogos: React.FC = () => {
  return (
    <section className="sponsorship__logos">
      <h1 className="sponsorship__logos__header">Thank you to our current sponsors!</h1>
      <div className="sponsorship__logos__img-grid">
        <a href="https://gear-tech.io/">
          <img src={GearImg.src} alt="Gear" />
        </a>
        <a href="https://www.lockheedmartin.com/">
          <img src={LockheedMartin.src} alt="Lockheed Martin" />
        </a>
      </div>
      <div className="sponsorship__logos__img-grid">
        <a href="https://www.optiver.com/">
          <img src={OptiverImg.src} alt="Optiver" />
        </a>
        <a href="https://www.robinhood.com/">
          <img src={RobinhoodImg.src} alt="Robinhood" />
        </a>
      </div>
      <div className="sponsorship__logos__img-grid">
        <a href="https://cse.ucsd.edu/">
          <img src={CSEImg.src} alt="CSE" />
        </a>
        <a href="https://tesc.ucsd.edu/">
          <img src={TESCImg.src} alt="TESC" />
        </a>
      </div>
      <div className="sponsorship__logos__img-grid">
        <a href="https://www.roblox.com/">
          <img src={Roblox.src} alt="Roblox" />
        </a>
        <a href="https://www.janestreet.com/">
          <img src={JaneStreet.src} alt="Jane Street" />
        </a>
      </div>
    </section>
  );
};

export default SponsorshipLogos;
