import Link from "next/link";
import Image from "next/image";
import AILogo from "public/assets/logos/acm-ai.svg";
import CyberLogo from "public/assets/logos/acm-cyber.svg";
import HackLogo from "public/assets/logos/acm-hack.svg";
import InnovateLogo from "public/assets/logos/acm-innovate.svg";

const communities = [
  {
    org: "ai",
    subtitle: "Artificial Intelligence",
    hash: "AI",
  },
  {
    org: "cyber",
    subtitle: "Cyber Security",
    hash: "Cyber",
  },
  {
    org: "hack",
    subtitle: "Software Engineering",
    hash: "Hack",
  },
  {
    org: "innovate",
    subtitle: "Entrepreneurship",
    hash: "Innovate",
  },
];

const CommunitiesGrid: React.FC = () => {
  return (
    <div className="communityGridWrapper">
      <div className="communitiesGrid">
        {communities.map(({ org, subtitle, hash }, key) => (
          <Link key={`${org}-link`} href={`/communities#${hash}`}>
            <a className={`communitiesGrid__community ${org}--visible`}>
              <img src={`/assets/logos/acm-${org}.svg`} alt={`ACM ${hash}`} />
              <div className="communitiesGrid__community__label">
                <h3>
                  <span>ACM</span> {hash}
                </h3>
                <p>{subtitle}</p>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CommunitiesGrid;
