import React from 'react'
import Nav from './Nav'

type Props = {
  isOpen: boolean
}

const MobileNav: React.FC<Props> = ({ isOpen }) => {
  if (!isOpen) return null

  return (
    <div className="bg-gray-200 p-4">
      <Nav
        renderLink={(l) => (
          <a key={l.href} href={l.href}>
            {l.title}
          </a>
        )}
      />
    </div>
  )
}

export default MobileNav
