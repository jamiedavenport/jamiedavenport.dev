import React, { AriaAttributes } from "react";

type Props = {
  href: string;
};

const ExternalLink: React.FC<Props & AriaAttributes> = ({
  children,
  href,
  ...aria
}) => {
  return (
    <a
      href={href}
      target="__blank"
      rel="noopener noreferrer"
      className="underline"
      {...aria}
    >
      {children}
    </a>
  );
};

export default ExternalLink;
