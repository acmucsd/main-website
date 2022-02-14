import Image from "next/image";

const sponsors = [
  {
    img: "/assets/sponsor-images/gear_logo.png",
    href: "https://gear-tech.io/",
    alt: "Gear",
  },
  {
    img: "/assets/sponsor-images/optiver_logo.png",
    href: "https://www.optiver.com/",
    alt: "Optiver",
  },
  {
    img: "/assets/sponsor-images/robinhood_logo.png",
    href: "https://www.robinhood.com/",
    alt: "Robinhood",
  },
  {
    img: "/assets/sponsor-images/CSE_logo.png",
    href: "https://cse.ucsd.edu/",
    alt: "CSE",
  },
  {
    img: "/assets/sponsor-images/tesc_logo.png",
    href: "https://tesc.ucsd.edu/",
    alt: "TESC",
  },
];

const SponsorshipLogos: React.FC = () => {
  return (
    <section className="sponsorship__logos">
      <h1 className="sponsorship__logos__header">
        Thank you to our current sponsors!
      </h1>
      <div className="sponsorship__logos__img-container">
        {sponsors.map(({ img, href, alt }, key) => (
          <a key={`${alt}-${key}`} href={href}>
            <img src={img} alt={alt} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default SponsorshipLogos;
