import "src/styles/colors.scss";
import "src/styles/index.css";
import "src/styles/mixins.scss";
// component css imports
import "src/components/BoardCard/style.scss";
import "src/components/BoardGrid/style.scss";
import "src/components/Button/style.scss";
import "src/components/CommunitiesGrid/style.scss";
import "src/components/Footer/style.scss";
import "src/components/Layout/style.scss";
import "src/components/NavigationBar/style.scss";
import "src/components/Statistic/style.scss";
// section css imports
import "src/sections/about/styles.scss";
import "src/sections/community/styles.scss";
import "src/sections/home/styles.scss";
import "src/sections/sponsorship/styles.scss";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
