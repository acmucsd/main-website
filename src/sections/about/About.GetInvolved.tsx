import React from 'react'
import './styles.less'

import CommunitiesGrid from '../../components/CommunitiesGrid'

import AboutSocial from '../../assets/about-images/about-social.png'
import AboutCommunities from '../../assets/about-images/about-communities.png'
import AboutBitByte from '../../assets/about-images/about-bitbyte.png'
import AboutProjects from '../../assets/about-images/about-projects.png'

import AILogo from '../../assets/logos/acm-ai.svg'
import CyberLogo from '../../assets/logos/acm-cyber.svg'
import DesignLogo from '../../assets/logos/acm-design.svg'
import HackLogo from '../../assets/logos/acm-hack.svg'
import InnovateLogo from '../../assets/logos/acm-innovate.svg'


import DiscordLogo from '../../assets/discord-dark.svg'
import FacebookLogo from '../../assets/facebook-dark.svg'
import LinkedinLogo from '../../assets/linkedin-dark.svg'

const AboutGetInvolved: React.FC<{ isMobile: boolean }>  = ({isMobile}) => {
    return (
        <section className="about__get-involved">
            <h2>How can I get involved?</h2>
            <div className="about__get-involved__section">
                {!isMobile && <img src={AboutSocial} alt=""/>}
                <div className="about__get-involved__section__description">
                    <h3 className="purple">Connect with us on Social Media</h3>
                    {isMobile && <img src={AboutSocial} alt=""/>}
                    {!isMobile && <p>To keep up with what's happening, we recommend joining our discord server, following our Facebook and Instagram. </p>}
                    <div className="about__get-involved__section__description__links">
                        <a href=""><img src={DiscordLogo} alt="Discord Logo"/></a>
                        <a href=""><img src={FacebookLogo} alt="Facebook Logo"/></a>
                        <a href=""><img src={LinkedinLogo} alt="Linkedin Logo"/></a>
                    </div>
                    <form>
                        <label>Subscribe to our Newsletter!</label>
                        <input
                            type="text"
                            id="emailinput"
                            name="fname"
                            placeholder="my@email.com"
                        />
                        <button>Subscribe!</button>
                    </form>
                </div>
            </div>
            <div className="about__get-involved__section">
                {!isMobile && <img src={AboutCommunities} alt=""/>}
                <div className="about__get-involved__section__description">
                    <h3 className="orange">Join our Communities</h3>
                    {isMobile && <img src={AboutCommunities} alt=""/>}
                    <p>ACM @ UCSD is one large community, but it is made up of several smaller communities focused on specific areas of technology.</p>
                    {!isMobile && <CommunitiesGrid verticalLayout/>}
                </div>
                {
                    isMobile &&
                    <div className="about__get-involved__section__communities--mobile">
                        <div>
                            <a href=""><img src={HackLogo} alt="ACM Hack Logo"/></a>
                            <a href=""><img src={InnovateLogo} alt="ACM Innovate Logo"/></a>
                        </div>
                        <div>
                            <a href=""><img src={AILogo} alt="ACM AI Logo"/></a>
                            <a href=""><img src={CyberLogo} alt="ACM Cyber Logo"/></a>
                            <a href=""><img src={DesignLogo} alt="ACM Design Logo"/></a>
                        </div>
                    </div>
                }
            </div>

            <div className="about__get-involved__section">
                {!isMobile && <img src={AboutBitByte} alt=""/>}
                <div className="about__get-involved__section__description">
                    <h3 className="blue">Become a mentor/mentee!</h3>
                    {isMobile && <img src={AboutBitByte} alt=""/>}
                    <p>Join ACM’s Bit-Byte program that pairs students to make lifelong friendships! Our upperclassmen bigs (bytes) help their littles (bits) grow in their academic, social and professional lives.</p>
                    <br/>
                    <p>Apply before date: <a href="#">some_application_link</a></p>
                </div>
            </div>
            <div className="about__get-involved__section">
                {!isMobile && <img src={AboutProjects} alt=""/>}
                <div className="about__get-involved__section__description">
                    <h3 className="pink">Participate in ACM Projects!</h3>
                    {isMobile && <img src={AboutProjects} alt=""/>}
                    <p>Sign up to join a team in our quarter-long projects program to grow your skills in coding, design, or project management.</p>
                    <br/>
                    <p>Check out these exciting projects!</p>
                    <a href="#">github.com/acmucsd-projects</a>
                </div>
            </div>
        </section>
    )
}

export default AboutGetInvolved
