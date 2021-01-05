import React, { useEffect } from 'react'
// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app'
import * as Fathom from 'fathom-client'

import '../styles/tailwind.css'
import { useRouter } from 'next/dist/client/router'
import { ThemeProvider } from 'next-themes'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    Fathom.load('EAZZKNYE', {
      includedDomains: ['jamiedavenport.dev'],
    })

    function onRouteChangeComplete() {
      Fathom.trackPageview()
    }
    // Record a pageview when route changes
    router.events.on('routeChangeComplete', onRouteChangeComplete)

    // Unassign event listener
    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete)
    }
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="system" attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
