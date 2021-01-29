import React from 'react'
import ColourBar from 'components/ColourBar'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Head from 'next/head'
import Container from './Container'

type Props = {
  title: string
}

const Layout: React.FC<Props> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-gray-200">
        <ColourBar />
        <div className="space-y-10">
          <Container>
            <Header />
          </Container>

          <div>{children}</div>

          <Container>
            <Footer />
          </Container>
        </div>
      </div>
    </>
  )
}

export default Layout
