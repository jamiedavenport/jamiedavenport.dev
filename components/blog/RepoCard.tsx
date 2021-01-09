import React from 'react'
import { Octokit } from '@octokit/rest'
import { useQuery } from 'react-query'

const octokit = new Octokit()

type Props = {
  owner: string
  repo: string
}

type Repo = {
  name: string
  owner: string
  stars: number
  url: string
  description: string
  language: string
}

const fetchRepoData = async (owner: string, repo: string): Promise<Repo> => {
  const resp = await octokit.repos.get({
    owner,
    repo,
  })

  // TODO: Assert the resp status

  const {
    stargazers_count,
    name,
    owner: ownerObj,
    html_url,
    description,
    language,
  } = resp.data

  return {
    name,
    owner: ownerObj.login,
    stars: stargazers_count,
    url: html_url,
    description,
    language,
  }
}

const RepoCard: React.FC<Props> = ({ owner, repo }) => {
  const { isError, data } = useQuery(['repo', owner, repo], () =>
    fetchRepoData(owner, repo)
  )

  if (isError)
    return (
      <div className="bg-red-600 rounded-lg text-center text-red-300 px-4 py-2">
        Something went wrong 😢
      </div>
    )

  return (
    <a
      className="no-underline"
      href={data?.url ?? '#'}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="px-4 py-2 bg-white rounded-lg cursor-pointer hover:bg-gray-50 space-y-4 dark:bg-gray-700 dark:hover:bg-gray-800 dark:text-white">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row md:space-x-2 md:items-baseline">
            <div className="text-sm text-gray-400">{owner}</div>
            <div className="hidden text-gray-400 md:block">/</div>
            <div className="text-2xl font-bold">{repo}</div>
          </div>
          <div className="flex flex-col md:flex-row-reverse md:space-x-4 md:space-x-reverse">
            <div>⭐️ {data?.stars ?? '...'}</div>
            <div>🧑🏻‍💻 {data?.language ?? '...'}</div>
          </div>
        </div>
        <div>{data?.description ?? 'Loading...'}</div>
      </div>
    </a>
  )
}

export default RepoCard
