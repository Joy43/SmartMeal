"use client";

import Image from "next/image";


export default function HeroSection() {
  return (
<div className="">
  <div>
    
  </div>
<section className="flex flex-col lg:flex-row items-center justify-between gap-8 p-8">
      {/* ------------------ Left Section ------------- */}
      <div className="max-w-lg space-y-4">
        <h2 className="relative text-4xl font-bold leading-tight">
        
          TAKE THE STRESS OUT OF MEALTIME
        </h2>
        <p className="text-gray-600">
          Quality, freshly made meals without a dirty dish in sight. This sample
          text visually demonstrates how readable this color combination is.
        </p>
        <button className="bg-green-500 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-green-700 transition">
         See Our Menu →
        </button>
      </div>

      {/* -------- Image Section --------------------*/}
      <div className="relative w-full max-w-md">
        <Image
          src="https://feedy.jwsuperthemes.com/wp-content/uploads/2023/09/young-woman-making-salad-kitchen.png" 
          alt="Healthy meal"
          width={400}
          height={400}
          className="rounded-lg"
        />
      </div>

      {/*-------------------- Right Section------------------- */}
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-bold">HEALTHY AND DELICIOUS</h3>
          <p className="text-gray-600">Plenty of options to fit your lifestyle</p>
        </div>
        <div>
          <h3 className="text-lg font-bold">FULL-BODY NUTRIENTS</h3>
          <p className="text-gray-600">
            Essential for brain, muscle, and gut health
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold">HIGH STANDARDS</h3>
          <p className="text-gray-600">
            Quality ingredients to help you feel your best
          </p>
        </div>
      </div>
    </section>

</div>
  );
}
