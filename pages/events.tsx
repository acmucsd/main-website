import { useEffect, useState } from "react";
import { Size, useWindowSize } from "src/utils";

import SEO from "src/components/SEO";

import HeroImage from "public/assets/about-images/about-hero.png";

const EventsPage: React.FC = () => {
  // TODO: Mobile responsiveness
  //   const size: Size = useWindowSize();
  //   const [isMobile, setIsMobile] = useState(false);

  //   useEffect(() => {
  //     setIsMobile((size.width || 0) <= 814);
  //   }, [size]);

  return (
    <>
      <SEO
        title="About"
        path="/about"
        description="We are the Association for Computing Machinery at UCSD! We are an inclusive member-first community for all who are interested in the field of computing. We welcome all skill levels and majors!"
        image={HeroImage.src}
      />
      <h1>Events Page</h1>
    </>
  );
};

export default EventsPage;
