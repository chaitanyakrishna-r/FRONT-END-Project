
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom';

const PlaceCardVisit = ({placeInfo}) => {
  const [photoUrl, setPhotoUrl] = useState();
      useEffect(()=>{
        placeInfo&& GetPlacePhoto();
      },[placeInfo]) 
  
      const GetPlacePhoto=async()=>{
         
          const data =  {
              textQuery:placeInfo.placeName
          }
          
          const result = await GetPlaceDetails(data).then(resp=>{
               
  
             const PhotoUrl = PHOTO_REF_URL.replace('{NAME}',resp.data.places[0].photos[3].name);
             setPhotoUrl(PhotoUrl);
          });
      }
  

  return (
    <Link to={'https://www.google.com/maps/search/?api=1&query='+placeInfo?.placeName} target='_blank' >
        <div className='border rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-all hover:shadow-md cursor-pointer'>
            <img src={photoUrl?photoUrl:'/download.jpg'} alt=""  className=' object-cover w-[150px] h-[150px] rounded-xl'/>
            <div>
                <h2 className='font-bold text-lg'>{placeInfo.placeName}</h2>
                <p className='text-sm text-gray-400'>{placeInfo.placeDetails}</p>
                <h2 className=' text-red-500 mt-3'>🕛 {placeInfo?.timeToTravel} Minutes</h2>
            
            </div>
        </div>
    </Link>
  )
}

export default PlaceCardVisit