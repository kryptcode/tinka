import React from 'react'

const Sidebar = () => {
  return (
    <div className='w-[25%] hidden md:inline-block'>
        <h5>
            Filters
        </h5>
        <div>
            <h5>
                Brand
            </h5>
            <input type="checkbox" />
        </div>
    </div>
  )
}

export default Sidebar