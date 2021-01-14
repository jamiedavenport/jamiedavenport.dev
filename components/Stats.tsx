import React from 'react'
import Followers from './stats/Followers'
import Stars from './stats/Stars'
import Stat from './stats/Stat'

interface Props {
  posts: number
}

const Stats: React.FC<Props> = ({ posts }) => {
  return (
    <div className="flex flex-col space-y-20 md:space-y-0 md:flex-row bg-gray-300 rounded-lg px-5 py-16 md:py-10">
      <Stars />
      <Followers />
      <Stat title="Blog Posts" value={posts.toString()} />
    </div>
  )
}

export default Stats
