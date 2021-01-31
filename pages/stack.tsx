import Layout from 'components/Layout'
import StackItem from 'components/StackItem'
import { stack } from 'lib/stack'
import React from 'react'

const shuffledStack = stack.sort(() => 0.5 - Math.random())

const StackPage: React.FC = () => {
  return (
    <Layout title="Stack">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-max gap-5 md:px-5">
        {shuffledStack.map((tool) => (
          <StackItem key={tool.name} tool={tool} />
        ))}
      </div>
    </Layout>
  )
}

export default StackPage
