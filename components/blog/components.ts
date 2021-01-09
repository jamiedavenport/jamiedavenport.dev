import Achievement from './Achievement'
import dynamic from 'next/dynamic'
import Link from './Link'

// TODO: Is there a better way around this?
const RepoCard = dynamic(() => import('./RepoCard'), { ssr: false })

export default {
  Achievement: Achievement,
  RepoCard: RepoCard,
  a: Link,
}
