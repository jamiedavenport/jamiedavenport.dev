import React from "react";
import GithubIcon from "../components/icons/GithubIcon";
import LinkedInIcon from "../components/icons/LinkedInIcon";
import TwitterIcon from "../components/icons/TwitterIcon";

export type Account = {
  name: string;
  url: string;
  logo: React.ReactNode;
};

const accounts: Account[] = [
  {
    name: "Github",
    url: "https://github.com/jamiedavenport",
    logo: <GithubIcon />,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/jamiedavenport_",
    logo: <TwitterIcon />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/davenportjamie",
    logo: <LinkedInIcon />,
  },
];

export default accounts;
