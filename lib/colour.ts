import hashCode from './hashCode'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../tailwind.config'

const fullConfig = resolveConfig(tailwindConfig)

export const stringToTailwindColour = (s: string): string => {
  const index = Math.abs(hashCode(s))

  const colours = Object.keys(fullConfig.theme.backgroundColor).filter(
    (c) => !['transparent', 'current', 'code'].includes(c)
  )

  return colours[index % colours.length]
}
