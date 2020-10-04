import links, { Link } from "lib/links";
import React from "react";

type Props = {
  renderLink: (l: Link) => JSX.Element;
};

const Nav: React.FC<Props> = ({ renderLink }) => {
  return <>{links.map((l) => renderLink(l))}</>;
};

export default Nav;
