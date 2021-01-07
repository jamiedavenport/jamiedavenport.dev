import React from 'react'
import { Octokit } from '@octokit/rest'
import { useQuery } from 'react-query'

const octokit = new Octokit()

type Repo = {
  name: string
  owner: string
  stars: number
  url: string
  description: string
  language: string
}

const fetchRepoData = async (): Promise<Repo> => {
  const resp = await octokit.repos.get({
    owner: 'volta-cli',
    repo: 'volta',
  })

  // TODO: Assert the resp status

  const {
    stargazers_count,
    name,
    owner,
    html_url,
    description,
    language,
  } = resp.data

  return {
    name,
    owner: owner.login,
    stars: stargazers_count,
    url: html_url,
    description,
    language,
  }
}

const RepoCard: React.FC = () => {
  const { isLoading, isError, data } = useQuery('repoKey', fetchRepoData)

  if (isLoading) return <div>Loading...</div>

  if (isError) return <div>Error!!!</div>

  const { name, owner, stars, url, description, language } = data

  return (
    <a
      className="no-underline"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="px-4 py-2 bg-white rounded-lg cursor-pointer hover:bg-gray-50 space-y-4 dark:bg-gray-700 dark:hover:bg-gray-800 dark:text-white">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row md:space-x-2 md:items-baseline">
            <div className="text-sm text-gray-400">{owner}</div>
            <div className="hidden text-gray-400 md:block">/</div>
            <div className="text-2xl font-bold">{name}</div>
          </div>
          <div className="flex flex-col md:flex-row-reverse md:space-x-4 md:space-x-reverse">
            <div>⭐️ {stars}</div>
            <div>🧑🏻‍💻 {language}</div>
          </div>
        </div>
        <div>{description}</div>
      </div>
    </a>
  )
}

export default RepoCard
