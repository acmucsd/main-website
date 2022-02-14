import Image from "next/image";

const bullets = [
  {
    color: "red",
    description:
      "Access to our diverse and large member database to recruit talented UCSD students.",
  },
  {
    color: "turquoise",
    description:
      "Opportunity to establish brand name and relationship with UCSD computing students by partnering with largest engineering org on campus.",
  },
  {
    color: "yellow",
    description:
      "Ability to expose students to different opportunities and unique life at their company.",
  },
  {
    color: "purple",
    description:
      "Get to help and guide university students, especially those that are struggling to navigate the many diverse fields in computing.",
  },
  {
    color: "pink",
    description: "And much much more!",
  },
];

const BenefitList: React.FC = () => {
  return (
    <div className="sponsorship__benefits__benefit-list">
      {bullets.map(({ color, description }, key) => (
        <div
          key={`${color} bullet-${key}`}
          className="sponsorship__benefits__benefit-list__bullet"
        >
          <img
            src={`/assets/sponsor-bullets/diamond-${color}.svg`}
            alt={`${color} bullet`}
          />
          <p>{description}</p>
        </div>
      ))}
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
