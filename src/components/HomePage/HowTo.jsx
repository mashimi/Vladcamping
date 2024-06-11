import React, { useState } from "react";
import { Card } from "../"; // Ensure the Card component is properly imported

const HowTo = () => {
  const [isHostView, setIsHostView] = useState(false); // State to track toggle position

  const content = {
    hosts: [
      {
        title: "List Your Site",
        description:
          "Open CampEase, tap 'List Your Site', enter details about your camping site.",
        imageUrl: "images/list_your_site.svg",
      },
      {
        title: "Set Availability",
        description:
          "Choose the dates and times your site is available for booking and add photos.",
        imageUrl: "images/set_availability.svg",
      },
      {
        title: "Earn Cash",
        description:
          "Campers can book your site - you'll receive notifications and payments through CampEase!",
        imageUrl: "images/earn_cash.svg",
      },
    ],
    drivers: [
      {
        title: "Find a Site",
        description: "Use the app to find available camping sites near your location.",
        imageUrl: "images/find_a_site.svg",
      },
      {
        title: "Reserve your Site",
        description: "Reserve the site and pay directly through the app.",
        imageUrl: "images/reserve.svg",
      },
      {
        title: "Set Up Your Camper",
        description:
          "Follow the directions and easily set up your camper at the reserved site.",
        imageUrl: "images/set_up_camper.svg",
      },
    ],
  };

  return (
    <div className="py-8">
      <div className="max-w-[80vw] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-5xl font-bold font-freeman">How it Works?</h2>
          <div className="flex justify-center items-center mt-6">
            <div className="flex items-center justify-center bg-gray-200 p-1 rounded-lg w-max">
              <button
                className={`px-4 py-2 rounded-lg text-lg font-medium transition ease-in-out duration-200 ${
                  isHostView ? "text-gray-500" : "bg-white shadow"
                }`}
                onClick={() => setIsHostView(false)}
              >
                Campers
              </button>
              <button
                className={`px-4 py-2 rounded-lg text-lg font-medium transition ease-in-out duration-200 ${
                  isHostView ? "bg-white shadow" : "text-gray-500"
                }`}
                onClick={() => setIsHostView(true)}
              >
                Hosts
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-around flex-wrap">
          {content[isHostView ? "hosts" : "drivers"].map((item, index) => (
            <Card
              key={index}
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowTo;

