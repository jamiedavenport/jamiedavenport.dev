import React from "react";
import GithubIcon from "../components/icons/GithubIcon";
import InstagramIcon from "../components/icons/InstagramIcon";
import LinkedInIcon from "../components/icons/LinkedInIcon";
import TwitterIcon from "../components/icons/TwitterIcon";

export type Account = {
  name: string;
  url: string;
  logo: React.ReactNode;
};

export const twitterUsername = "jamiedavenport_";

const accounts: Account[] = [
  {
    name: "Github",
    url: "https://github.com/jamiedavenport",
    logo: <GithubIcon />,
  },
  {
    name: "Twitter",
    url: `https://twitter.com/${twitterUsername}`,
    logo: <TwitterIcon />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/davenportjamie",
    logo: <LinkedInIcon />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/iamjamie_d/",
    logo: <InstagramIcon />,
  },
];

export default accounts;
