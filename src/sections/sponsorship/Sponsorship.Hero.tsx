import React from 'react'
import './styles.less'

import SponsorImage from '../../assets/sponsors.png'

const SponsorshipInfo: React.FC  = () => {
    return (
        <section className="sponsorship__hero">
            <img src={SponsorImage} alt="Sponsorship" />
            <div className="sponsorship__hero__header">
                <h1>Sponsor</h1>
                <img src={SponsorImage} alt="Sponsorship" />
                <h2>
                    Impact a community of 1000+ aspiring <span className="blue">developers</span>, <span className="pink">designers</span>, and <span className="purple">innovators</span>!
                </h2>
            </div>
            
        </section>
    )
}

export default SponsorshipInfo
