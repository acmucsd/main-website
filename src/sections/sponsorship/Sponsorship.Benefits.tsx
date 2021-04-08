import React from 'react'

const SponsorshipInfo: React.FC  = () => {
    return (
        <section className="sponsorship__benefits">
            <h2>Benefits of Being a Sponsor</h2>
            <ul>
                <li><span className="bullet red"></span>Access to our diverse and large member database</li>
                <li><span className="bullet turquoise"></span>Opportunity to establish brand name and relationship with UCSD computing students by partnering with largest engineering org on campus</li>
                <li><span className="bullet orange"></span>Ability to expose students to different opportunities and unique life at their company</li>
                <li><span className="bullet purple"></span>Get to help and guide university students, especially those that are struggling to navigate the many diverse fields in computing</li>
                <li><span className="bullet pink"></span>And much much more!</li>
            </ul>
            <p>Interested in hearing about how collaborating with us could benefit you?  Feel free to reach out to us at <a href="mailto:sponsor@acmucsd.org">sponsor@acmucsd.org!</a></p>
        </section>
    )
}

export default SponsorshipInfo
