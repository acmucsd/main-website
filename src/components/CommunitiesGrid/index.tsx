import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AILogo from "public/assets/logos/acm-ai.svg";
import CyberLogo from "public/assets/logos/acm-cyber.svg";
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
              className={`communitiesGrid__community ${hasBeenVisible ? "ai--visible" : ""
                }`}
            >
              <img src={AILogo.src} alt="ACM AI" />
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
              className={`communitiesGrid__community ${hasBeenVisible ? "cyber--visible" : ""
                }`}
            >
              <img src={CyberLogo.src} alt="ACM Cyber" />
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
              className={`communitiesGrid__community ${hasBeenVisible ? "hack--visible" : ""
                }`}
            >
              <img src={HackLogo.src} alt="ACM Hack" />
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
              className={`communitiesGrid__community ${hasBeenVisible ? "innovate--visible" : ""
                }`}
            >
              <img src={InnovateLogo.src} alt="ACM Innovate" />
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
      <div className="communityGridWrapper">
        <div className="communitiesGrid">
          <Link href="/communities#AI">
            <a
              className={`communitiesGrid__community ${hasBeenVisible ? "ai--visible" : ""
                }`}
            >
              <img src={AILogo.src} alt="ACM AI" />
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
              className={`communitiesGrid__community ${hasBeenVisible ? "cyber--visible" : ""
                }`}
            >
              <img src={CyberLogo.src} alt="ACM Cyber" />
              <div className="communitiesGrid__community__label">
                <h3>
                  <span>ACM</span> Cyber
                </h3>
                <p>Cyber Security</p>
              </div>
            </a>
          </Link>
          <Link href="/communities#Hack">
            <a
              className={`communitiesGrid__community ${hasBeenVisible ? "hack--visible" : ""
                }`}
            >
              <img src={HackLogo.src} alt="ACM Hack" />
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
              className={`communitiesGrid__community ${hasBeenVisible ? "innovate--visible" : ""
                }`}
            >
              <img src={InnovateLogo.src} alt="ACM Innovate" />
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
  }
};

CommunitiesGrid.defaultProps = defaultProps;
export default CommunitiesGrid;
