import CommunityImages from "./CommunityImages";
import styles from "./CommunityDescription.module.scss";
import Image from "next/image";

const CommunityDescription: React.FC<{
  org: string;
  colorClass: string;
  links: { src: string; logo: string; alt: string }[];
  description: React.ReactNode; // Input is HTML
  srcs: string[];
  alts: string[];
}> = ({ colorClass, org, links, description, srcs, alts }) => {
  return (
    <div className={`${styles.communityCard} ${colorClass}`} id={org}>
      <div className={`${styles.content}`}>
        <div className={styles.descHolder}>
          <div className={styles.header}>
            <h1>ACM {org}</h1>
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

        <CommunityImages srcs={srcs} alts={alts} />
      </div>
      <div className={styles.blob} />
    </div>
  );
};

export default CommunityDescription;
