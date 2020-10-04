import React from "react";
import GithubIcon from "./social/GithubIcon";
import LinkedInIcon from "./social/LinkedInIcon";
import TwitterIcon from "./social/TwitterIcon";

const SocialIcons: React.FC = () => {
  return (
    <div className="flex flex-row space-x-2 md:space-x-4">
      <GithubIcon />
      <TwitterIcon />
      <LinkedInIcon />
    </div>
  );
};

export default SocialIcons;
