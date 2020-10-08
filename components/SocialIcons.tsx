import React from "react";
import ExternalLink from "./ExternalLink";
import GithubIcon from "./social/GithubIcon";
import LinkedInIcon from "./social/LinkedInIcon";
import RSSIcon from "./social/RSSIcon";
import TwitterIcon from "./social/TwitterIcon";

const SocialIcons: React.FC = () => {
  return (
    <div className="flex flex-row space-x-2 md:space-x-4">
      <ExternalLink href="/feed.xml">
        <RSSIcon />
      </ExternalLink>
      <ExternalLink href="https://github.com/jamiedavenport">
        <GithubIcon />
      </ExternalLink>
      <ExternalLink href="https://twitter.com/jdavenport97">
        <TwitterIcon />
      </ExternalLink>
      <ExternalLink href="https://www.linkedin.com/in/jamie-davenport-30168a11a/">
        <LinkedInIcon />
      </ExternalLink>
    </div>
  );
};

export default SocialIcons;
