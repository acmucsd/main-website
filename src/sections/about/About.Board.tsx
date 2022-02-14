import { useState, useEffect } from "react";
import Image from "next/image";
import BoardGrid from "src/components/BoardGrid";
import BoardFilters from "src/components/BoardFilters";

interface AboutBoardProps {
  isMobile: boolean;
  boardData: any[];
}

const AboutBoard: React.FC<AboutBoardProps> = ({ isMobile, boardData }) => {
  const [activeFilters, setActiveFilters] = useState([]);
  const [displayList, setDisplayList] = useState(boardData);

  useEffect(() => {
    if (activeFilters.length === 0) setDisplayList(boardData);
    else
      setDisplayList(
        boardData.filter((member) => activeFilters.includes(member.org))
      );
  }, [activeFilters, boardData]);

  return (
    <section className="about__board">
      <h1 className="about__board__title">Meet the Board</h1>
      <BoardFilters
        activeFilters={activeFilters}
        setActiveFilters={setActiveFilters}
      />
      <BoardGrid members_list={displayList} isMobile={isMobile} />
    </section>
  );
};

export default AboutBoard;
