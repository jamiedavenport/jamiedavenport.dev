import React from 'react'

const FullStop: React.FC = () => (
  <span className="text-indigo-400 font-bold">.</span>
)

const Fact: React.FC = ({ children }) => (
  <div className="leading-none">
    {children}
    <FullStop />
  </div>
)

interface Props {
  location: string
}

const Intro: React.FC<Props> = () => {
  return (
    <div className="text-4xl space-y-5 md:space-y-10">
      <Fact>
        <b>Software Engineer</b> living in the{' '}
        <b className="whitespace-nowrap">UK</b>
      </Fact>
    </div>
  )
}

export default Intro
