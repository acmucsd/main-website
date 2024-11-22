import Image from "next/image";
import { useEffect, useState } from "react";
import { BoardMemberProps } from "src/types";
import BoardCard from "../BoardCard";
import style from "./styles.module.scss";

interface BoardGridProps {
  members_list: BoardMemberProps[];
}

const CARDS_PER_PAGE = 8;

const BoardGrid: React.FC<BoardGridProps> = ({ members_list }) => {
  const [activeFilter, setActiveFilter] = useState("");

  const boardCards = activeFilter === ""
    ? members_list
    : members_list.filter(item => item.org === activeFilter);

  return (
    <div className={style.gridWrapper}>
      <div className={style.gridFilters}>
        <p>Filters</p>
        <div className={style.filterButtons}>
          <button
            onClick={() => {
              if (activeFilter === "general") setActiveFilter("");
              else setActiveFilter("general");
            }}
            className={`${style.general} ${activeFilter === "general" ? style.active : ""}`}
          >
            General
          </button>
          <button
            onClick={() => {
              if (activeFilter === "cyber") setActiveFilter("");
              else setActiveFilter("cyber");
            }}
            className={`${style.cyber} ${activeFilter === "cyber" ? style.active : ""}`}
          >
            Cyber
          </button>
          <button
            onClick={() => {
              if (activeFilter === "ai") setActiveFilter("");
              else setActiveFilter("ai");
            }}
            className={`${style.ai} ${activeFilter === "ai" ? style.active : ""}`}
          >
            AI
          </button>
          <button
            onClick={() => {
              if (activeFilter === "hack") setActiveFilter("");
              else setActiveFilter("hack");
            }}
            className={`${style.hack} ${activeFilter === "hack" ? style.active : ""}`}
          >
            Hack
          </button>
          <button
            onClick={() => {
              if (activeFilter === "design") setActiveFilter("");
              else setActiveFilter("design");
            }}
            className={`${style.design} ${activeFilter === "design" ? style.active : ""}`}
          >
            Design
          </button>
        </div>
      </div>
      <div className={style.grid}>
        {boardCards.map((item, index) => (
          <BoardCard key={`${item.name}-${index}`} boardmember={item} />
        ))}
      </div>
    </div>
  );
};

export default BoardGrid;
