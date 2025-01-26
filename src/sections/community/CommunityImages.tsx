import Image from "next/image";
import styles from "./CommunityImages.module.scss";

import CatLong from "public/assets/communities-images/cat-long.svg";
import CatSquare from "public/assets/communities-images/cat-square.svg";

const CommunityImages: React.FC<{
  srcs: string[];
  alts: string[];
}> = ({ srcs, alts }) => {
  return (
    <div className={styles.imageGrid}>
      <div className={`${styles.nextImageHolder} ${styles.pic1}`}>
        <Image
          src={srcs[0] ?? CatLong.src}
          alt={alts[0] ?? `Half Cat 1`}
          layout="fill"
        />
      </div>

      <div className={`${styles.nextImageHolder} ${styles.pic2}`}>
        <Image
          src={srcs[1] ?? CatLong.src}
          alt={alts[1] ?? `Half Cat 2`}
          layout="fill"
        />
      </div>

      <div className={`${styles.nextImageHolder} ${styles.pic3}`}>
        <Image
          src={srcs[2] ?? CatSquare.src}
          alt={alts[2] ?? `Square Cat`}
          layout="fill"
        />
      </div>

      <div className={`${styles.nextImageHolder} ${styles.pic4}`}>
        <Image
          src={srcs[3] ?? CatLong.src}
          alt={alts[3] ?? `Super Long Cat`}
          layout="fill"
        />
      </div>
    </div>
  );
};

export default CommunityImages;
