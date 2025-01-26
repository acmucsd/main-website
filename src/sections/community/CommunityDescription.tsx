import CommunityImages from "./CommunityImages";
import styles from "./CommunityDescription.module.scss";
import Image from "next/image";

const CommunityDescription: React.FC<{
  org: string;
  color: string;
  isMobile: boolean;
  links: { src: string; logo: string; alt: string }[];
  description: React.ReactNode; // Input is HTML
  srcs: string[];
  alts: string[];
}> = ({ isMobile, color, org, links, description, srcs, alts }) => {
  return (
    <div className={styles.communityCard} id={org}>
      <div className={`${styles.colorSlide} ${styles[`${color}bg`]}`} />
      <div className={`${styles.content} ${isMobile ? styles.mobile : ""}`}>
        {isMobile ? null : <CommunityImages srcs={srcs} alts={alts} />}
        <div className={styles.descHolder}>
          <div className={styles.header}>
            <h1 className={styles[color]}>ACM {org}</h1>
            <div className={styles.communityLinks}>
              {links.map((link, index) => (
                <a key={`${link}-${index}`} href={link.src}>
                  <Image
                    src={link.logo}
                    alt={link.alt}
                    layout="fill"
                    objectFit="contain"
                  />
                </a>
              ))}
            </div>
          </div>
          {description}
        </div>

        {
          // Mobile images go below description
          isMobile ? <CommunityImages srcs={srcs} alts={alts} /> : null
        }
      </div>
    </div>
  );
};

export default CommunityDescription;
