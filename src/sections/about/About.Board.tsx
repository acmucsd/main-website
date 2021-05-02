import React from "react"
import "./styles.less"
import BoardCard from "../../components/BoardCard/BoardCard.tsx"
const AboutBoard: React.FC = () => {
  return (
    <section className="about__board">
      <BoardCard />
    </section>
  )
}

export default AboutBoard
