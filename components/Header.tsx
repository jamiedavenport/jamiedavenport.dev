import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import ModeToggle from './ModeToggle'

const Header: React.FC = () => {
  return (
    <div className="space-y-2">
      <div className="flex flex-row justify-between items-center">
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <ModeToggle />
      </div>
      <div>
        <Link href="/stack">
          <a className="font-bold hover:text-indigo-400">Stack</a>
        </Link>
      </div>
    </div>
  )
}

export default Header
