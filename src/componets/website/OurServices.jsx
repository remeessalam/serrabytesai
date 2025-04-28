import React, { useState, useEffect } from "react";
import { serviceDetails } from "../../constant";
import { PiCaretDoubleRightBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

const OurServices = ({ length }) => {
  const [isOpen, setIsOpen] = useState(false);
  const services = serviceDetails.slice(0, length || serviceDetails.length);
  const [selectedService, setSelectedService] = useState(services[0]);

  const handleSelectServiceToShowDetail = (service) => {
    setSelectedService(service);
    setIsOpen(true);
  };

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className="py-[5rem] bg-[#101010] text-white relative">
      <div
        data-aos="fade-up"
        className="wrapper flex flex-col text-center gap-5 items-center"
      >
        <div data-aos="fade-up" className="gradient-rounded-text-box mb-2">
          Our Services
        </div>
        <h2 data-aos="fade-up" className="heading-2 max-w-[50rem]">
          We don’t just build digital solutions — we solve real business
          problems.
        </h2>
        <p data-aos="fade-up" className="desc max-w-[50rem]">
          At the core of what we do is a simple idea: make things that work.
          Whether you need a high-performing website, smarter systems, or
          technology that frees up your time — our job is to help you reach your
          goals faster, with less stress and more clarity.
          <br />
          <br />
          Each of our services is designed with that mindset. Here’s how we
          help.
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

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="relative w-[90%] max-w-2xl max-h-[90vh] bg-[#1f1f1f] rounded-lg overflow-y-auto p-6">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white text-3xl"
            >
              <IoMdClose />
            </button>

            {selectedService && (
              <div className="flex flex-col gap-6 text-white mt-8">
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
          </div>
        </div>
      )}
    </div>
  );
};

export default OurServices;
