import React from 'react'
import { Link } from 'react-router-dom'
import HotelCardIteme from './HotelCardItem'

const Hotel = ({trip}) => {
    
  return (
    <div>
    <h2 className='font-bold text-xl mt-5'>Hotel Recommendations</h2>
    <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
        
        {trip?.tripData?.travelPlan?.hotels?.map((hotel,index)=>(
           <HotelCardIteme key={index} hotel={hotel}></HotelCardIteme> 
        ))}
    </div>
    </div>
  )
}

export default Hotel