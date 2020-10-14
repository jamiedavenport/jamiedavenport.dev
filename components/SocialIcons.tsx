import React from 'react'
import ExternalLink from './ExternalLink'
import GithubIcon from './social/GithubIcon'
import LinkedInIcon from './social/LinkedInIcon'
import RSSIcon from './social/RSSIcon'
import TwitterIcon from './social/TwitterIcon'

const SocialIcons: React.FC = () => {
  return (
    <div className="flex flex-row space-x-2 md:space-x-4">
      <ExternalLink aria-label="RSS Feed" href="/feed.xml">
        <RSSIcon />
      </ExternalLink>
      <ExternalLink
        aria-label="Github"
        href="https://github.com/jamiedavenport"
      >
        <GithubIcon />
      </ExternalLink>
      <ExternalLink
        aria-label="Twitter"
        href="https://twitter.com/jdavenport97"
      >
        <TwitterIcon />
      </ExternalLink>
      <ExternalLink
        aria-label="LinkedIn"
        href="https://www.linkedin.com/in/jamie-davenport-30168a11a/"
      >
        <LinkedInIcon />
      </ExternalLink>
    </div>
  )
}

export default SocialIcons
