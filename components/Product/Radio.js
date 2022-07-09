import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'

const Radio = () => {
    let [plan, setPlan] = useState('medium')

    return (
        <RadioGroup value={plan} onChange={setPlan}  className='flex space-x-6 my-10'>
          <RadioGroup.Option value="small">
            {({ active, checked }) => (
              <span 
              className={`
                ${checked ? 'size-btn ' : 'size-btn'}
                ${active ? 'text-[#4a00e0] border-[#4a00e0]  ' : ''}
                h-4 w-4 rounded-full`
                }
              >S</span>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value="medium">
            {({ active, checked }) => (
              <span 
              className={`
                ${checked ? 'size-btn ' : 'size-btn'}
                ${active ? 'text-[#4a00e0] border-[#4a00e0]  ' : ''}
                h-4 w-4 rounded-full`
                }
              >M</span>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value="large">
            {({ active, checked }) => (
              <span 
              className={`
                ${checked ? 'size-btn ' : 'size-btn'}
                ${active ? 'text-[#4a00e0] border-[#4a00e0]  ' : ''}
                h-4 w-4 rounded-full`
                }
              >L</span>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value="xl">
            {({ active, checked }) => (
              <span 
              className={`
                ${checked ? 'size-btn ' : 'size-btn'}
                ${active ? 'text-[#4a00e0] border-[#4a00e0]  ' : ''}
                h-4 w-4 rounded-full`
                }
              >XL</span>
            )}
          </RadioGroup.Option>
        </RadioGroup>
      )
}

export default Radio