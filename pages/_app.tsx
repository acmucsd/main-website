import "src/styles/colors.scss";
import "src/styles/index.css";
import "src/styles/mixins.scss";
import "src/styles/reset.scss";
// component css imports
import "src/components/BoardCard/style.scss";
import "src/components/BoardGrid/style.scss";
import "src/components/Button/style.scss";
import "src/components/CommunitiesGrid/style.scss";
import "src/components/Footer/style.scss";
import "src/components/NavigationBar/style.scss";
import "src/components/Statistic/style.scss";
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
        padding: `81px 0`,
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
