import React from "react";

const BusinessScaling = () => {
  // Array of features with their titles and descriptions
  const features = [
    {
      title: "CRO-Optimized eCommerce Stores",
      description:
        "Designed to convert traffic into sales with use of UI/UX designers that Understand the flow that Users love, so that the customer not only makes a purchase, but fall in love with your website",
      icon: "🛒", // Shopping cart icon
    },
    {
      title: "Advanced SEO Strategies",
      description:
        "We get your business found by the right people and keep it ranking with technical SEO and content built for real results, not just an SEO that gets you onto google, but one that will get Your site noticed",
      icon: "🔍", // Magnifying glass icon
    },
    {
      title: "Smart AI Features",
      description:
        "From chatbots to auto-schedulers, we add intelligent tools that save time, reduce costs, and improve user experience. So that your users feel at ease and make the most Easy Purchase of their life",
      icon: "🤖", // Robot icon
    },
    {
      title: "Custom Dashboards",
      description:
        "Get clear insights into what's working with interactive dashboards that track behavior, conversions, and more to better understand your customer behaviour",
      icon: "📊", // Chart icon
    },
  ];

  return (
    <section className="py-16 px-4  text-white">
      <div className="max-w-6xl mx-auto">
        {/* Main heading */}
        <div className="text-center mb-12">
          <h1 className="heading-2 bg-gradient-to-r from-primary max-w-[50rem] mx-auto to-secondary bg-clip-text text-transparent">
            We can help scale your business to another level, here is how
          </h1>
          {/* <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-purple-600 mx-auto"></div> */}
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-start">
                <div className="bg-primary flex justify-center items-center text-2xl p-3 rounded-full  min-w-[3.5rem] max-w-[3.5rem] !h-[3.5rem] mr-4 text-black">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 text-yellow-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        {/* <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-primary rounded-full font-medium hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300">
            Scale Your Business Today
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default BusinessScaling;
