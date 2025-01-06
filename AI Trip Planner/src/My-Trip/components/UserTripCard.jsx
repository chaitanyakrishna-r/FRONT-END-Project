import { GetPlaceDetails, PHOTO_REF_URL } from "@/service/GlobalApi";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UserTripCard = ({ trip }) => {
  const [photoUrl, setPhotoUrl] = useState();
  useEffect(() => {
    trip && GetPlacePhoto();
  }, [trip]);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: trip?.useSelection?.location?.label,
    };

    const result = await GetPlaceDetails(data).then((resp) => {
      const PhotoUrl = PHOTO_REF_URL.replace(
        "{NAME}",
        resp.data.places[0].photos[3].name
      );
      setPhotoUrl(PhotoUrl);
    });
  };
  return (
    <Link to={'/view-trip/'+trip?.Id}>
    <div className="hover:scale-105 transition-all ">
      <img src={photoUrl?photoUrl:"/download.jpg"} alt="" className="h-[220px] object-cover rounded-xl" />
      <div>
        <h2 className="font-bold text-lg">
          {trip?.useSelection?.location?.label}
        </h2>
        <h2 className="text-sm text-slate-400">
          {trip?.useSelection?.NoOfDays} Days trip with{" "}
          {trip?.useSelection?.Budget} Budget
        </h2>
      </div>
    </div>
    </Link>
  );
};

export default UserTripCard;
