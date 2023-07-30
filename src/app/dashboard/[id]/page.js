'use client'
import {usePathname} from 'next/navigation'
import { MdPrecisionManufacturing } from 'react-icons/md';

const GeneralPage = () => {
    const router=usePathname();
    console.log(router.split('/')[2].substring(1))
  return (
    <div className='flex w-full p-16 h-1/2 text-gray-600 justify-center items-center text-3xl font-bold text-center '>
      <div><MdPrecisionManufacturing size={80}/></div>
      Welcome to the {router.split('/')[2].substring(1)} Page.<br/>It is in Under Construction</div>
  )
}

export default GeneralPage