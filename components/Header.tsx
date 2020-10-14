import React, { useState } from 'react'
import DesktopNav from './DesktopNav'
import Logo from './Logo'
import MobileNav from './MobileNav'
import MobileNavButton from './MobileNavButton'
import Link from 'next/link'

const Header: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <div className="space-y-5 md:space-y-0">
      <div className="flex flex-row justify-between items-center">
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <div className="hidden md:block">
          <DesktopNav />
        </div>
        <div className="md:hidden">
          <MobileNavButton
            isOpen={isNavOpen}
            onClick={() => setIsNavOpen(!isNavOpen)}
          />
        </div>
      </div>
      <div className="md:hidden">
        <MobileNav isOpen={isNavOpen} />
      </div>
    </div>
  )
}

export default Header
