import React from "react";
import { FaUtensils, FaClock, FaLeaf } from "react-icons/fa";
 
const EffortlessDiningSolutions = () => {
  return (
    <section className="py-16 mt-20">
      <div className="container mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-black mb-6">
          Effortless Dining Solutions
        </h2>
        <p className="text-gray-600 text-lg mb-12 w-3/5 mx-auto">
          Discover a dining experience designed to simplify your hostel life. From meal planning to eco-friendly options, we ensure every bite is a delight.
        </p>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-transform hover:scale-105">
            <FaUtensils className="text-5xl text-black mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Diverse Menus</h3>
            <p className="text-gray-600">
              Enjoy a variety of dishes tailored to your preferences and nutritional needs.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-transform hover:scale-105">
            <FaClock className="text-5xl text-black mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Timely Service</h3>
            <p className="text-gray-600">
              Meals are served on time to ensure your day runs smoothly without delays.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-transform hover:scale-105">
            <FaLeaf className="text-5xl text-black mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Eco-Friendly Practices</h3>
            <p className="text-gray-600 ">
              We prioritize sustainability with eco-friendly meal preparation and packaging.
            </p>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default EffortlessDiningSolutions;