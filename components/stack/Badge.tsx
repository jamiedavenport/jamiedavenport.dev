import { ToolType } from 'lib/stack'
import React from 'react'

type Props = {
  type: ToolType
}

const Badge: React.FC<Props> = ({ type }) => {
  let bg = 'bg-gray-500'
  switch (type) {
    case 'framework':
      bg = 'bg-red-500'
      break
    case 'hosting':
      bg = 'bg-green-500'
      break
    case 'language':
      bg = 'bg-blue-500'
      break
    case 'tool':
      bg = 'bg-yellow-500'
      break
    case 'graphics':
      bg = 'bg-purple-500'
      break
  }

  return (
    <span
      className={`${bg} text-xs font-bold text-white leading-none uppercase p-1`}
    >
      {type}
    </span>
  )
}

export default Badge
