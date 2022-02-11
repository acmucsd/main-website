import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AILogo from "public/assets/logos/acm-ai.svg";
import CyberLogo from "public/assets/logos/acm-cyber.svg";
import DesignLogo from "public/assets/logos/acm-design.svg";
import HackLogo from "public/assets/logos/acm-hack.svg";
import InnovateLogo from "public/assets/logos/acm-innovate.svg";

interface CommunitiesGridProps {
  verticalLayout?: boolean;
  colLayout?: boolean;
}

const defaultProps: CommunitiesGridProps = {
  verticalLayout: false,
  colLayout: false,
};

const CommunitiesGrid: React.FC<CommunitiesGridProps> = ({
  verticalLayout,
  colLayout,
}) => {
  const [hasBeenVisible, setHasBeenVisible] = useState(true);

  if (colLayout) {
    return (
      <div className="colWrapper">
        <div
          className={
            verticalLayout ? "communitiesGrid vertical" : "communitiesGrid"
          }
        >
          <Link href="/communities#AI">
            <a
              className={`communitiesGrid__community ${
                hasBeenVisible ? "ai--visible" : " "
              }`}
            >
              <Image src={AILogo} alt="ACM AI" />
              <div className="communitiesGrid__community__label">
                <h3>
                  <span>ACM</span> AI
                </h3>
                <p>Artificial Intelligence</p>
              </div>
            </a>
          </Link>
          <Link href="/communities#Cyber">
            <a
              className={`communitiesGrid__community ${
                hasBeenVisible ? "cyber--visible" : " "
              }`}
            >
              <Image src={CyberLogo} alt="ACM Cyber" />
              <div className="communitiesGrid__community__label">
                <h3>
                  <span>ACM</span> Cyber
                </h3>
                <p>Cyber Security</p>
              </div>
            </a>
          </Link>
        </div>
        <div className="communitiesGrid">
          <Link href="/communities#Hack">
            <a
              className={`communitiesGrid__community ${
                hasBeenVisible ? "hack--visible" : " "
              }`}
            >
              <Image src={HackLogo} alt="ACM Hack" />
              <div className="communitiesGrid__community__label">
                <h3>
                  <span>ACM</span> Hack
                </h3>
                <p>Software Engineering</p>
              </div>
            </a>
          </Link>
          <Link href="/communities#Innovate">
            <a
              className={`communitiesGrid__community ${
                hasBeenVisible ? "innovate--visible" : " "
              }`}
            >
              <img src={InnovateLogo} alt="ACM Innovate" />
              <div className="communitiesGrid__community__label">
                <h3>
                  <span>ACM</span> Innovate
                </h3>
                <p>Entrepreneurship</p>
              </div>
            </a>
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className="communitiesGrid">
        <Link href="/communities#AI">
          <a
            className={`communitiesGrid__community ${
              hasBeenVisible ? "ai--visible" : " "
            }`}
          >
            <Image src={AILogo} alt="ACM AI" />
            <div className="communitiesGrid__community__label">
              <h3>
                <span>ACM</span> AI
              </h3>
              <p>Artificial Intelligence</p>
            </div>
          </a>
        </Link>
        <Link href="/communities#Cyber">
          <a
            className={`communitiesGrid__community ${
              hasBeenVisible ? "cyber--visible" : " "
            }`}
          >
            <Image src={CyberLogo} alt="ACM Cyber" />
            <div className="communitiesGrid__community__label">
              <h3>
                <span>ACM</span> Cyber
              </h3>
              <p>Cyber Security</p>
            </div>
          </a>
        </Link>
        <Link href="/communities#Design">
          <a
            className={`communitiesGrid__community ${
              hasBeenVisible ? "design--visible" : " "
            }`}
          >
            <Image src={DesignLogo} alt="ACM Design" />
            <div className="communitiesGrid__community__label">
              <h3>
                <span>ACM</span> Design
              </h3>
              <p>Design and Interaction</p>
            </div>
          </a>
        </Link>
        <Link href="/communities#Hack">
          <a
            className={`communitiesGrid__community ${
              hasBeenVisible ? "hack--visible" : " "
            }`}
          >
            <Image src={HackLogo} alt="ACM Hack" />
            <div className="communitiesGrid__community__label">
              <h3>
                <span>ACM</span> Hack
              </h3>
              <p>Software Engineering</p>
            </div>
          </a>
        </Link>
        <Link href="/communities#Innovate">
          <a
            className={`communitiesGrid__community ${
              hasBeenVisible ? "innovate--visible" : " "
            }`}
          >
            <Image src={InnovateLogo} alt="ACM Innovate" />
            <div className="communitiesGrid__community__label">
              <h3>
                <span>ACM</span> Innovate
              </h3>
              <p>Entrepreneurship</p>
            </div>
          </a>
        </Link>
      </div>
    );
  }
};

CommunitiesGrid.defaultProps = defaultProps;
export default CommunitiesGrid;
