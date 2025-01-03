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

export const AI_PROMT='Generate Travel plan for Location :{location} for {totalDays} Days for {traveller} with a {budget} budget, giveme Hotels options list with HotelName. Hotel adddress, Price, hotel image url, geo cooridnates, rating, descriptions and suggest itinerary with placeName, place Details, Place Image Url, Geo Corrdinates, ticket Pricing, Time t travel each fo the location for 3 days with each plan with bets time to visit in JSON format.'