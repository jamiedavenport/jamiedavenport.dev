import React from 'react'

type Props = {
  isOpen: boolean
  onClick: () => void
}

const MobileNavButton: React.FC<Props> = ({ isOpen, onClick }) => {
  let icon = (
    <svg
      className="block h-6 w-6"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  )
  if (isOpen) {
    icon = (
      <svg
        className="block h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    )
  }

  return (
    <button
      aria-label="Menu"
      className="bg-gray-200 hover:bg-gray-300 rounded p-2"
      onClick={onClick}
    >
      {icon}
    </button>
  )
}

export default MobileNavButton
