import React from 'react'

interface Props {
  tag: string
}

const Tag: React.FC<Props> = ({ tag }) => {
  return (
    <span className="bg-gray-800 text-white text-xs py-1 px-2 rounded-xl font-bold dark:bg-gray-100 dark:text-gray-800">
      {tag}
    </span>
  )
}

export default Tag
