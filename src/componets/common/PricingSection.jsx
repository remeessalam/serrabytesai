import React, { useRef } from "react";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const PricingSection = () => {
  const scrollContainerRef = useRef(null);

  const pricingData = [
    {
      title: "Basic",
      price: "399",
      features: [
        "6-8 pages Informational website for your business",
        "SEO optimization",
        "1 year free domain and hosting",
        "2 business Email IDs",
        "Quick enquiry form with WhatsApp integration",
        "Social Media Integration",
        "1 month support post launch",
      ],
    },
    {
      title: "Premium",
      price: "899",
      features: [
        "Dynamic website with Premium design",
        "Up to 20 pages",
        "E-commerce features and Admin portal",
        "Payment Gateway",
        "10+ business email IDs",
        "Quick enquiry form with WhatsApp integration",
        "2 months support post launch",
      ],
    },
    {
      title: "Advanced",
      price: "1699",
      features: [
        "Custom UI/UX design upto 40 pages",
        "AI features along with chatbot integration",
        "Custom Wireframes and Designs",
        "Unlimited revisions",
        "Google Analytics integration",
        "100+ business email IDs",
        "3 months support post launch",
      ],
    },
  ];

  return (
    <div className="pt-20 bg-black px-4">
      {/* For md and larger screens: flex layout */}
      <div className="hidden md:flex justify-center items-center gap-4">
        {pricingData.map((plan, index) => (
          <div
            key={index}
            className="bg-zinc-900 rounded-lg p-6 w-full h-full max-w-xs flex flex-col hover:scale-105 transition-all duration-300"
          >
            <h3 className="text-gray-300 text-sm mb-2">{plan.title}</h3>
            <h2 className="text-white text-4xl font-bold mb-6">
              £{plan.price}
            </h2>
            <div className="flex-grow">
              {plan.features.map((feature, idx) => (
                <div key={idx} className="flex items-start mb-3">
                  <div className="w-4 h-4 rounded-full bg-amber-500 mr-3 mt-1 flex-shrink-0">
                    <FaCheck className="text-black p-1" />
                  </div>
                  <span className="text-gray-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>
            <Link
              to="/contact-us"
              className="mt-6 bg-amber-500 hover:bg-amber-600 text-black font-medium py-2 px-4 rounded text-sm text-center"
            >
              Get Started
            </Link>
          </div>
        ))}
      </div>

      {/* For smaller screens: scrollable container */}
      <div
        ref={scrollContainerRef}
        className="md:hidden flex overflow-x-auto snap-x snap-mandatory pb-6 -mx-4 px-4 scrollbar-hide"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {pricingData.map((plan, index) => (
          <div
            key={index}
            className="flex-shrink-0 snap-center bg-zinc-900 rounded-lg p-6 w-64 mx-2 first:ml-4 last:mr-4 flex flex-col hover:scale-105 transition-all duration-300"
          >
            <h3 className="text-gray-300 text-sm mb-2">{plan.title}</h3>
            <h2 className="text-white text-4xl font-bold mb-6">
              ${plan.price}
            </h2>
            <div className="flex-grow">
              {plan.features.map((feature, idx) => (
                <div key={idx} className="flex items-start mb-3">
                  <div className="w-4 h-4 rounded-full bg-amber-500 mr-3 mt-1 flex-shrink-0">
                    <FaCheck className="text-black p-1" />
                  </div>
                  <span className="text-gray-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>
            <Link
              to="/contact-us"
              className="mt-6 bg-amber-500 hover:bg-amber-600 text-black font-medium py-2 px-4 rounded text-sm text-center"
            >
              Get Started
            </Link>
          </div>
        ))}
      </div>

      {/* Scroll indicators (optional) */}
      {/* <div className="md:hidden flex justify-center mt-4 gap-2">
        {pricingData.map((_, index) => (
          <div key={index} className="w-2 h-2 rounded-full bg-gray-500" />
        ))}
      </div> */}
    </div>
  );
};

export default PricingSection;
