import Head from 'next/head'
import Main from '../components/Collections/Main'
import Nav from '../components/Collections/Nav'
import Sidebar from '../components/Collections/Sidebar'
import Header from '../components/Header'

const collections = ({ data }) => {
    
  return (
    <div>
        <Head>
            <title>Collections</title>
            <meta name="description" content="Online Shopping For Men" />
            <link rel="icon" href="/favicon-32x32.png" />
        </Head>
        
        <Header />
        <Nav />
        <div className='flex'>
            <Sidebar  />
            <Main data={data} />
        </div>

    </div>
  )
}

export default collections

export async function getServerSideProps() {
  const xi = await fetch('https://jsonkeeper.com/b/OKHX').then(res => res.json())

  let data = xi
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)

  return {
    props: {
      data,
    },
  }
} 