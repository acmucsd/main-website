import React from 'react'
import './style.less'

import AILogo from '../../assets/logos/acm-ai.svg'
import CyberLogo from '../../assets/logos/acm-cyber.svg'
import DesignLogo from '../../assets/logos/acm-design.svg'
import HackLogo from '../../assets/logos/acm-hack.svg'
import InnovateLogo from '../../assets/logos/acm-innovate.svg'

const CommunitiesGrid = () => {
    const [isVisible, setVisible] = React.useState(false);
    // const domRef = React.useRef(null);
    // React.useEffect(() => {
    //   const currentDom = domRef.current;
    //   if (!currentDom) {
    //     return undefined;
    //   }
    //   const observer = new IntersectionObserver((entries) => {
    //     entries.forEach((entry) => {
    //       if (entry.isIntersecting) {
    //         setVisible(true);
    //       }
    //     });
    //   });
    //   observer.observe(currentDom);
    //   return undefined;
    // }, []);
  

    return (
        <div className="communitiesGrid">
            <a href="#" className={`communitiesGrid__community ai visible`}>
                <img src={AILogo} alt="ACM AI"/>
                <div className="communitiesGrid__community__label">
                    <h3><span>ACM</span> AI</h3>
                </div>
            </a>
            <a href="#" className={`communitiesGrid__community cyber visible`}>
                <img src={CyberLogo} alt="ACM Cyber"/>
                <div className="communitiesGrid__community__label">
                    <h3><span>ACM</span> Cyber</h3>
                </div>
            </a>
            <a href="#" className={`communitiesGrid__community design visible`}>
                <img src={DesignLogo} alt="ACM Design"/>
                <div className="communitiesGrid__community__label">
                    <h3><span>ACM</span> Design</h3>
                    <p>Coming Soon</p>
                </div>
            </a>
            <a href="#" className={`communitiesGrid__community hack visible`}>
                <img src={HackLogo} alt="ACM Hack"/>
                <div className="communitiesGrid__community__label">
                    <h3><span>ACM</span> Hack</h3>
                </div>
            </a>
            <a href="#" className={`communitiesGrid__community innovate visible`}>
                <img src={InnovateLogo} alt="ACM Innovate"/>
                <div className="communitiesGrid__community__label">
                    <h3><span>ACM</span> Innovate</h3>
                </div>
            </a>
        </div>
    )
}

export default CommunitiesGrid
