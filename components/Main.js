import { useRouter } from 'next/router'

const Main = () => {
  const router = useRouter()
  return (
    <div className='h-[88vh] text-center pt-36'>
        <h1 className='text-6xl font-semibold mb-8'>
        Wear better, look better.
        </h1>
        <h6 className='mb-8'>
        Don't you just love being in apparel?
        </h6>
        <button className='main-btn text-white py-2.5 px-8 rounded-md' onClick={() => router.push('/collections')}>
            Shop Now
        </button>
    </div>
  )
}

export default Main