import "src/styles/colors.scss";
import "src/styles/index.css";
import "src/styles/mixins.scss";
import "src/styles/reset.scss";
// component css imports
import "src/components/BoardCard/styles.scss";
import "src/components/BoardGrid/styles.scss";
import "src/components/Button/styles.scss";
import "src/components/CommunitiesGrid/styles.scss";
import "src/components/Footer/styles.scss";
import "src/components/ScrollDownArrow/styles.scss";
import "src/components/Statistic/styles.scss";
// section css imports
import "src/sections/about/styles.scss";
import "src/sections/community/styles.scss";
import "src/sections/home/styles.scss";
import "src/sections/sponsorship/styles.scss";

import NavigationBar from "src/components/NavigationBar";
import Footer from "src/components/Footer";

const MyApp = ({ Component, pageProps }) => (
  <>
    <NavigationBar />

    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        minHeight: 960,
        padding: `85px 0`,
      }}
    >
      <main>
        <Component {...pageProps} />
      </main>
    </div>
    <Footer />
  </>
);

export default MyApp;
