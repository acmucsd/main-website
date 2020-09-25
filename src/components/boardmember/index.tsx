import React from 'react';
import './style.less';

interface BoardMemberProps {
  name: string;
  title: string;
  photo: string;
}

const BoardMember: React.FC<BoardMemberProps> = ({ name, title, photo }) => (
  <div className="board-member-card">
    <div className="board-member-photo" style={{ backgroundImage: `url(${photo})` }} />
    <div className="board-member-info">
      <h2 className="board-member-name">{name}</h2>
      <h3 className="board-member-role">{title}</h3>
    </div>
  </div>
);

export default BoardMember;
