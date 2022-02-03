import "../styles/colors.scss";
import '../styles/index.css'
import "../styles/mixins.scss";
// component css imports
import "../components/BoardCard/style.scss"
import "../components/BoardGrid/style.scss"
import "../components/Button/style.scss"
import "../components/CommunitiesGrid/style.scss"
import "../components/Footer/style.scss"
import "../components/Layout/style.scss"
import "../components/NavigationBar/style.scss"
import "../components/Statistic/style.scss"
// section css imports
import "../sections/about/styles.scss"
import "../sections/community/styles.scss"
import "../sections/home/styles.scss"
import "../sections/sponsorship/styles.scss"


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
