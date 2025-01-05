import { Button } from '@/components/ui/button'
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { IoIosSend } from "react-icons/io";



function InfoSection({trip}) {
    const [photoUrl, setPhotoUrl] = useState();
    useEffect(()=>{
       trip&& GetPlacePhoto();
    },[trip]) 

    const GetPlacePhoto=async()=>{
       
        const data =  {
            textQuery:trip?.useSelection?.location?.label
        }
        
        const result = await GetPlaceDetails(data).then(resp=>{
             

           const PhotoUrl = PHOTO_REF_URL.replace('{NAME}',resp.data.places[0].photos[3].name);
           setPhotoUrl(PhotoUrl);
        });
    }

  return (
    <div>
        <img src={photoUrl} alt="imgae"
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