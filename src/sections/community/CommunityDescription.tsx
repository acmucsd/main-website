import CommunityImages from "./CommunityImages";
import styles from "./CommunityDescription.module.scss";
import Image from "next/image";

const CommunityDescription: React.FC<{
  id: string;
  name: string;
  subtitle: string;
  colorClass: string;
  links: { src: string; logo: string; alt: string }[];
  description: React.ReactNode; // Input is HTML
  srcs: string[];
  alts: string[];
}> = ({ colorClass, id, name, subtitle, links, description, srcs, alts }) => {
  return (
    <div
      className={`community-description ${styles.communityCard} ${colorClass}`}
      id={id}
    >
      <div className={`${styles.content}`}>
        <div className={styles.descHolder}>
          <div>
            <h3 className={styles.title}>{name}</h3>
            <p className={styles.subtitle}>{subtitle}</p>
          </div>
          {description}
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

        <CommunityImages srcs={srcs} alts={alts} />
      </div>
      <div className={styles.blob} />
    </div>
  );
};

export default CommunityDescription;
