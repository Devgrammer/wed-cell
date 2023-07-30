'use client'
import { useRouter } from 'next/navigation'


const Dashboard = () => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.replace('/dashboard/my-wedding')

  }
  return (
    <>
      <div className="wrapper flex flex-col  w-full p-16 h-1/2 text-gray-600 justify-center items-center text-3xl font-bold text-center">
        <div className=''>
          Welcome to Home Page
        </div>
        <button className='w-fit px-2 h-12 bg-red-300 rounded-md text-white text-md' onClick={ handleClick }>
          Click here to  Visit Dashboard
        </button>
      </div>
    </>
  )
}

export default Dashboard