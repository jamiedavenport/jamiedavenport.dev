export enum LinkType {
  Internal,
  External,
}

export interface Link {
  title: string;
  type: LinkType;
  href: string;
}

const links: Link[] = [];

export default links;
