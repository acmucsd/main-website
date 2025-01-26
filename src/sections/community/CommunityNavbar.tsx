import { ReactNode, useState } from "react";
import styles from "./CommunityNavbar.module.scss";

interface CommunityNavbarProps {
  communities: ReactNode;
  initiatives: ReactNode;
}

const CommunityNavbar = ({
  communities,
  initiatives,
}: CommunityNavbarProps) => {
  const [activeLink, setActiveLink] = useState<"communities" | "initiatives">(
    "communities"
  );

  return (
    <section className={styles.hero}>
      <div className={styles.toggle}>
        <h3>
          <a
            className={`${activeLink === "communities" ? styles.active : ""}`}
            onClick={() => setActiveLink("communities")}
          >
            Communities
          </a>
        </h3>
        <h3>
          <a
            className={`${activeLink === "initiatives" ? styles.active : ""}`}
            onClick={() => setActiveLink("initiatives")}
          >
            Initiatives
          </a>
        </h3>
      </div>
      <p>
        ACM at UCSD is one large community, but it is made up of several smaller
        communities focused on specific areas of technology.
      </p>
      {activeLink === "communities" && (
        <section className={styles.navigator}>{communities}</section>
      )}
      {activeLink === "initiatives" && (
        <section className={styles.navigator}>{initiatives}</section>
      )}
    </section>
  );
};

export default CommunityNavbar;
