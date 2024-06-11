import React from "react";

function CampingForm() {
  return (
    <form className="flex flex-col gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Location</label>
        <input
          type="text"
          name="location"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-color focus:ring-primary-color sm:text-sm"
          placeholder="Enter a location"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Dates</label>
        <input
          type="text"
          name="dates"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-color focus:ring-primary-color sm:text-sm"
          placeholder="Select your dates"
        />
      </div>
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-color hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-color"
      >
        Find Camping Sites
      </button>
    </form>
  );
}

export default CampingForm;
