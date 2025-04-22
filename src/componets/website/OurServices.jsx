import React, { useState } from "react";
import { serviceDetails } from "../../constant";
import { PiCaretDoubleRightBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import Drawer from "react-modern-drawer";
import { IoMdClose } from "react-icons/io";

const OurServices = ({ length }) => {
  const [isOpen, setIsOpen] = useState(false);
  const services = serviceDetails.slice(0, length || serviceDetails.length);
  const [selectedService, setSelectedService] = useState(services[0]);

  const handleSelectServiceToShowDetail = (service) => {
    setSelectedService(service);
    setIsOpen(true);
  };
  return (
    <div className="py-[5rem] bg-[#101010] text-white">
      <div
        data-aos="fade-up"
        className="wrapper flex flex-col text-center gap-5 items-center"
      >
        <div data-aos="fade-up" className="gradient-rounded-text-box mb-2">
          Our Services
        </div>
        <h2 data-aos="fade-up" className="heading-2 max-w-[50rem]">
          We don’t just build digital solutions — we solve real business
          problems.{" "}
        </h2>
        <p data-aos="fade-up" className="desc max-w-[50rem]">
          At the core of what we do is a simple idea: make things that work.
          Whether you need a high-performing website, smarter systems, or
          technology that frees up your time — our job is to help you reach your
          goals faster, with less stress and more clarity.
          <br />
          <br />
          Each of our services is designed with that mindset. Here’s how we
          help.{" "}
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-3">
          {services.map((service) => (
            <div
              onClick={() => handleSelectServiceToShowDetail(service)}
              data-aos="fade-up"
              key={service.id}
              className="rounded-lg p-[1px] bg-gradient-to-r from-secondary to-primary cursor-pointer"
            >
              <div className="rounded-lg bg-[#101010] hover:bg-black/70 transition-all duration-300 p-5 flex flex-col justify-between items-start text-start h-full gap-4">
                <div className="flex flex-col gap-3">
                  <h5 className="font-semibold text-xl font-raleway">
                    {service.title}
                  </h5>
                  <p className="desc text-white/80">{service.description}</p>
                </div>
                <button
                  onClick={() => handleSelectServiceToShowDetail(service)}
                  className="desc mt-1 flex items-center gap-3 hover:text-primary transition-all duration-300"
                >
                  Learn More <PiCaretDoubleRightBold />
                </button>
              </div>
            </div>
          ))}
        </div>
        {length && (
          <Link to="/services" className="primary-btn mt-6">
            All Services
          </Link>
        )}
      </div>

      <Drawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        direction="top"
        className="p-4 z-10 w-screen"
        lockBackgroundScroll
      >
        <div className="mb-3 flex items-center justify-end pr-[.7rem] py-[.4rem]">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white text-[2.2rem]"
          >
            <IoMdClose />
          </button>
        </div>

        {selectedService && (
          <div className="flex flex-col gap-6 text-white pb-[2rem]">
            <h1 className="heading-2">{selectedService.title}</h1>
            <p className="desc whitespace-pre-line">
              {selectedService.description}
            </p>

            <ul className="list-disc list-inside space-y-2 pl-4">
              {selectedService.points.map((point, index) => (
                <li key={index} className="text-base leading-relaxed">
                  {point}
                </li>
              ))}
            </ul>

            <p className="desc whitespace-pre-line">
              {selectedService.closing}
            </p>
          </div>
        )}
      </Drawer>
    </div>
  );
};

export default OurServices;
