import React from 'react'

type StatProps = {
  title: string
  value?: string
  isLoading?: boolean
  isError?: boolean
}

const Stat: React.FC<StatProps> = ({ title, value, isLoading, isError }) => {
  let body = value
  if (isLoading) {
    body = '...'
  } else if (isError) {
    body = '!'
  }

  return (
    <div className="flex flex-col flex-1 items-center font-mono space-y-2">
      <div className="text-5xl font-black leading-none">{body}</div>
      <div className="text-gray-600 leading-none">{title}</div>
    </div>
  )
}

export default Stat
