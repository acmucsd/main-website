import React from 'react'
import './styles.less'
import HeroImage from '../../assets/about-images/about-hero.png'


const AboutHero: React.FC  = () => {
    return (
        <section className="about__hero">
            <section className="about__hero__description">
                <h1>What is ACM @ UCSD?</h1>
                <h3>We are the Association for Computing Machinery at UCSD! <br/><br/>We are an inclusive member-first community for all who are interested in the field of computing. We welcome all skill levels and majors to our events and activities!</h3>
            </section>
            <img src={HeroImage} alt="About Hero Image"/>
        </section>
    )
}

export default AboutHero
