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
  const [boardCards, setBoardCards] = useState(members_list);
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    setPageIndex(0);
    if (activeFilter === "") setBoardCards(members_list);
    else setBoardCards(members_list.filter(item => item.org === activeFilter));
  }, [activeFilter, members_list]);

  const hasMoreCards = () => {
    return (pageIndex + 1) * CARDS_PER_PAGE >= boardCards.length;
  };

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
        </div>
      </div>
      <div className={style.grid}>
        {pageIndex === 0 ? null : (
          <img
            onClick={() => setPageIndex(index => index - 1)}
            className={style.left}
            src="assets/left-arrow.svg"
            alt="Paginate left"
          />
        )}
        <div className={style.cards}>
          {boardCards
            .slice(pageIndex * CARDS_PER_PAGE, (pageIndex + 1) * CARDS_PER_PAGE)
            .map((item, index) => (
              <BoardCard key={`${item.name}-${index}`} boardmember={item} />
            ))}
        </div>
        {hasMoreCards() ? null : (
          <img
            onClick={() => setPageIndex(index => index + 1)}
            className={style.right}
            src="assets/right-arrow.svg"
            alt="Paginate right"
          />
        )}
      </div>
    </div>
  );
};

export default BoardGrid;
