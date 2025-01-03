import { GoogleGenerativeAI } from "@google/generative-ai";

  const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
 
  export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget, Give me a Hotels options list with HotelName, Hotel adddress, Price, hotel image url, geo cooridnates, rating, descriptions and suggest itinerary with placeName, place Details, Place Image Url, Geo Corrdinates, ticket Pricing, Time t travel each fo the location for 3 days with each plan with bets time to visit in JSON format."},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"travelPlan\": {\n    \"location\": \"Las Vegas\",\n    \"duration\": \"3 Days\",\n    \"budget\": \"Cheap\",\n    \"travelers\": \"Couple\",\n    \"hotels\": [\n      {\n        \"hotelName\": \"Circus Circus Hotel & Casino\",\n        \"hotelAddress\": \"2880 S Las Vegas Blvd, Las Vegas, NV 89109\",\n        \"price\": \"$40 - $80 per night\",\n        \"hotelImageUrl\": \"https://example.com/circus_circus_hotel.jpg\",\n        \"geoCoordinates\": {\n          \"latitude\": 36.1283,\n          \"longitude\": -115.1667\n        },\n        \"rating\": 3.5,\n        \"description\": \"A classic Las Vegas experience with a circus theme, offering affordable rooms and a variety of entertainment options, including a free circus show.\"\n      },\n      {\n        \"hotelName\": \"Excalibur Hotel & Casino\",\n        \"hotelAddress\": \"3850 S Las Vegas Blvd, Las Vegas, NV 89109\",\n        \"price\": \"$50 - $90 per night\",\n        \"hotelImageUrl\": \"https://example.com/excalibur_hotel.jpg\",\n        \"geoCoordinates\": {\n          \"latitude\": 36.0987,\n          \"longitude\": -115.1740\n        },\n         \"rating\": 3.8,\n        \"description\": \"A castle-themed hotel with a medieval ambiance, offering affordable rooms and various entertainment options.\"\n      },\n       {\n        \"hotelName\": \"The LINQ Hotel + Experience\",\n         \"hotelAddress\": \"3535 S Las Vegas Blvd, Las Vegas, NV 89109\",\n        \"price\": \"$60 - $100 per night\",\n        \"hotelImageUrl\": \"https://example.com/linq_hotel.jpg\",\n        \"geoCoordinates\": {\n          \"latitude\": 36.1164,\n          \"longitude\": -115.1705\n        },\n        \"rating\": 4.0,\n         \"description\": \"A modern hotel with a central location on the Strip, offering access to the LINQ Promenade and various dining options.\"\n      }\n    ],\n    \"itinerary\": {\n      \"day1\": {\n        \"theme\": \"Exploring the Strip & Free Attractions\",\n        \"places\": [\n          {\n            \"placeName\": \"Bellagio Conservatory & Botanical Gardens\",\n            \"placeDetails\": \"A stunning indoor botanical garden that changes with the seasons. It's free to enter and perfect for a leisurely stroll.\",\n            \"placeImageUrl\": \"https://example.com/bellagio_gardens.jpg\",\n            \"geoCoordinates\": {\n              \"latitude\": 36.1129,\n              \"longitude\": -115.1742\n            },\n            \"ticketPricing\": \"Free\",\n            \"timeToTravel\": \"10 minutes walking from the LINQ, 15 minutes from Excalibur\" ,\n            \"bestTimeToVisit\": \"Morning or afternoon to avoid crowds\"\n          },\n          {\n            \"placeName\": \"Fountains of Bellagio\",\n             \"placeDetails\": \"A free spectacular water fountain show synchronized to music and lights. Catch the show at various times throughout the day and night.\",\n            \"placeImageUrl\": \"https://example.com/bellagio_fountains.jpg\",\n            \"geoCoordinates\": {\n             \"latitude\": 36.1126,\n              \"longitude\": -115.1747\n            },\n           \"ticketPricing\": \"Free\",\n            \"timeToTravel\": \"Adjacent to Bellagio Conservatory\",\n           \"bestTimeToVisit\": \"Evening for the best experience with lights\"\n          },\n          {\n           \"placeName\": \"The LINQ Promenade\",\n           \"placeDetails\": \"An outdoor shopping, dining, and entertainment area, great for window shopping and enjoying the lively atmosphere. Take pictures at various art installations\",\n            \"placeImageUrl\": \"https://example.com/linq_promenade.jpg\",\n            \"geoCoordinates\": {\n               \"latitude\": 36.1"},
          ],
        },
      ],
    });
  
 

  