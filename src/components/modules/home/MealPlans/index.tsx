"use client";

import Image from "next/image";

const MealPlans = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 bg-[#f8fdf3] min-h-screen items-center px-8 md:px-16 lg:px-32">
      {/* Left Side Content */}
      <div className="space-y-6">
        <span className="text-red-500 text-3xl font-handwriting relative before:absolute before:w-full before:h-[2px] before:bg-red-500 before:-bottom-1 before:left-0">
          Services
        </span>
        <h1 className="text-5xl font-bold text-[#2E073F]">
          MEAL DELIVERY FOR <br />
          <span className="text-black">ANY LIFESTYLE</span>
        </h1>
        <p className="text-gray-600 max-w-md">
          Choose a home meal delivery plan for your taste, or mix and match any
          of our weekly recipes. Explore Our Meal Plans.
        </p>

        <div className="grid grid-cols-2 gap-4 text-[#2E073F] font-medium">
          <ul className="space-y-2">
            <li>Paleo</li>
            <li>Vegetarian</li>
            <li>Lean & Clean</li>
            <li>Gluten-Free</li>
            <li>Carb-Conscious</li>
          </ul>
          <ul className="space-y-2">
            <li>Mediterranean</li>
            <li>Diabetes-Friendly</li>
            <li>Pescatarian</li>
            <li>Chef’s Choice</li>
            <li>Fresh & Ready</li>
          </ul>
        </div>

        <button className="bg-green-500 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-green-700 transition">
          Get Started →
        </button>
      </div>

      {/* Right Side Image */}
      <div className="relative w-full flex justify-center">
        <Image
          src="https://feedy.jwsuperthemes.com/wp-content/uploads/2023/09/young-woman-with-measuting-tape-kitchen.jpg"
          alt="Healthy Meal Delivery"
          width={600}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default MealPlans;
