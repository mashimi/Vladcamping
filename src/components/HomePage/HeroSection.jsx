 import React from "react";
import { CampingForm } from "../"; // Ensure the CampingForm component is properly imported

function HeroSection() {
  return (
    <div className="flex flex-col lg:flex-row lg:h-screen justify-center items-center pb-20 gap-5">
      <div className="lg:w-1/2">
        <span className="text-center">
          <h2 className="text-6xl xl:text-7xl font-black font-freeman">
            Stop Searching, Start <span className='text-primary-color'>Camping!</span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 mt-3">
            The convenient way to find and book your perfect camping site.
          </p>
        </span>
        <CampingForm />
      </div>
      <div className="lg:w-1/2">
        <img src="images/camping-hero-image.png" alt="Camping" className="rounded-lg" />
      </div>
    </div>
  );
}

export default HeroSection;


