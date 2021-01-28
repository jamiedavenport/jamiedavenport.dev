import { moiUrl } from 'lib/moi'
import { useQuery } from 'react-query'

interface StarsHook {
  isLoading: boolean
  isError: boolean
  count: number | null
}

export const useFollowers = (): StarsHook => {
  const { isLoading, isError, data } = useQuery(
    'followers',
    async () => {
      const res = await fetch(`${moiUrl}/accounts/twitter`)
      if (!res.ok) throw new Error('something went wrong')
      return await res.json()
    },
    {
      retry: false,
    }
  )

  const count = !isLoading && !isError ? data.followers : null

  return {
    isLoading,
    isError,
    count,
  }
}
