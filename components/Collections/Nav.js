import { useRouter } from "next/router"


const Nav = () => {
    const router = useRouter()
  return (
    <div className='py-6 bg-gray-200 text-sm text-center font-medium'>
        <span className='cursor-pointer' onClick={() => router.push('/')}>Home</span>
        <span className='mx-2'>/</span>
        <span className='text-gray-400'>
            Collections
        </span>
    </div>
  )
}

export default Nav