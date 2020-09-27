import React, { useState } from 'react';
import './style.less';
import AboutImg from '../../assets/about-us.png';
import Button from '../../components/button';
import BoardMemberCard from '../../components/boardmember';
import { ReactComponent as Arrow } from '../../assets/arrow-triangle.svg';
import Members from './members.json';

const AboutUs: React.FC = () => {
  const [currTeam, setCurrTeam] = useState('board');
  const [team, setTeam] = useState(Members.data[0].members);
  const [select, toggleSelect] = useState(false);

  const displayTeam = (newTeam: string) => {
    toggleSelect(!select);
    setCurrTeam(newTeam);
    const teamIndex = Members.teams.indexOf(newTeam);
    setTeam(Members.data[teamIndex].members);
  };

  const memberData: any = Members;
  const teamsList: Array<string> = memberData.teams;
  return (
    <div className="about-us">
      <h1>Join our member-driven computing community</h1>
      <div className="about-info">
        <div className="about-description">
          <div className="about-text">
            <p>
              ACM was founded because we saw a need for a more together student community among
              individuals interested in technology - computing, &nbsp;
              <b>design</b>
              {', '}
              <b>hacking</b>
              {', '}
              <b>cybersecurity</b>
              {', '}
              and
              <span> </span>
              <b>graphics</b>
              <span> </span>
              to name a few. We welcome you to drop by our events!
            </p>
            <br />
            <br />
            <span>
              Interested in getting more involved? Join the Diamond Staff program to volunteer for
              fun socials or mentor technical workshops for 2000+ students per quarter.
            </span>
          </div>
          <div className="buttons">
            <Button link="https://members.acmucsd.com/" title="Student Portal" />
            <Button link="#" title="Diamond Staff" />
          </div>
        </div>
        <div className="about-image">
          <img src={AboutImg} alt="ACM's peeps" />
        </div>
      </div>
      <div className="board-members">
        <div className="board-members-header">
          <h1>Our team:</h1>
          <div
            className="dropdown-selection"
            onClick={() => {
              toggleSelect(!select);
            }}
            tabIndex={0}
            onKeyUp={(e) => {
              if (e.key === 'Enter') {
                toggleSelect(!select);
              }
            }}
            role="button"
          >
            <p>{currTeam}</p>
            <Arrow />
            <div className={`dropdown ${select ? 'show' : ''}`}>
              {teamsList.map((teamName) => (
                <div
                  className="dropdown-item"
                  onClick={() => {
                    displayTeam(teamName);
                  }}
                  onKeyUp={(e) => {
                    if (e.key === 'Enter') {
                      displayTeam(teamName);
                    }
                  }}
                  role="option"
                  tabIndex={0}
                  aria-selected={teamName === currTeam}
                  key={teamName}
                >
                  {teamName}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="board-members-info">
          {team != null ? (
            team.map((d, i) => (
              <BoardMemberCard name={d.name} title={d.title} photo={d.url} key={currTeam + i} />
            ))
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
