import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { AscOrderState, DescOrderState } from '../atoms/filterAtoms'
import Main from '../components/Collections/Main'
import Nav from '../components/Collections/Nav'
import Sidebar from '../components/Collections/Sidebar'
import Header from '../components/Header'


const collections = ({ info }) => {
  const asc = useRecoilValue(AscOrderState)
  const desc = useRecoilValue(DescOrderState)

  const [foo, setFoo] = useState(info)
  
  function handleChange() {
    if(asc) {
    let data = info.map(value => ({ value, sort: value.amount }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    setFoo(data)
  } else if(desc) {
    let data = info.map(value => ({ value, sort: value.amount }))
    .sort((a, b) => b.sort - a.sort)
    .map(({ value }) => value)
    setFoo(data)
  }

  }

  useEffect(() => {
    handleChange()
  }, [asc, desc])
  


  

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
            <Main data={foo} />
        </div>

    </div>
  )
}

export default collections

export async function getServerSideProps() {
  const xi = await fetch('https://jsonkeeper.com/b/OKHX').then(res => res.json())

  let info = xi
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)

  return {
    props: {
      info,
    },
  }
} 