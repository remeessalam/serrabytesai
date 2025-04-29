import React from "react";
import { defaultBanner } from "../../constant";

const Banner = ({ page }) => {
  console.log(page, page === "Services");
  return (
    <div
      data-aos="fade-down"
      className={` ${
        page === "Services" ? `h-[33vh]` : `md:h-[70vh] h-[40vh] sm:h-[55vh]`
      } relative`}
    >
      <img src={defaultBanner} className="object-cover h-full w-full" alt="" />
      <h2 className="font-raleway text-[2.18rem] md:text-7xl font-bold leading-tight text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[10%] text-center">
        {page}
      </h2>
    </div>
  );
};

export default Banner;
//33 height
