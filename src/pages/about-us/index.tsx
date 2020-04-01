import React from 'react';
import BoardMember from '../../components/boardmember';
import members from './members.json';
import "./style.less";

const AboutUs: React.FC = () => {

  return (
    <div className="about-us">
      <h1>Our Team: </h1>
      {
        members["board"].map((boardmember, i) => {
          return (
            <BoardMember 
              name={boardmember.name}
              title={boardmember.title}
              image={boardmember.url}
            />
          )
        })
      }
    </div>
  );
};

export default AboutUs;
