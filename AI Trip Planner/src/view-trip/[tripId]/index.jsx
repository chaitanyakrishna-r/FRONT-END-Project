import { db } from '@/service/Firebase';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner';
import { doc, getDoc } from "firebase/firestore"; 
import InfoSection from '../components/InfoSection';
import Hotel from '../components/Hotel';
import Itinerary from '../components/Itinerary';
import Footer from '../components/Footer';


function ViewTrip() {
  const {tripId} = useParams();
  const [tripData, setTripData] = useState([]);

  useEffect(()=>{
    tripId && GetTripData();
  },[tripId])


  const GetTripData=async()=>{
    const docRef = doc(db,'AItrip',tripId);
    const docSnap = await getDoc(docRef);
    if(docSnap.exists()){
      console.log("documents: ", docSnap.data());
      setTripData(docSnap.data());
     
    }else{
      console.log("no data found"); 
      toast("No trip Found! ");
    }
  }

  return (
    <div className='p-10 md:px-20 lg:px-44 xl:px-56'>

      {/* information section */}
      <InfoSection trip={tripData} />

      {/*Recommended Hotels*/}
      <Hotel trip={tripData}/>

      {/* itinerary*/}
      <Itinerary trip={tripData}/>

      {/* Footer*/}
      <Footer trip={tripData} />

    </div>
  )
}

export default ViewTrip