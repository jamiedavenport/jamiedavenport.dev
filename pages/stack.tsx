import Layout from 'components/Layout'
import StackItem from 'components/StackItem'
import { Stack, stack } from 'lib/stack'
import { GetStaticProps } from 'next'
import React from 'react'

type Props = {
  stack: Stack
}

const StackPage: React.FC<Props> = ({ stack }) => {
  return (
    <Layout title="Stack">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-max gap-5 md:px-5">
        {stack.map((tool) => (
          <StackItem key={tool.name} tool={tool} />
        ))}
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const shuffledStack = stack.sort(() => 0.5 - Math.random())

  return {
    props: {
      stack: shuffledStack,
    },
  }
}

export default StackPage
