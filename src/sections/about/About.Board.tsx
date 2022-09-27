import BoardGrid from "src/components/BoardGrid";
import { BoardMemberProps } from "src/types";

interface AboutBoardProps {
  board: BoardMemberProps[];
}
const AboutBoard: React.FC<AboutBoardProps> = ({ board }) => (
  <section className="about__board">
    <h1 className="about__board__title">Meet the Board</h1>
    <BoardGrid members_list={board} />
  </section>
);

export default AboutBoard;
