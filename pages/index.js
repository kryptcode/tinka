import Head from 'next/head'
import Header from '../components/Header'
import Main from '../components/Main'

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Online Shopping For Men - Tinka</title>
        <meta name="description" content="Online Shopping For Men" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <Header />
      <Main />
      
    </div>
  )
}
