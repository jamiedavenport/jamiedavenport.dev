import React from 'react'

const FullStop: React.FC = () => (
  <span className="text-cyan-600 font-bold">.</span>
)

const Fact: React.FC = ({ children }) => (
  <div className="leading-none">
    {children}
    <FullStop />
  </div>
)

const Intro: React.FC = () => {
  return (
    <div className="text-4xl space-y-5 md:space-y-10">
      <Fact>
        <b>Software Engineer</b> based in the <b>UK</b>
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
