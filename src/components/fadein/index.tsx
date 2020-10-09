import React from 'react';

import './style.less';

interface FadeInProps {
  children: React.ReactNode;
}

const FadeIn: React.FC<FadeInProps> = ({ children }) => {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef(null);
  React.useEffect(() => {
    const currentDom = domRef.current;
    if (!currentDom) {
      return undefined;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      });
    });
    observer.observe(currentDom);
    return undefined;
  }, []);
  return (
    <div className={`fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
      {children}
    </div>
  );
};

export default FadeIn;
