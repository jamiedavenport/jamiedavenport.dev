import React from 'react'
import SocialIcons from './SocialIcons'

const Footer: React.FC = () => {
  return (
    <div className="flex space-y-2 md:space-y-0 flex-col md:flex-row justify-between items-center">
      <div className="text-sm">Jamie Davenport &copy; 2020</div>
      <SocialIcons />
    </div>
  )
}

export default Footer
