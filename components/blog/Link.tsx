import React from 'react'

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement>

const Link: React.FC<Props> = (props) => {
  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

export default Link
