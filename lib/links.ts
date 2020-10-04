export enum LinkType {
  Internal,
  External,
}

export interface Link {
  title: string;
  type: LinkType;
  href: string;
}

const links: Link[] = [
  {
    title: "Blog",
    type: LinkType.External,
    href: "https://blog.jamiedavenport.dev",
  },
];

export default links;
