export type ToolType =
  | 'language'
  | 'tool'
  | 'framework'
  | 'hosting'
  | 'graphics'

export type Tool = {
  name: string
  description: string
  type: ToolType
  website?: string
  affiliateLink?: string
  article?: string
}

export type Stack = Tool[]

export const stack: Stack = [
  {
    name: 'Typescript',
    type: 'language',
    description: 'Language of choice for most projects',
    website: 'https://www.typescriptlang.org/',
  },
  {
    name: 'Fathom',
    type: 'tool',
    description: 'Privacy-focused analytics. Replaced GA for all my sites',
    website: 'https://usefathom.com/',
    affiliateLink: 'https://usefathom.com/ref/C7G8JE',
  },
  {
    name: 'React',
    type: 'framework',
    description:
      'React is my preferred UI framework. Often paired with Next.js',
    website: 'https://reactjs.org/',
  },
  {
    name: 'Next.js',
    type: 'framework',
    description: 'I use Next.js for any significantly sized frontend project',
    website: 'https://nextjs.org/',
  },
  {
    name: 'Doppler',
    type: 'tool',
    description:
      'My favorite tool for secrets management. Integrates well with Vercel and Heroku',
    website: 'https://doppler.com/',
    affiliateLink: 'https://doppler.com/join?invite=FEFC5D1A',
  },
  {
    name: 'Notion',
    type: 'tool',
    description: 'I use Notion for organising my life and projects',
    website: 'https://notion.so',
  },
  {
    name: 'Vercel',
    type: 'hosting',
    description: 'Where I deploy most websites',
    website: 'https://vercel.com/',
  },
  {
    name: 'Netlify',
    type: 'hosting',
    description: 'Where I deploy some static websites',
    website: 'https://www.netlify.com/',
  },
  {
    name: 'Heroku',
    type: 'hosting',
    description: 'Where I deploy my servers',
    website: 'https://www.heroku.com/',
  },
  {
    name: 'Nest',
    type: 'framework',
    description: 'My favourite framework for building APIs with Typescript',
    website: 'https://nestjs.com/',
  },
  {
    name: 'Rush',
    type: 'tool',
    description: 'Helpful tool for managing monorepos',
    website: 'https://rushjs.io/',
  },
  {
    name: 'Volta',
    type: 'tool',
    description: 'Javascript toolchain management',
    website: 'https://volta.sh/',
    article: '/blog/hyho-volta',
  },
  {
    name: 'Heroicons',
    type: 'graphics',
    description: 'SVG icons in two sizes',
    website: 'https://heroicons.com/',
  },
  {
    name: 'Simple Icons',
    type: 'graphics',
    description: 'SVG icons for popular brands',
    website: 'https://simpleicons.org/',
  },
]
