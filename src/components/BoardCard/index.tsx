import React from "react"
import "./style.less"

interface BoardCardProps {
  boardmember: Object
}

const defaultProps: BoardCardProps = {
  boardmember: {
    name: "Kitten Kittenson",
    org: "ai",
    title: "Department Funding Manager",
    email: "kitten@acmucsd.org",
    profile_image:
      "https://www.petage.com/wp-content/uploads/2019/09/Depositphotos_74974941_xl-2015-e1569443284386-670x627.jpg",
    personal_link: "ucsd.edu",
  },
}
const openInNewTab = url => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer")
  if (newWindow) newWindow.opener = null
}
const BoardCard: React.FC<BoardCardProps> = ({ boardmember }) => {
  const name = boardmember.name
  const org = boardmember.org
  const title = boardmember.title
  const email = boardmember.email
  const profile_image = boardmember.profile_image
  const personal_link = boardmember.personal_link

  return (
    <div
      className={"BoardCard " + org}
      onClick={() => openInNewTab(personal_link)}
    >
      <div className="BoardCard_titleHeader">
        <h1>{title}</h1>
      </div>
      <div className="BoardCard_pfp">
        <img alt={name} src={profile_image} />
      </div>
      <div className="BoardCard_footer">
        <h1>{name}</h1>
        <div>
          <svg
            width="18"
            height="14"
            viewBox="0 0 18 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.6177 0.458008H1.36449C1.04 0.458008 0.777832 0.718533 0.777832 1.041V12.7009C0.777832 13.0233 1.04 13.2838 1.36449 13.2838H16.6177C16.9422 13.2838 17.2043 13.0233 17.2043 12.7009V1.041C17.2043 0.718533 16.9422 0.458008 16.6177 0.458008ZM15.8844 2.47662V11.9721H2.09782V2.47662L1.59182 2.08492L2.31232 1.16489L3.09698 1.77156H14.887L15.6717 1.16489L16.3922 2.08492L15.8844 2.47662ZM14.887 1.76974L8.99109 6.32437L3.09514 1.76974L2.31048 1.16306L1.58999 2.0831L2.09599 2.4748L8.35859 7.31364C8.5387 7.45268 8.76027 7.52816 8.98834 7.52816C9.21641 7.52816 9.43798 7.45268 9.61808 7.31364L15.8844 2.47662L16.3904 2.08492L15.6699 1.16489L14.887 1.76974Z"
              className={org}
            />
          </svg>
          <p>{email}</p>
        </div>
      </div>
    </div>
  )
}

BoardCard.defaultProps = defaultProps
export default BoardCard
