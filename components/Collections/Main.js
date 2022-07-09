import { useRouter } from 'next/router'
import React from 'react'
import Filter from './Filter'

const Main = ({ data }) => {
  const router = useRouter()
  
  return (
    <div className='w-full pt-10 px-5'>
      <div className='flex justify-between items-center mb-5'>
        <h4 className='text-lg font-medium'>
          Collections
        </h4>
        <Filter />
      </div>

      <div className='grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4'>
        {
          data.map(item => {
            const id = item.id
            return (
            <div 
              key={id} className='bg-white pb-3 shadow-md rounded-md cursor-pointer hover:shadow-xl'
              onClick={() => router.push(`/products/${id}`)}
            >
              <div>
                <img src={item.imageURL} className='h-[16rem] w-full object-contain' alt="" />
              </div>
              <div className='text-sm pl-3 mt-2'>
                <h6 className='font-semibold mb-1'>
                {item.brand}
                </h6>
                <p className='text-gray-500 mb-1'>
                  {item.name}
                </p>
                <p>
                  &#8358; {' '}
                  {item.amount}
                </p>
              </div>
            </div>
          )})
        } 
      </div>
    </div>
  )
}

export default Main