import { useState, useEffect } from "react";
import Image from "next/image";
import BoardCard from "src/components/BoardCard";
import LeftArrow from "public/assets/left-arrow.svg";

import RightArrow from "public/assets/right-arrow.svg";
import { BoardMemberProps } from "src/types";

interface BoardGridProps {
  members_list: BoardMemberProps[];
  isMobile: boolean;
}

const BoardGrid: React.FC<BoardGridProps> = ({ members_list, isMobile }) => {
  const [page, setPage] = useState(0);
  const [activeCards, setActiveCards] = useState<BoardMemberProps[]>([]);
  const maxPage = Math.ceil(members_list.length / 8 - 1);

  const per_page = 8;

  useEffect(() => {
    setActiveCards(members_list.slice(page * per_page, (page + 1) * per_page));
  }, [members_list, page]);

  return (
    <div className="BoardGrid">
      <div className="BoardGrid_arrowContainer">
        {page === 0 ? null : (
          <img
            src={LeftArrow.src}
            alt="left arrow"
            onClick={() => setPage(page >= 1 ? page - 1 : 0)}
          />
        )}
      </div>
      <div className="BoardGrid_grid">
        {activeCards.map((member) => (
          <BoardCard
            boardmember={member}
            key={`${member.name}-${member.email}-${member.org}`}
          />
        ))}
      </div>
      <div className="BoardGrid_arrowContainer">
        {page === maxPage ? null : (
          <img
            src={RightArrow.src}
            alt="right arrow"
            onClick={() => setPage(page < maxPage ? page + 1 : maxPage)}
          />
        )}
      </div>
    </div>
  );
};

export default BoardGrid;
