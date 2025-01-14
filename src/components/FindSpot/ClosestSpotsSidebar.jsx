import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../conf/axiosConfig";

function ClosestSpotsSidebar({
  closestSpots,
  lat,
  lng,
  price,
  dateTimeIn,
  dateTimeOut,
  onBackClick,
}) {
  const navigate = useNavigate();

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const toRad = (value) => (value * Math.PI) / 180;
    const R = 6371e3; // Radius of the Earth in meters
    const φ1 = toRad(lat1);
    const φ2 = toRad(lat2);
    const Δφ = toRad(lat2 - lat1);
    const Δλ = toRad(lon2 - lon1);

    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = R * c; // Distance in meters

    if (distance < 1000) {
      return `${distance.toFixed(0)} meters`;
    } else {
      return `${(distance / 1000).toFixed(1)} km`;
    }
  };

  const handleSpotClick = (spotId) => () => {
    const queryParams = new URLSearchParams({
      dateTimeIn: dateTimeIn.toISOString(),
      dateTimeOut: dateTimeOut.toISOString(),
    }).toString();

    navigate(`/reserve/${spotId}?${queryParams}`);
  };

  useEffect(() => {
    try {
      const getRatingsForSpots = async () => {
        const ratings = await Promise.all(
          closestSpots.map(async (spot) => {
            const response = await api.get(`/review/${spot._id}/ratings`);
            closestSpots[closestSpots.indexOf(spot)].ratings =
              response.data.data;
          })
        );
      };
      getRatingsForSpots();
    } catch (error) {
      console.error("Error fetching ratings:", error);
    }
  }, [closestSpots]);

  return (
    <div className="flex flex-col lg:w-1/3 p-6 shadow-lg rounded-xl lg:h-[80vh]">
      <button onClick={onBackClick} className="self-start absolute">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mb-6 text-gray-600 hover:text-gray-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </button>
      <h2 className="text-3xl font-bold text-primary-color font-freeman mb-6 text-center">
        Closest Spots
      </h2>
      <ul className="space-y-4">
        {closestSpots
          .map((spot, index) => (
            <li
              key={index}
              className="border p-4 rounded-lg shadow-md hover:scale-105 relative overflow-visible"
            >
              <span className="absolute top-2 right-2 bg-gray-100 rounded-full px-2 py-1 sm:text-sm font-semibold text-xs">
                {spot.ratings && spot.ratings.averageRating
                  ? spot.ratings.averageRating.toFixed(1)
                  : "No ratings yet"}
              </span>
              <button className="w-full" onClick={handleSpotClick(spot._id)}>
                <div className="flex gap-2 text-start">
                  <div>
                    <img
                      src={spot.spotImages[0]}
                      alt={spot.title}
                      className="w-24 h-24 rounded-lg object-cover"
                    />
                  </div>
                  <div>
                    <h1 className="font-bold text-lg">{spot.title}</h1>
                    <p className="">{spot.description.slice(0, 30)}</p>
                    <p>
                      Price:
                      <span className="font-bold">
                        $
                        {price === "day"
                          ? spot.pricePerDay
                          : price === "month"
                          ? spot.pricePerMonth
                          : spot.pricePerHour}
                      </span>
                    </p>
                    <p>
                      Distance:{" "}
                      {calculateDistance(
                        spot.coordinates[1],
                        spot.coordinates[0],
                        lat,
                        lng
                      )}
                    </p>
                  </div>
                </div>
              </button>
            </li>
          ))
          .slice(0, 3)}
      </ul>
    </div>
  );
}

export default ClosestSpotsSidebar;
