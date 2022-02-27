export interface IPost {
  id: number;
  title: string;
  body: string;
}

export interface BoardMemberProps {
  name: string;
  org: string;
  title: string;
  email?: string;
  profile_image: string;
  personal_link?: string;
  linkedin_link?: string;
}
