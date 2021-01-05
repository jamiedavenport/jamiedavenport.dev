import React from 'react'
import { Octokit } from '@octokit/rest'
import { useQuery } from 'react-query'

const octokit = new Octokit()

type Repo = {
  stars: number
}

const fetchRepoData = async (): Promise<Repo> => {
  const resp = await octokit.repos.get({
    owner: 'volta-cli',
    repo: 'volta',
  })

  // TODO: Assert the resp status

  return {
    stars: resp.data.stargazers_count,
  }
}

const RepoCard: React.FC = () => {
  const { isLoading, isError, data } = useQuery('repoKey', fetchRepoData)

  if (isLoading) return <div>Loading...</div>

  if (isError) return <div>Error!!!</div>

  return <div className="border dark:border-white">{data.stars} 🌟</div>
}

export default RepoCard
