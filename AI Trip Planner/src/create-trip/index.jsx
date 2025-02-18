import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AI_PROMT, SelectBudgetOption, SelectTravelesList } from "@/constants/Option";
import { chatSession } from "@/service/AIModal";
import React, { useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { FaGoogle } from "react-icons/fa";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { doc, setDoc } from "firebase/firestore"; 
import { db } from "@/service/Firebase";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from "react-router-dom";



function CreateTrip() {

  const [place, setPlace] = useState();
  const [formData, setFormData] = useState({});
  const [openDialogeBox, setOpenDialogeBox] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleInputChange =(name,value)=>{
    
        setFormData({
            ...formData,
            [name]:value
        })
  }
  // useEffect(()=>{
  //   console.log('this is from useEffect',formData);
  // },[formData])


  const login = useGoogleLogin({
    onSuccess:(codeResp)=>getUserProfile(codeResp),
   
    onError:(error)=>console.log(error)
  })
  
  const SaveAiTrip=async (TripData)=>{

    setLoading(true);
    const user = JSON.parse(localStorage.getItem('user'));
    const docId = Date.now().toString();
    // Add a new document in collection "cities"
    await setDoc(doc(db, "AItrip", docId), {
      useSelection:formData,
      tripData:JSON.parse(TripData),
      userEmail:user?.email,
      Id:docId,
    });
    setLoading(false);
    navigate('/view-trip/'+docId);
  }

  const OnGenerateTrip=async ()=>{

    const user = localStorage.getItem('user');
    if(!user){
      setOpenDialogeBox(true);
      return;
    }

    if( formData?.NoOfDays > 10 || !formData?.location || !formData?.Budget || !formData?.Traveller){
       toast("Please fill all details")
        return;
    }
   
    setLoading(true);
    const FINAL_PROMOT = AI_PROMT
    .replace('{location}',formData?.location?.label)
    .replace('{totalDays}',formData?.NoOfDays)
    .replace('{budget}',formData?.Budget)
    .replace('{traveller}',formData?.Traveller)
  
    console.log(FINAL_PROMOT);

    const result = await chatSession.sendMessage(FINAL_PROMOT);
    console.log("text from gemini",result.response.text());
    setLoading(false);
    SaveAiTrip(result.response?.text());
    
  }

  const getUserProfile = (tokenInfo)=>{
    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo.access_token}`,{
      headers:{
        Authorization:`Bearer ${tokenInfo?.access_token}`,
        Accept:'Application/json'
      }
    }).then((resp)=>{
      console.log(resp);
      localStorage.setItem('user',JSON.stringify(resp.data));
      setOpenDialogeBox(false);
      OnGenerateTrip();
    })
   
  }
  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10">
      <h2 className="font-bold text-3xl">Tell us your travel preferences 🏕️🌴</h2>
      <p className="mt-3 text-gray-500 text-xl">
        Just provide some basic information, and our trip planner will generate
        a customized itinerary based on your preferences.
      </p>

      <div className="mt-20 flex flex-col gap-10">
        <div>
          <h2 className="text-xl my-3 font-medium">
            What is destination of choice?{" "}
          </h2>
          <GooglePlacesAutocomplete
                apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
                selectProps={{
                    place,
                    onChange:(v)=>
                        {setPlace(v);handleInputChange('location',v)}
                
                }}
                />
        </div>

        <div>
          <h2 className="text-xl my-3 font-medium">
            How many days are you planning your trip{" "}
          </h2>
          <Input placeholder={"Ex.3"} type="number" 
          
          onChange={(e)=>{handleInputChange('NoOfDays',e.target.value)}} />
        </div>

        <div>
          <h2 className="text-xl my-3 font-medium">What is Your Budget? </h2>
          <div className="grid grid-cols-3 gap-5 mt-5">
            {SelectBudgetOption.map((item, index) => (
              <div
                key={index}
                onClick={()=>{handleInputChange('Budget',item.title)}}
                className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer
                    ${formData?.Budget === item.title && 'border-black shadow-lg'}`}
              >
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <h2 className="text-sm text-gray-500">{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl my-3 font-medium">
            Who do you plan on traveling with on your next adveture?
          </h2>
          <div className="grid grid-cols-3 gap-5 mt-5">
            {SelectTravelesList.map((item, index) => (
              <div
                key={index}
                onClick={()=>{handleInputChange('Traveller',item.people)}}
                className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer
                    ${formData?.Traveller == item.people && 'border-black shadow-md'}`}
              >
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <h2 className="text-sm text-gray-500">{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="my-10 justify-end flex">
        {
          
          <Button disabled={loading} 
          onClick={OnGenerateTrip} className>
            {
              loading
              ?<h1>AI is working on it .... <AiOutlineLoading3Quarters className="h-7 w-7 animate-spin"/></h1>
              :'Generate Trip'
            }
            </Button>
        }
       
      </div>
      <Dialog open={openDialogeBox}>
      
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <img src="/logo.svg"/>
              <h2 className="font-bold text-lg mt-7">Sign In With Google</h2>
              <p>Sign in to the App with Google authentication securely</p>
              <Button 
              onClick={login}
              className="w-full mt-5 flex gap-5 items-center">
                <FaGoogle className="h-7 w-7"/>
                Sign in With Google</Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      

    </div>
  );
}

export default CreateTrip;
