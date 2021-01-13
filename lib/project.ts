export interface Project {
  name: string
  description: string
  tags: string[]
  link: string
}

export const projects: Project[] = [
  {
    name: 'moi',
    description:
      'Manage all of your data in one place. Access it all through a single API. Fantasic for personal websites and blogs.',
    tags: ['Product'],
    link: 'https://moiapi.dev',
  },
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
