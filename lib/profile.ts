import { moiUrl } from './moi'

export interface Profile {
  location: string
}

export const getProfile = async (): Promise<Profile> => {
  const resp = await fetch(`${moiUrl}`)

  if (!resp.ok) {
    throw new Error('something went wrong')
  }

  const body = await resp.json()

  return {
    location: body.location,
  }
}
