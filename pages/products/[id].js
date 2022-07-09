import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '../../components/Header'
import Radio from '../../components/Product/Radio';

const Product = ({ product, title }) => {
  const router = useRouter()
  return (
    <div>
      <Head>
            <title>{title} </title>
            <meta name="description" content="Online Shopping For Men" />
            <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      
      <Header />

      <div className='py-6 bg-gray-200 text-sm text-center font-medium'>
          <span className='cursor-pointer' onClick={() => router.push('/')}>Home</span>
          <span className='mx-2'>/</span>
          <span className='cursor-pointer' onClick={() => router.push('/collections')}>
              Collections
          </span>
          <span className='mx-2'>/</span>
          <span className='text-gray-400'>
              {product.name}
          </span>
      </div>

      <div className='flex flex-col md:flex-row  md:w-[50%] md:space-x-6 py-8 mx-auto '>
        <div className='flex-1'>
          <img src={product.imageURL} className='h-auto w-full object-contain' alt="" />
        </div>
        <div className='flex-1 px-5 md:pb-10 '>
          <h5 className='text-2xl font-semibold mb-3 md:mb-6 mt-5'> 
            {product.name}
          </h5>
          <p className='text-gray-500 mb-3'>
            {product.brand}
          </p>
          <p className='text-xl font-semibold mb-6'>
          &#8358; {' '} {product.amount}
          </p>
          <div className='font-semibold mb-8 '>
            <p>Select Size <span className='ml-3 text-[#4a00e0] font-thin text-sm hover:underline cursor-pointer '>Size Chart</span> </p>
          </div>
          <div className='mb-6'>
            <Radio />
          </div>
          <div className='flex justify-between md:justify-start space-x-5'>
            <button className='py-2 px-6 flex-1 rounded-md border-2 text-[#4a00e0] border-[#4a00e0]'>
              Wishlist
            </button>
            <button className='py-2 px-6 rounded-md flex-1  main-btn text-white '> 
              Add to Cart
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Product

export async function getServerSideProps({ query, req }) {
    const data = await fetch('https://jsonkeeper.com/b/OKHX').then(res => res.json())
    const slug = query.id
    const product = data.find((product) => product.id === slug)

    return {
        props: {
          title: `Tinka | ${product.name}`,
          product,
        },
    }
}