import React from 'react';
import PlaceCardVisit from './PlaceCardVisit';

const Itinerary = ({ trip }) => {
  // Safely access itinerary
  const itinerary = trip?.tripData?.travelPlan?.itinerary;

  if (!itinerary || typeof itinerary !== 'object') {
    return (
      <div>
        <h2 className="font-bold text-lg mt-5">Places to Visit</h2>
        <p>No itinerary available</p>
      </div>
    );
  }

  // Sort days in the correct order
  const sortedDays = Object.keys(itinerary).sort((a, b) => {
    const dayA = parseInt(a.replace('day', ''));
    const dayB = parseInt(b.replace('day', ''));
    return dayA - dayB;
  });

  return (
    <div>
      <h2 className="font-bold text-lg mt-5">Places to Visit</h2>
      <div>
        {sortedDays.map((day, index) => (
          <div key={index} className="mb-4">
            <div className='mt-5'>

              <h2 className='font-medium text-lg'>{`Day ${day.slice(3)}`}</h2>
              
          
              <div className='grid grid-cols-1 md:grid-cols-2 gap-2 '>
                {itinerary[day]?.places?.map((place, index) => (
                  <div key={index} className='my-3'>
                    <h2 className='font-medium text-sm text-orange-500'>
                      {place?.bestTimeToVisit}
                    </h2>
                    <PlaceCardVisit placeInfo={place} />
                  </div>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Itinerary;
