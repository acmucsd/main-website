import React from "react"
import "./styles.less"
import BoardGrid from "../../components/BoardGrid"

const AboutBoard: React.FC = ({ isMobile }) => {
  const members_list = [
    {
      name: "Kitten Kittenson",
      org: "ai",
      title: "Department Funding Manager",
      email: "kitten@acmucsd.org",
      profile_image:
        "https://www.petage.com/wp-content/uploads/2019/09/Depositphotos_74974941_xl-2015-e1569443284386-670x627.jpg",
      personal_link: "ucsd.edu",
    },
    {
      name: "Kitten Kittenson",
      org: "ai",
      title: "Department Funding Manager",
      email: "kitten@acmucsd.org",
      profile_image:
        "https://www.petage.com/wp-content/uploads/2019/09/Depositphotos_74974941_xl-2015-e1569443284386-670x627.jpg",
      personal_link: "ucsd.edu",
    },
    {
      name: "Kitten Kittenson",
      org: "ai",
      title: "Department Funding Manager",
      email: "kitten@acmucsd.org",
      profile_image:
        "https://www.petage.com/wp-content/uploads/2019/09/Depositphotos_74974941_xl-2015-e1569443284386-670x627.jpg",
      personal_link: "ucsd.edu",
    },
    {
      name: "Kitten Kittenson",
      org: "ai",
      title: "Department Funding Manager",
      email: "kitten@acmucsd.org",
      profile_image:
        "https://www.petage.com/wp-content/uploads/2019/09/Depositphotos_74974941_xl-2015-e1569443284386-670x627.jpg",
      personal_link: "ucsd.edu",
    },
    {
      name: "Kitten Kittenson",
      org: "ai",
      title: "Department Funding Manager",
      email: "kitten@acmucsd.org",
      profile_image:
        "https://www.petage.com/wp-content/uploads/2019/09/Depositphotos_74974941_xl-2015-e1569443284386-670x627.jpg",
      personal_link: "ucsd.edu",
    },
    {
      name: "Kitten Kittenson",
      org: "ai",
      title: "Department Funding Manager",
      email: "kitten@acmucsd.org",
      profile_image:
        "https://www.petage.com/wp-content/uploads/2019/09/Depositphotos_74974941_xl-2015-e1569443284386-670x627.jpg",
      personal_link: "ucsd.edu",
    },
    {
      name: "Kitten Kittenson",
      org: "ai",
      title: "Department Funding Manager",
      email: "kitten@acmucsd.org",
      profile_image:
        "https://www.petage.com/wp-content/uploads/2019/09/Depositphotos_74974941_xl-2015-e1569443284386-670x627.jpg",
      personal_link: "ucsd.edu",
    },
    {
      name: "Kitten Kittenson",
      org: "ai",
      title: "Department Funding Manager",
      email: "kitten@acmucsd.org",
      profile_image:
        "https://www.petage.com/wp-content/uploads/2019/09/Depositphotos_74974941_xl-2015-e1569443284386-670x627.jpg",
      personal_link: "ucsd.edu",
    },
    {
      name: "Kitten Kittenson",
      org: "ai",
      title: "Department Funding Manager",
      email: "kitten@acmucsd.org",
      profile_image:
        "https://www.petage.com/wp-content/uploads/2019/09/Depositphotos_74974941_xl-2015-e1569443284386-670x627.jpg",
      personal_link: "ucsd.edu",
    },
    {
      name: "Kitten Kittenson",
      org: "ai",
      title: "Department Funding Manager",
      email: "kitten@acmucsd.org",
      profile_image:
        "https://www.petage.com/wp-content/uploads/2019/09/Depositphotos_74974941_xl-2015-e1569443284386-670x627.jpg",
      personal_link: "ucsd.edu",
    },
  ]
  return (
    <section className="about__board">
      <BoardGrid members_list={members_list} isMobile={isMobile} />
    </section>
  )
}

export default AboutBoard
