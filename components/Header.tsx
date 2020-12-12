import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import ModeToggle from './ModeToggle'

const Header: React.FC = () => {
  return (
    <div className="space-y-5 md:space-y-0">
      <div className="flex flex-row justify-between items-center">
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <ModeToggle />
      </div>
    </div>
  )
}

export default Header
