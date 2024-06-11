import React from "react";

function Testimonial() {
  return (
    <section className="px-5 lg:px-10 py-10 border rounded-lg shadow-lg my-16">
      <figure className="mx-auto max-w-7xl">
        <h1 className="mb-4 text-4xl font-semibold font-freeman text-black">
          What campers are saying?
        </h1>
        <blockquote className="mt-10 text-xl text-gray-900">
          <p>
            “As someone who loves camping but struggles to find the perfect site, <span className="font-bold">CampEase</span> has been a game-changer for me. The app is
            incredibly user-friendly, and it's saved me both time and money.
            Now, I spend less time searching for a site and more
            time enjoying my camping trips. CampEase has not only made camping <span className="underline">hassle-free</span> but also ensures I'm never far from my destination.
            Highly recommended for any camper looking for an easy and reliable
            camping solution!”
          </p>
        </blockquote> 
        <figcaption className="mt-10 flex items-center gap-x-6">
          <div className="isolate flex -space-x-2">
            <img
              className="relative z-30 inline-block h-20 w-20 rounded-full ring-2 ring-white"
              src="/images/camper_profile.png"
              alt="Camper_Profile"
            />
          </div>
          <div>
            <p className="font-semibold text-black">Maheepjot Singh Pruthi</p>
          </div>
        </figcaption>
      </figure>
    </section>
  );
}

export default Testimonial;

