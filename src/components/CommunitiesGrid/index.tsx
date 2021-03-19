import React from 'react'
import './style.less'

import AILogo from '../../assets/logos/acm-ai.svg'
import CyberLogo from '../../assets/logos/acm-cyber.svg'
import DesignLogo from '../../assets/logos/acm-design.svg'
import HackLogo from '../../assets/logos/acm-hack.svg'
import InnovateLogo from '../../assets/logos/acm-innovate.svg'

const CommunitiesGrid = () => {
    return (
        <div className="communitiesGrid">
                <a href="#" className="communitiesGrid__community">
                    <img src={AILogo} alt="ACM AI"/>
                    <div className="communitiesGrid__community__label">
                        <h3 className="ai"><span>ACM</span> AI</h3>
                    </div>
                </a>
                <a href="#" className="communitiesGrid__community">
                    <img src={CyberLogo} alt="ACM Cyber"/>
                    <div className="communitiesGrid__community__label">
                        <h3 className="cyber"><span>ACM</span> Cyber</h3>
                    </div>
                </a>
                <a href="#" className="communitiesGrid__community">
                    <img src={DesignLogo} alt="ACM Design"/>
                    <div className="communitiesGrid__community__label">
                        <h3 className="design"><span>ACM</span> Design</h3>
                        <p>Coming Soon</p>
                    </div>
                </a>
                <a href="#" className="communitiesGrid__community">
                    <img src={HackLogo} alt="ACM Hack"/>
                    <div className="communitiesGrid__community__label">
                        <h3 className="hack"><span>ACM</span> Hack</h3>
                    </div>
                </a>
                <a href="#" className="communitiesGrid__community">
                    <img src={InnovateLogo} alt="ACM Innovate"/>
                    <div className="communitiesGrid__community__label">
                        <h3 className="innovate"><span>ACM</span> Innovate</h3>
                    </div>
                </a>
            {/* <div className="communitiesGrid__row">
                <a href="#" className="communitiesGrid__row__community">
                    <img src={AILogo} alt="ACM AI"/>
                    <div className="communitiesGrid__row__community__label">
                        <h3 className="ai"><span>ACM</span> AI</h3>
                    </div>
                </a>
                <a href="#" className="communitiesGrid__row__community">
                    <img src={CyberLogo} alt="ACM Cyber"/>
                    <div className="communitiesGrid__row__community__label">
                        <h3 className="cyber"><span>ACM</span> Cyber</h3>
                    </div>
                </a>
                <a href="#" className="communitiesGrid__row__community">
                    <img src={DesignLogo} alt="ACM Design"/>
                    <div className="communitiesGrid__row__community__label">
                        <h3 className="design"><span>ACM</span> Design</h3>
                        <p>Coming Soon</p>
                    </div>
                </a>
            </div>
            <div className="communitiesGrid__row">
                <a href="#" className="communitiesGrid__row__community">
                    <img src={HackLogo} alt="ACM Hack"/>
                    <div className="communitiesGrid__row__community__label">
                        <h3 className="hack"><span>ACM</span> Hack</h3>
                    </div>
                </a>
                <a href="#" className="communitiesGrid__row__community">
                    <img src={InnovateLogo} alt="ACM Innovate"/>
                    <div className="communitiesGrid__row__community__label">
                        <h3 className="innovate"><span>ACM</span> Innovate</h3>
                    </div>
                </a>
            </div> */}
        </div>
    )
}

export default CommunitiesGrid
