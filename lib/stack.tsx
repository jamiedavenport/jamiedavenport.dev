import {
  Fathom,
  Heroku,
  Nestjs,
  Netlify,
  NextDotJs,
  Notion,
  ReactJs,
  Simpleicons,
  Typescript,
  Vercel,
} from '@icons-pack/react-simple-icons'

export type ToolType =
  | 'language'
  | 'tool'
  | 'framework'
  | 'hosting'
  | 'graphics'
  | 'money'

export type Tool = {
  name: string
  description: string
  type: ToolType
  colour: string
  icon: JSX.Element
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
    colour: '#3178C6',
    icon: <Typescript />,
  },
  {
    name: 'Fathom',
    type: 'tool',
    description: 'Privacy-focused analytics. Replaced GA for all my sites',
    website: 'https://usefathom.com/',
    affiliateLink: 'https://usefathom.com/ref/C7G8JE',
    colour: '#9187FF',
    icon: <Fathom />,
  },
  {
    name: 'React',
    type: 'framework',
    description:
      'React is my preferred UI framework. Often paired with Next.js',
    website: 'https://reactjs.org/',
    colour: '#61DAFB',
    icon: <ReactJs />,
  },
  {
    name: 'Next.js',
    type: 'framework',
    description: 'I use Next.js for any significantly sized frontend project',
    website: 'https://nextjs.org/',
    colour: '#000000',
    icon: <NextDotJs />,
  },
  {
    name: 'Doppler',
    type: 'tool',
    description:
      'My favorite tool for secrets management. Integrates well with Vercel and Heroku',
    website: 'https://doppler.com/',
    affiliateLink: 'https://doppler.com/join?invite=FEFC5D1A',
    colour: '#5571ef',
    icon: (
      <svg
        className="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Notion',
    type: 'tool',
    description: 'I use Notion for organising my life and projects',
    website: 'https://notion.so',
    colour: '#000',
    icon: <Notion />,
  },
  {
    name: 'Vercel',
    type: 'hosting',
    description: 'Where I deploy most websites',
    website: 'https://vercel.com/',
    colour: '#000',
    icon: <Vercel />,
  },
  {
    name: 'Netlify',
    type: 'hosting',
    description: 'Where I deploy some static websites',
    website: 'https://www.netlify.com/',
    colour: '#00C7B7',
    icon: <Netlify />,
  },
  {
    name: 'Heroku',
    type: 'hosting',
    description: 'Where I deploy my servers',
    website: 'https://www.heroku.com/',
    colour: '#430098',
    icon: <Heroku />,
  },
  {
    name: 'Nest',
    type: 'framework',
    description: 'My favourite framework for building APIs with Typescript',
    website: 'https://nestjs.com/',
    colour: '#E0234E',
    icon: <Nestjs />,
  },
  {
    name: 'Rush',
    type: 'tool',
    description: 'Helpful tool for managing monorepos',
    website: 'https://rushjs.io/',
    colour: '#c95228',
    icon: (
      <svg
        className="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Volta',
    type: 'tool',
    description: 'Javascript toolchain management',
    website: 'https://volta.sh/',
    article: '/blog/hyho-volta',
    colour: '#2a7886',
    icon: (
      <svg
        className="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Heroicons',
    type: 'graphics',
    description: 'SVG icons in two sizes',
    website: 'https://heroicons.com/',
    colour: '#6d28d9',
    icon: (
      <svg
        className="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Simple Icons',
    type: 'graphics',
    description: 'SVG icons for popular brands',
    website: 'https://simpleicons.org/',
    colour: '#111111',
    icon: <Simpleicons />,
  },
  {
    name: 'Freetrade',
    type: 'money',
    description: 'Investing!',
    website: 'https://freetrade.io/',
    affiliateLink: 'https://magic.freetrade.io/join/jamie/ef0b7fe2',
    colour: '#f7618b',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-6 w-6"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-14a3 3 0 00-3 3v2H7a1 1 0 000 2h1v1a1 1 0 01-1 1 1 1 0 100 2h6a1 1 0 100-2H9.83c.11-.313.17-.65.17-1v-1h1a1 1 0 100-2h-1V7a1 1 0 112 0 1 1 0 102 0 3 3 0 00-3-3z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Finimize',
    type: 'money',
    description: 'Financial advice',
    website: 'https://www.finimize.com/',
    colour: '#00b2ff',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-6 w-6"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-14a3 3 0 00-3 3v2H7a1 1 0 000 2h1v1a1 1 0 01-1 1 1 1 0 100 2h6a1 1 0 100-2H9.83c.11-.313.17-.65.17-1v-1h1a1 1 0 100-2h-1V7a1 1 0 112 0 1 1 0 102 0 3 3 0 00-3-3z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Feedback Fish',
    type: 'tool',
    description: 'How I collect feedback from my apps',
    website: 'https://feedback.fish/',
    colour: '#ff6903',
    icon: (
      <svg
        className="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
]
