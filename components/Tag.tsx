import { stringToTailwindColour } from 'lib/colour'
import React from 'react'

interface Props {
  tag: string
}

const Tag: React.FC<Props> = ({ tag }) => {
  const colour = stringToTailwindColour(tag)

  return (
    <span
      className={`bg-${colour}-500 border border-${colour}-600 text-${colour}-200 text-xs py-1 px-2 rounded-xl font-bold`}
    >
      {tag}
    </span>
  )
}

export default Tag
