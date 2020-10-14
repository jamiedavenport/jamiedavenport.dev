import React from 'react'

type Props = {
  href?: string
}

const Achievement: React.FC<Props> = ({ children, href }) => {
  const body = (
    <div
      className={`rounded-md bg-yellow-100 p-4 ${
        href && 'hover:bg-yellow-200'
      }`}
    >
      <div className="flex items-center">
        <div className="flex-shrink-0">🎉</div>
        <div className="ml-3">
          <div className="text-sm leading-5 text-yellow-700">{children}</div>
        </div>
      </div>
    </div>
  )

  if (href) {
    return (
      <a href={href} className="block no-underline">
        {body}
      </a>
    )
  }

  return body
}

export default Achievement
