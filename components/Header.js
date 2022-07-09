import { useRouter } from 'next/router'
import { CartIcon, LogoIcon, UserIcon, WishlistIcon } from '../icons'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useState } from 'react'

const Header = () => {
  const router = useRouter()
  const { data: session } = useSession()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='px-6 py-4 flex justify-between items-center relative bg-white'>
        <div className='flex items-center space-x-3 cursor-pointer' onClick={() => router.push('/')} >
            <LogoIcon />
            <div className='text-2xl font-medium'>
                tinka
            </div>
        </div>

        <div className='flex space-x-5 items-center'>
            <div className='cursor-pointer hover:opacity-80'>
              <WishlistIcon />
            </div>
            <div className='cursor-pointer hover:opacity-80'>
              <CartIcon />
            </div>
            <div className='cursor-pointer hover:opacity-80' onClick={() => setIsOpen(!isOpen)}>
              <UserIcon />
            </div>
        </div>

        {
          isOpen && (
            <div className='absolute p-7 rounded-lg shadow-md divide-y-2 bg-white top-16 right-6 text-sm'>
                <div>
                  
                  {
                    session ? (
                      <div >
                        <h6 className='font-bold mb-1 '>
                          Hello
                        </h6>
                        <p className='mb-7'>
                          {session.user.email}
                        </p>
                      </div>
                    ) : (
                      <div>
                        <h6 className='font-bold mb-1.5 '>
                          Welcome
                        </h6>
                        <p className='mb-1.5'>
                          To access wishlist or cart
                        </p>
                        <button className='border-[2px] border-[#4a00e0] text-[#4a00e0] font-medium px-2.5 py-[2px] rounded-md mb-7' onClick={() => signIn()}>
                          Sign In
                        </button>
                      </div>
                    )
                  }
                  
                </div>

                <div className='space-y-3 pt-2'>
                  <p className='cursor-pointer'>Collections</p>
                  <p className='cursor-pointer'>Wishlist</p>
                  <p className='cursor-pointer'>Cart</p>
                  {
                    session && <p className='cursor-pointer' onClick={() => signOut()} >Sign Out</p>
                  }
                </div>
            </div>
          )
        }

        
    </div>
  )
}

export default Header