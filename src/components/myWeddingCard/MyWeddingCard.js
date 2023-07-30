'use client'

import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { BsEnvelopePaperHeart } from 'react-icons/bs';
import VendorManager from '../vendorManager/VendorManager';
import { useRouter } from 'next/navigation'


const MyWeddingCard = ({ user1, user2, cover_url, event_time }) => {
  const router = useRouter();

  function getRndColor() {
    return 'hsl(' + (360 * Math.random()) + ',50%,50%)'; // H,S,L
  }

  const theme =['temple', 'forest', 'nature', 'athestic', 'resort', 'garden', 'carnatic','royal']
  return (
    <div className='my-wedding-page-contianer flex flex-col w-full h-100 px-16 py-8 h-100 bg-red-100  '>
      <div className='w-full rounded-t-lg h-96 flex bg-red-300 bg-no-repeat shadow-lg bg-cover shadow-md bg-center bg-origin-border bg-scroll z-10 flex justify-center items-center' style={ { backgroundImage: "url('https://images.unsplash.com/photo-1597157639073-69284dc0fdaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80')" } }>
        <div className="wedding-page-hero-content flex flex-col gap-y-16  ">
          <div className="couple-avatar-wrapper  w-[200px]  relative bottom-12 justify-center left-6">
            <div className="couple-avatar-container w-[96px] h-[96px] border-4 absolute  top-0 right-2 border-red-400 rounded-full flex  bottom-8  z-20  justify-center left-6 items-center text-black text-5xl font-bold bg-cover bg-center bg-no-repeat drop-shadow-2xl " style={ { backgroundImage: "url(https://images.unsplash.com/photo-1574397188309-e83dfe918ecb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)"}}></div>
            <div className="couple-avatar-container w-[96px] h-[96px] rounded-full flex absolute right-0 bg-gray-100 z-10  justify-center items-center text-black text-5xl font-bold border-4 border-red-200 bg-cover bg-center bg-no-repeat drop-shadow-2xl  " style={ { backgroundImage: "url(https://images.unsplash.com/photo-1633104502646-eb5ea88b3190?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80)" } }></div>
          </div>

          <div className="day-left-container text-white flex flex-col items-center gap-y-6 backdrop-blur-sm rounded-lg bg-white/30 p-4 relative top-12">
            <div className="days-left-title font-bold uppercase">Days left</div>
            <div className="time-counter-container flex gap-8 justify-center">
              <div className="time-entity-container flex flex-col items-center">
                <div className="time-value font-bold text-2xl">18</div>
                <div className="time-unit">days</div>
              </div>
              <div className="time-entity-container flex flex-col items-center">
                <div className="time-value font-bold text-2xl">5</div>
                <div className="time-unit">hours</div>
              </div>
              <div className="time-entity-container flex flex-col items-center">
                <div className="time-value font-bold text-2xl">30</div>
                <div className="time-unit">min</div>
              </div>
              <div className="time-entity-container flex flex-col items-center">
                <div className="time-value font-bold text-2xl">55</div>
                <div className="time-unit">sec</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Division */}
      <div className="wedding-profile w-full bg-white rounded-b-lg  min-h-32  flex flex-col shadow-md  p-16 gap-y-8">

        {/* Profile Header */}
        <div className="wedding-profile-header flex flex-col w-full gap-y-4 ">
          <div className="header-level-1-wrapper flex justify-between">
            <div className="profile-name text-3xl font-bold text-black">Aradhna</div>
            <div className="profile-edit"><button className="profile-btn border border-red-600 rounded-md p-1 px-2 box-border text-red-600 ">Edit</button></div>
          </div>
          <div className="wedding-date text-gray-600">
            Wedding Date: <span className='text-black'>24 July, 2023</span>
          </div>
        </div>

        {/* Progress Bar Division */}
        <div className="progress-bar-container p-4">
          <div className="progress-labeler flex justify-between  text-[12px] md:text-sm p-2 text-gray-600 ">
            <div className="progress-label-start">STATUS</div>
            <div className="progress-label-end">LETS GET STARTED</div>
          </div>
          <div className="progress-bar rounded-full w-full h-6 flex bg-gray-300 shadow-md z-10">
            <div className="bar-box  w-[20%] h-6 bg-gradient-to-r from-red-600 to-yellow-600 rounded-full z-20"></div>
          </div>
        </div>

          {/* Stat Row */}
        <div className="progress-stat-container flex justify-evenly">
          <div className="progress-stat-item flex flex-col items-center gap-y-6">
            <div className="stat-fig text-gray-400 text-sm md:text-normal"> <span className='text-black'>12</span> Of 16</div>
            <div className="progress-stat-type text-center uppercase font-semibold md:normal-case  md:font-normal text-[10px] md:text-sm"> Services hired</div>
          </div>
          <div className="progress-stat-item flex flex-col items-center gap-y-6">
            <div className="stat-fig text-gray-400 text-sm md:text-normal"> <span className='text-black'>11</span> Of 16</div>
            <div className="progress-stat-type text-center uppercase font-semibold md:normal-case  md:font-normal text-[10px] md:text-sm"> Task completed</div>
          </div>
          <div className="progress-stat-item flex flex-col items-center gap-y-6">
            <div className="stat-fig text-gray-400 text-sm md:text-normal"> <span className='text-black'>09</span> Of 16</div>
            <div className="progress-stat-type text-center uppercase font-semibold md:normal-case  md:font-normal text-[10px] md:text-sm">Guest attending</div>
          </div>
        </div>

{/* Wedding Theme Division */}
<div className="wedding-theme-console flex flex-col gap-y-4"> 
<div className="wedding-header-title text-gray-400 text-lg">Wedding Theme </div>
<div className="wedding-header-category-console flex justify-evenly relative"> 
{
  theme.slice(0, 4).map((val, index)=>{
    return(
      <div className={`theme-category uppercase  w-fit h-6 px-1 md:w-fit md:h-[50px] px-2 md:px-2 flex box-border  rounded-lg flex justify-center items-center text-[8px] md:text-xl text-white `} style={{backgroundColor:`${getRndColor()}`}}key={`theme-${index}`}> {val}  </div>
    )
  })
}
            <div className="navigation-btn absolute right-[-25px] top-1 md:top-2"><button className="right-btn"><AiOutlineRight color={'#DB3672'} size={ 32 } /></button></div>
            <div className="navigation-btn absolute left-0 top-0 md:top-2"><button className="right-btn"><AiOutlineLeft color={'#DB3672'} size={ 32 } /></button></div>
</div>
</div>

        <div className="quick-invites-container mt-6 flex gap-2 text-[10px] md:text-sm font-regular underline text-bottom items-end text-gray-500"> <span> <BsEnvelopePaperHeart size={20} /></span> QUICK INVITES FOR THE CLOSE ONES </div>

      </div>

      <VendorManager/>
    </div>
  )
}

export default MyWeddingCard