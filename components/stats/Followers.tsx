import { useFollowers } from 'hooks/useFollowers'
import React from 'react'
import Stat from './Stat'

const Followers: React.FC = () => {
  const { isLoading, isError, count } = useFollowers()

  return (
    <Stat
      title="Twitter Followers"
      isLoading={isLoading}
      isError={isError}
      value={count?.toString()}
    />
  )
}

export default Followers
