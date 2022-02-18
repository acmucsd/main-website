import { useEffect, useState } from "react";

import Arrow from "public/assets/arrow.svg";

const ScrollDownArrow = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY !== 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <img
      className={`arrow ${scrolled ? 'hide' : 'show'}`}
      alt="Scroll Arrow"
      onClick={() =>
        window.scrollBy({
          top: window.innerHeight - 78,
        })
      }
      src={Arrow.src}
    />
  );
};

export default ScrollDownArrow;
