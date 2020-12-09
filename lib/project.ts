export interface Project {
  name: string
  description: string
  tags: string[]
  link: string
}

export const projects: Project[] = [
  {
    name: 'nauth0',
    description:
      'Easy and awesome authentication for NextJS applications using Auth0',
    tags: ['Open-Source', 'Authentication'],
    link: 'https://github.com/jamiedavenport/nauth0',
  },
  {
    name: 'bethdavenport.design',
    description: 'Online Portfolio',
    tags: ['CMS', 'Website'],
    link: 'https://bethdavenport.design',
  },
]
