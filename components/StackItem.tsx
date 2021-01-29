import { Tool } from 'lib/stack'
import React from 'react'
import Badge from './stack/Badge'

type Props = {
  tool: Tool
}

const StackItem: React.FC<Props> = ({ tool }) => {
  const { name, description, website, affiliateLink, type } = tool

  const linkClasses =
    'flex flex-row space-x-2 items-center text-blue-700 dark:text-blue-400'

  return (
    <div className={`p-4 rounded-lg space-y-2`}>
      <div className="flex flex-row items-center space-x-2">
        <h1 className="text-xl font-mono font-bold dark:text-white">{name}</h1>
        <Badge type={type} />
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-200">{description}</p>
      {website !== undefined ? (
        <a
          href={website}
          className={linkClasses}
          target="_blank"
          rel="noreferrer noopener"
        >
          <svg
            className="h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
          <span>Website</span>
        </a>
      ) : null}

      {affiliateLink !== undefined ? (
        <a
          href={affiliateLink}
          className={linkClasses}
          target="_blank"
          rel="noreferrer noopener"
        >
          <svg
            className="h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-14a3 3 0 00-3 3v2H7a1 1 0 000 2h1v1a1 1 0 01-1 1 1 1 0 100 2h6a1 1 0 100-2H9.83c.11-.313.17-.65.17-1v-1h1a1 1 0 100-2h-1V7a1 1 0 112 0 1 1 0 102 0 3 3 0 00-3-3z"
              clipRule="evenodd"
            />
          </svg>
          <span>Affiliate Link</span>
        </a>
      ) : null}
    </div>
  )
}

export default StackItem
