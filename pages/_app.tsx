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

import { useEffect } from 'react'
import { useRouter } from 'next/router'
import NavigationBar from "src/components/NavigationBar";
import Footer from "src/components/Footer";
import * as ga from "src/utils/analytics"


const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
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
}

export default MyApp;
