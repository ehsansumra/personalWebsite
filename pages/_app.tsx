import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import Transition from '../components/transition'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
        <Component {...pageProps} />
    </Layout>

  )
}

export default MyApp
