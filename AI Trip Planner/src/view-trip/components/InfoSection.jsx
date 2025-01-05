import { Button } from '@/components/ui/button'
import React from 'react'
import { IoIosSend } from "react-icons/io";

function InfoSection({trip}) {
  return (
    <div>
        <img src="/pexels-andreimike-1271619.jpg" alt="imgae"
        className='h-[340px] w-full object-cover rounded-xl' />
        <div className='flex flex-col gap-2 my-5'>
            <h2 className='font-bold text-2xl '> {trip?.useSelection?.location?.label} </h2>
            <div className='flex justify-between items-center'>
                <div className='flex gap-5'>
                    <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md '>📅 {trip?.useSelection?.NoOfDays} Days</h2>
                    <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>💷{trip?.useSelection?.Budget} Budget</h2>
                    <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>🥂
                        No of Traveller: {trip?.useSelection?.Traveller}</h2>
                </div>
                <div>
                    {/* share button */}
                    <Button className=""><IoIosSend/></Button>
                </div>
            </div>
        </div>
    </div>
  )
}


export default InfoSection