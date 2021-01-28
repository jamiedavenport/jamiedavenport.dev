import { moiUrl } from 'lib/moi'
import { useQuery } from 'react-query'

interface StarsHook {
  isLoading: boolean
  isError: boolean
  count: number | null
}

export const useStars = (): StarsHook => {
  const { isLoading, isError, data } = useQuery('stars', async () => {
    const res = await fetch(`${moiUrl}/accounts/github`)
    if (!res.ok) throw new Error('something went wrong')
    return await res.json()
  })

  const count = !isLoading && !isError ? data.stars : null

  return {
    isLoading,
    isError,
    count,
  }
}
