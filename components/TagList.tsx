import React from 'react'
import Tag from './Tag'

interface Props {
  tags: string[]
}

const TagList: React.FC<Props> = ({ tags }) => {
  return (
    <div>
      {tags.map((t) => (
        <span className="mr-2 mb-2" key={t}>
          <Tag tag={t} />
        </span>
      ))}
    </div>
  )
}

export default TagList
