import { useState, useEffect } from "react";
import Image from "next/image";
import BoardGrid from "src/components/BoardGrid";

import AllBoardSelected from "public/assets/board-filters/all-board-selected.svg";
import AllBoardEmpty from "public/assets/board-filters/all-board-empty.svg";

import AISelected from "public/assets/board-filters/ai-selected.svg";
import AIEmpty from "public/assets/board-filters/ai-empty.svg";

import GeneralSelected from "public/assets/board-filters/general-selected.svg";
import GeneralEmpty from "public/assets/board-filters/general-empty.svg";

import CyberSelected from "public/assets/board-filters/cyber-selected.svg";
import CyberEmpty from "public/assets/board-filters/cyber-empty.svg";

import HackSelected from "public/assets/board-filters/hack-selected.svg";
import HackEmpty from "public/assets/board-filters/hack-empty.svg";

import InnovateSelected from "public/assets/board-filters/innovate-selected.svg";
import InnovateEmpty from "public/assets/board-filters/innovate-empty.svg";


import BoardData from "src/board-data.json";
const members_list = BoardData;

const filter = (filters, members_list) => {
  if (filters.length == 0) {
    // assume all board
    return members_list;
  } else {
    const displayList = members_list.filter((member) =>
      filters.includes(member.org)
    );
    return displayList;
  }
};
const renderFilters = (filters, setFilters) => {};
interface AboutBoardProps {
  isMobile: boolean;
}
const AboutBoard: React.FC<AboutBoardProps> = ({ isMobile }) => {
  const [filters, setFilters] = useState([]);
  const [displayList, setDisplayList] = useState(members_list);

  useEffect(() => {
    setDisplayList(filter(filters, members_list));
  }, [filters]);
  useEffect(() => {
    setDisplayList(filter(filters, members_list));
  }, [filters]);
  return (
    <section className="about__board">
      <h1 className="about__board__title">Meet the Board</h1>
      <div className="about__board__filters">
        <p>Filter:</p>
        {filters.length == 0 ? (
          <img
            alt="all board is now selected"
            src={AllBoardSelected.src}
            onClick={() => setFilters([])}
          />
        ) : (
          <img
            alt="all board is no longer selected"
            src={AllBoardEmpty.src}
            onClick={() => setFilters([])}
          />
        )}
        {filters.includes("general") ? (
          <img
            alt="general is now selected"
            src={GeneralSelected.src}
            onClick={() => {
              setFilters(filters.filter((e) => e !== "general"));
            }}
          />
        ) : (
          <img
            alt="general is not selected"
            src={GeneralEmpty.src}
            onClick={() => setFilters(["general"])}
          />
        )}
        <br />
        {filters.includes("ai") ? (
          <img
            alt="ai is now selected"
            src={AISelected.src}
            onClick={() => {
              setFilters(filters.filter((e) => e !== "ai"));
            }}
          />
        ) : (
          <img
            alt="ai is not selected"
            src={AIEmpty.src}
            onClick={() => setFilters(["ai"])}
          />
        )}
        {filters.includes("cyber") ? (
          <img
            alt="cyber is now selected"
            src={CyberSelected.src}
            onClick={() => {
              setFilters(filters.filter((e) => e !== "cyber"));
            }}
          />
        ) : (
          <img
            alt="cyber is not selected"
            src={CyberEmpty.src}
            onClick={() => setFilters(["cyber"])}
          />
        )}
        {filters.includes("hack") ? (
          <img
            src={HackSelected.src}
            alt="hack is selected"
            onClick={() => {
              setFilters(filters.filter((e) => e !== "hack"));
            }}
          />
        ) : (
          <img
            alt="hack is not selected"
            src={HackEmpty.src}
            onClick={() => setFilters(["hack"])}
          />
        )}
        {filters.includes("innovate") ? (
          <img
            src={InnovateSelected.src}
            alt="innovate is selected"
            onClick={() => {
              setFilters(filters.filter((e) => e !== "innovate"));
            }}
          />
        ) : (
          <img
            alt="innovate is not selected"
            src={InnovateEmpty.src}
            onClick={() => setFilters(["innovate"])}
          />
        )}
      </div>
      <BoardGrid members_list={displayList} isMobile={isMobile} />
    </section>
  );
};

export default AboutBoard;
