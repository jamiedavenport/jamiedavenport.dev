import { Project } from 'lib/project'
import React from 'react'
import TagList from './TagList'

interface Props {
  project: Project
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  const { name, description, tags, link } = project
  return (
    <a
      className="flex-1"
      href={link}
      target="__blank"
      rel="noreferrer noopener"
    >
      <div className="rounded-lg h-full bg-white p-6 space-y-2 shadow transition hover:shadow-lg dark:bg-gray-800">
        <h3 className="text-2xl font-bold font-mono leading-none">{name}</h3>
        <p className="text-gray-700 leading-none text-sm dark:text-gray-200">
          {description}
        </p>
        <TagList tags={tags} />
      </div>
    </a>
  )
}

export default ProjectCard
