import React from "react";
import Marquee from "react-fast-marquee";
import { appPortfolio, webPortfolio } from "../../constant";

const Portfolio = ({ page }) => {
  const isWebDevelopment = page === "web-development";
  const isAppDevelopment = page === "app-development";
  const showMarquee = !isWebDevelopment && !isAppDevelopment;

  const portfolio = isWebDevelopment
    ? webPortfolio
    : isAppDevelopment
    ? appPortfolio
    : [...webPortfolio, ...appPortfolio];

  return (
    <div id="portfolio" className="bg-[#101010] text-white py-[5rem]">
      <div className="wrapper">
        <div className="flex flex-col items-center gap-5 text-white">
          <div className="gradient-rounded-text-box">Portfolio</div>
          <h2 className="heading-2 text-center mb-5">Our Selected Projects</h2>

          {showMarquee ? (
            <Marquee
              gradient={false}
              pauseOnHover
              speed={50}
              className="max-w-7xl mx-auto"
            >
              {portfolio.map((item) => (
                <div
                  key={item.id}
                  className="w-[350px] min-w-[350px] mx-4 flex-shrink-0 rounded-md overflow-hidden relative group"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-[300px] object-cover group-hover:scale-110 transition-all duration-300"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-2 bg-primary/80 text-black text-center">
                    <h3 className="font-medium">{item.title}</h3>
                  </div>
                </div>
              ))}
            </Marquee>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {portfolio.map((item) => (
                <div
                  data-aos="fade-up"
                  key={item.id}
                  className="flex flex-col gap-3 rounded-md overflow-hidden relative group w-full"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-fit h-fit object-contain group-hover:scale-110 transition-all duration-300"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-2 bg-primary/80 text-black flex flex-col gap-2">
                    <h3 className="font-medium text-center">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
