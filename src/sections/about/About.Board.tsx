import { useState, useEffect } from "react";
import Image from "next/image";
import BoardGrid from "src/components/BoardGrid";
import BoardFilters from "src/components/BoardFilters";
import BoardData from "src/board-data.json";

const members_list = BoardData;

interface AboutBoardProps {
  isMobile: boolean;
}

const AboutBoard: React.FC<AboutBoardProps> = ({ isMobile }) => {
  const [activeFilters, setActiveFilters] = useState([]);
  const [displayList, setDisplayList] = useState(members_list);

  useEffect(() => {
    if (activeFilters.length === 0) setDisplayList(members_list);
    else
      setDisplayList(
        members_list.filter((member) => activeFilters.includes(member.org))
      );
  }, [activeFilters]);

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
