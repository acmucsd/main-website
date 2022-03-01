import { useState, useEffect } from "react";
import Image from "next/image";
import BoardCard from "src/components/BoardCard";
import LeftArrow from "public/assets/left-arrow.svg";

import RightArrow from "public/assets/right-arrow.svg";
import { BoardMemberProps } from "src/types/index";

interface BoardGridProps {
  members_list: BoardMemberProps[];
  isMobile: boolean;
}
const generateCurrentPage = (members_list, page) => {
  const per_page = 8;
  const current_page = members_list.slice(
    page * per_page,
    (page + 1) * per_page
  );
  return (
    <div className="BoardGrid_grid">
      {current_page.map((member) => (
        <BoardCard
          boardmember={member}
          key={`${member.name}-${member.email}-${member.org}`}
        />
      ))}
    </div>
  );
};
const BoardGrid: React.FC<BoardGridProps> = ({ members_list, isMobile }) => {
  const [page, setPage] = useState(0);
  const [currentPage, setCurrentPage] = useState<unknown>();
  const maxPage = Math.ceil(members_list.length / 8 - 1);

  useEffect(() => {
    setCurrentPage(generateCurrentPage(members_list, page));
  }, [members_list, page]);

  useEffect(() => {
    if (page > Math.ceil(members_list.length / 8 - 1)) {
      setPage(Math.ceil(members_list.length / 8 - 1));
    }
    setCurrentPage(generateCurrentPage(members_list, page));
  }, [page, members_list]);

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
      {currentPage}
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
