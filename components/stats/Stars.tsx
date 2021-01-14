import { useStars } from 'hooks/useStars'
import React from 'react'
import Stat from './Stat'

const Stars: React.FC = () => {
  const { isLoading, isError, count } = useStars()

  return (
    <Stat
      title="Github Stars"
      isLoading={isLoading}
      isError={isError}
      value={count?.toString()}
    />
  )
}

export default Stars
