export interface BoardMemberProps {
  name: string;
  org: string;
  title: string;
  email?: string;
  profile_image: string;
  personal_link?: string;
  linkedin_link?: string;
}

export interface SponsorProps {
  name?: string;
  url?: string;
  logo: string;
}
