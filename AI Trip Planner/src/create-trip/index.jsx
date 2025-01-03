import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SelectBudgetOption, SelectTravelesList } from "@/constants/Option";
import React, { useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

function CreateTrip() {

  const [place, setPlace] = useState();
  const [formData, setFormData] = useState([]);

  const handleInputChange =(name,value)=>{
    
        setFormData({
            ...formData,
            [name]:value
        })
  }
  useEffect(()=>{
    console.log('this is from useEffect',formData);
  },[formData])

  const OnGenerateTrip=()=>{
    if( formData?.NoOfDays > 10){
        console.log("Please Enter Day with in 10 days")
        return;
    }
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
          <Input placeholder={"Ex.3"} type="number" onChange={(e)=>{handleInputChange('NoOfDays',e.target.value)}} />
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
        <Button onClick={OnGenerateTrip} className>Generate Trip</Button>
      </div>
    </div>
  );
}

export default CreateTrip;
