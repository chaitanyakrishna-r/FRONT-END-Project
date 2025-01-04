import { db } from '@/service/Firebase';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner';
import { doc, getDoc } from "firebase/firestore"; 


function ViewTrip() {
  const {tripId} = useParams();


  useEffect(()=>{
    tripId && GetTripData();
  },[tripId])


  const GetTripData=async()=>{
    const docRef = doc(db,'AItrip',tripId);
    const docSnap = await getDoc(docRef);
    if(docSnap.exists()){
      console.log("documents: ", docSnap.data());
      
    }else{
      console.log("no data found"); 
      toast("No trip Found! ");
    }
  }

  return (
    <div>ViewTrip :{tripId}</div>
  )
}

export default ViewTrip