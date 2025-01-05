import { Button } from '@/components/ui/button'
import React from 'react'
import { FaMapLocation } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const PlaceCardVisit = ({placeInfo}) => {

  return (
    <Link to={'https://www.google.com/maps/search/?api=1&query='+placeInfo?.placeName} target='_blank' >
        <div className='border rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-all hover:shadow-md cursor-pointer'>
            <img src="/download.jpg" alt=""  className='w-[150px] h-[150px] rounded-xl'/>
            <div>
                <h2 className='font-bold text-lg'>{placeInfo.placeName}</h2>
                <p className='text-sm text-gray-400'>{placeInfo.placeDetails}</p>
                <h2 className=' text-red-500 mt-3'>🕛 {placeInfo?.timeToTravel}</h2>
            
            </div>
        </div>
    </Link>
  )
}

export default PlaceCardVisit