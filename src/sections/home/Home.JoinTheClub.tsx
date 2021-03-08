import React from "react"
import "./styles.less"
import Number from "../../components/statistic"

const HomeJoinTheClub: React.FC = () => {
  return (
    <section className="home__join-the-club">
      <div className="home__join-the-club__grid">
        <div className="home__join-the-club__grid__header">
          <h1>Join the club.</h1>
          <p>
            ACM UCSD is inclusive community of students passionate about
            technology.
          </p>
        </div>
        <div className="home__join-the-club__grid__numbers">
          <Number
            color="#FF6F6F"
            description="members"
            extension="+"
            number={1000}
          />
          <Number
            color="#F9A857"
            description="events"
            extension="+"
            number={120}
          />
          <Number
            color="#51C0C0"
            description="cups of boba"
            extension="+"
            number={850}
          />
        </div>
      </div>
    </section>
  )
}

export default HomeJoinTheClub
