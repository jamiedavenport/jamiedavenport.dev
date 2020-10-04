import React from "react";

type Props = {
  href: string;
};

const ExternalLink: React.FC<Props> = ({ children, href }) => {
  return (
    <a href={href} target="__blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default ExternalLink;
