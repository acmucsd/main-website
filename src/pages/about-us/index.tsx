import React, {useState} from 'react';
import './style.less';
import AboutImg from '../../assets/about-us.png';
import Button from '../../components/button';
import BoardMemberCard from '../../components/boardmember';
import Members from './members.json';

const AboutUs: React.FC = () => {

  const [currTeam, setCurrTeam] = useState('board')
  const [team, setTeam] = useState(Members.board)

  const displayTeam = (event:React.FormEvent<HTMLSelectElement>) => {
    setCurrTeam(event.currentTarget.value);
    if(event.currentTarget.value === 'board') {
      setTeam(Members.board);
    } else if (event.currentTarget.value === 'development') {
      setTeam(Members.development);
    }
  }

  return(
  <div className="about-us">
    <h1>Join our member-driven computing community</h1>
    <div className="about-info">
      <div className="about-description">
        <div className="about-text">
          <span>
            ACM was founded because we saw a need for a more together student community among
            individuals interested in technology - computing, &nbsp;
          </span>
          <b>design</b>
          <span>, </span>
          <b>hacking</b>
          <span>, </span>
          <b>cybersecruity</b>
          <span>, and </span>
          <b>graphics</b>
          <span> to name a few. We welcome you to drop by our events! </span>
          <br />
          <br />
          <span>
            Interested in getting more involved? Join the Diamond Staff program to volunteer for fun
            socials or mentor technical workshops for 2000+ students per quarter.
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
    <label htmlFor="teams">Our team:</label>
      <select id="teams" onChange={displayTeam}>
        {
          Members.teams.map(team => (
          <option value={team.toLowerCase()}>{team}</option>
          ))
        }
      </select>
    </div>
        {
          team != null ?
          team.map((d, i) => (
            <BoardMemberCard 
              name={d.name}
              title={d.title}
              photo={d.url}
              key={currTeam+i}
            />
          )) : <div></div>
        }
      </div>
  </div>
  );
}
export default AboutUs;
