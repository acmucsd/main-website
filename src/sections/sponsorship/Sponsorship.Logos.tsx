import { SponsorProps } from "src/types";

const SponsorshipLogos: React.FC<{ sponsors: SponsorProps[] }> = ({ sponsors }) => (
  <section className="sponsorship__logos">
    <h1 className="sponsorship__logos__header">Thank you to our current sponsors!</h1>
    <div className="sponsorship__logos__grid">
      {sponsors.map((sponsor, index) => (
        <a href={sponsor.url} key={`${sponsor.name}-${index}`}>
          <img src={sponsor.logo} alt={sponsor.name} />
        </a>
      ))}
    </div>
  </section>
);

export default SponsorshipLogos;
