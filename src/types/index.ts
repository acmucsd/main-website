export interface IPost {
  id: number;
  title: string;
  body: string;
}

export interface BoardMemberProps {
  name: string;
  org: string;
  title: string;
  specialization: string;
  profile_image: string;
  email: string;
  linkedin_link: string;
  personal_link: string;
}
