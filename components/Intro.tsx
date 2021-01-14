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

const Intro: React.FC<Props> = ({ location }) => {
  return (
    <div className="text-4xl space-y-5 md:space-y-10">
      <Fact>
        <b>Software Engineer</b> based in{' '}
        <b className="whitespace-nowrap">{location}</b>
      </Fact>
      <Fact>
        Currently at <b>Infinity Works</b>
      </Fact>
      <Fact>
        Passionate about <b>Open Source</b>
      </Fact>
    </div>
  )
}

export default Intro
