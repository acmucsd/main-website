import React from 'react';
import './style.less';

interface BoardMemberProps {
  name: string;
  title: string;
  photo: string;
}

const BoardMember: React.FC<BoardMemberProps> = ({ name, title, photo, }) => (
  <div className="board-member-card">
      <div className="board-member-photo" style={{backgroundImage: 'url('+photo+')'}} />
      <div className="board-member-info">
          <div className="board-member-title">
            {name}
          </div>
          <div className="board-member-description">
            {title}
          </div>
      </div>
  </div>
);

export default BoardMember;