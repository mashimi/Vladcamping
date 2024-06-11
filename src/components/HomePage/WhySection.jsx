import { HorizontalCard } from "../";
import React from "react";

function WhySection() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col lg:flex-row my-16">
        <div className="flex w-full lg:w-1/2 text-primary-black items-center justify-center">
          <img
            className="rounded-t-lg"
            src="images/camping-illustration.svg"
            alt="Camping illustration"
          />
        </div>
        <div className="p-5 flex flex-col flex-wrap">
          <h2 className="text-4xl font-bold font-freeman text-primary-black text-center">
            Why CampEase?
          </h2>
          <HorizontalCard
            description="CampEase ensures you're never far from a beautiful and convenient camping site. 
            Our extensive network guarantees a camping space close to your destination, enabling hassle-free access wherever your travels take you."
            imageUrl="images/camping-network.svg"
          />
          <HorizontalCard
            description="CampEase’s app is crafted to provide a seamless user experience. 
            Find and reserve a camping site in just a few taps, or list your available space with equal ease, making camping stress-free and straightforward."
            imageUrl="images/user-experience.svg"
          />
          <HorizontalCard
            description="Enjoy the freedom of accessing and listing camping sites with no membership fees, booking charges, or hidden costs. 
            CampEase offers a truly cost-effective solution for both campers and site owners."
            imageUrl="images/no-hidden-costs.svg"
          />
        </div>
      </div>
    </div>
  );
}

export default WhySection;


