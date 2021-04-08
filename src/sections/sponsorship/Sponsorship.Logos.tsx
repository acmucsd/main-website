import React from 'react'

import OptiverLogo from '../../assets/sponsors/optiver.png'
import CSELogo from '../../assets/sponsors/cse.png'
import TESCLogo from '../../assets/sponsors/tesc.png'

const SponsorshipLogos: React.FC  = () => {
    return (
        <section className="sponsorship__logos">
            <h2>Thank you to our current sponsors!</h2>
            <div className="sponsorship__logos__grid">
                <img src={OptiverLogo} alt="Optiver Logo"/>
                <img src={CSELogo} alt="CSE Logo" />
                <img src={TESCLogo} alt="TESC Logo" />
            </div>
        </section>
    )
}

export default SponsorshipLogos
