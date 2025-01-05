export const SelectTravelesList =[
    {
        id:1,
        title:'Solo',
        desc:'A sole Traveller in exploration',
        icon:'🛩️',
        people:'1'
    },
    {
        id:2,
        title:'Couples',
        desc:'Two Travels in tandem',
        icon:'🥂',
        people:'2 People'
    },
    {
        id:3,
        title:'Family',
        desc:'A group of fun loving adventure',
        icon:'👨🏻‍👩🏼‍👧🏼‍👦🏻',
        people:'3 to 5 People'
    },
    {
        id:4,
        title:'Friends',
        desc:'A bunch of thrill-seekers ',
        icon:'🧑‍🤝‍🧑',
        people:'4 to 6 People'
    }
]

export const SelectBudgetOption=[
    {
        id:1,
        title:'Cheap',
        desc:'Stay conscious of costs',
        icon:'💶',
    },
    {
        id:2,
        title:'Moderate',
        desc:'Keep cost on the average side',
        icon:'💰',
    },
    {
        id:3,
        title:'Luxury',
        desc:'Dont worry about cost',
        icon:'💸',
    },
]

export const AI_PROMT='Generate a travel plan for the location: {location} for {totalDays} days for {traveller} with a {budget} budget. Provide a list of hotel options including the following details: Hotel Name, Hotel Address, Price, Hotel Image URL, Geo Coordinates, Rating, and Description. Additionally, suggest an itinerary for 3 days with the following details for each day: Place Name, Place Details, Place Image URL, Geo Coordinates, Ticket Pricing, Time to Travel each of the locations (in minutes), and the best time to visit (local time in AM/PM format, without using terms like "morning", "afternoon", etc.). Return the data in JSON format.'



// Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget, Give me a Hotels options list with HotelName, Hotel adddress, Price, hotel image url, geo cooridnates, rating, descriptions and suggest itinerary with placeName, place Details, Place Image Url, Geo Corrdinates, ticket Pricing, Time t travel each fo the location for 3 days with each plan with bets time to visit in JSON format.