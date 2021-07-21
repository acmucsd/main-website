import React, { useState, useEffect } from "react"
import "./styles.less"
import BoardGrid from "../../components/BoardGrid"

import AllBoardSelected from "../../assets/board-filters/all-board-selected.svg"
import AllBoardEmpty from "../../assets/board-filters/all-board-empty.svg"

import AISelected from "../../assets/board-filters/ai-selected.svg"
import AIEmpty from "../../assets/board-filters/ai-empty.svg"

import GeneralSelected from "../../assets/board-filters/general-selected.svg"
import GeneralEmpty from "../../assets/board-filters/general-empty.svg"

import CyberSelected from "../../assets/board-filters/cyber-selected.svg"
import CyberEmpty from "../../assets/board-filters/cyber-empty.svg"

import HackSelected from "../../assets/board-filters/hack-selected.svg"
import HackEmpty from "../../assets/board-filters/hack-empty.svg"

import DesignSelected from "../../assets/board-filters/design-selected.svg"
import DesignEmpty from "../../assets/board-filters/design-empty.svg"

import InnovateSelected from "../../assets/board-filters/innovate-selected.svg"
import InnovateEmpty from "../../assets/board-filters/innovate-empty.svg"

import BoardData from "../../board-data.json"
const members_list = BoardData

const filter = (filters, members_list) => {
  if (filters.length == 0) {
    // assume all board
    return members_list
  } else {
    const displayList = members_list.filter(member =>
      filters.includes(member.org)
    )
    return displayList
  }
}
const renderFilters = (filters, setFilters) => {}
const AboutBoard: React.FC = ({ isMobile }) => {
  const [filters, setFilters] = useState([])
  const [displayList, setDisplayList] = useState(members_list)

  useEffect(() => {
    setDisplayList(filter(filters, members_list))
  }, [])
  useEffect(() => {
    setDisplayList(filter(filters, members_list))
  }, [filters])
  return (
    <section className="about__board">
      <h1 className="about__board__title">Meet the Board</h1>
      <div className="about__board__filters">
        <p>Filter:</p>
        {filters.length == 0 ? (
          <img src={AllBoardSelected} onClick={() => setFilters([])} />
        ) : (
          <img src={AllBoardEmpty} onClick={() => setFilters([])} />
        )}
        {filters.includes("general") ? (
          <img
            src={GeneralSelected}
            onClick={() => {
              setFilters(filters.filter(e => e !== "general"))
            }}
          />
        ) : (
          <img src={GeneralEmpty} onClick={() => setFilters(["general"])} />
        )}
        <br />
        {filters.includes("ai") ? (
          <img
            src={AISelected}
            onClick={() => {
              setFilters(filters.filter(e => e !== "ai"))
            }}
          />
        ) : (
          <img src={AIEmpty} onClick={() => setFilters(["ai"])} />
        )}
        {filters.includes("cyber") ? (
          <img
            src={CyberSelected}
            onClick={() => {
              setFilters(filters.filter(e => e !== "cyber"))
            }}
          />
        ) : (
          <img src={CyberEmpty} onClick={() => setFilters(["cyber"])} />
        )}
        {filters.includes("hack") ? (
          <img
            src={HackSelected}
            onClick={() => {
              setFilters(filters.filter(e => e !== "hack"))
            }}
          />
        ) : (
          <img src={HackEmpty} onClick={() => setFilters(["hack"])} />
        )}
        {filters.includes("innovate") ? (
          <img
            src={InnovateSelected}
            onClick={() => {
              setFilters(filters.filter(e => e !== "innovate"))
            }}
          />
        ) : (
          <img src={InnovateEmpty} onClick={() => setFilters(["innovate"])} />
        )}
        {filters.includes("design") ? (
          <img
            src={DesignSelected}
            onClick={() => {
              setFilters(filters.filter(e => e !== "design"))
            }}
          />
        ) : (
          <img src={DesignEmpty} onClick={() => setFilters(["design"])} />
        )}
      </div>
      <BoardGrid members_list={displayList} isMobile={isMobile} />
    </section>
  )
}

export default AboutBoard
