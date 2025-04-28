import React from "react";
import { Link } from "react-router-dom";
// import Contact from "../../componets/landingPages/Contact";
import aboutUsImg from "../../assets/images/landing-aboutus.png";
import WhyChooseUs from "../../componets/common/WhyChooseUs";
// import ReactPlayer from "react-player";
// import { homeBannerVideo } from "../../constant";
import OurServices from "../../componets/website/OurServices";
// import EndlessOpportunitiesSection from "../../componets/common/EndlessOpportunitiesSection";
// import UnlockEfficiency from "../../componets/common/UnlockEfficiency";
import bannerImage from "../../assets/videos/bannerimage.jpg";
import Testimonials from "../../componets/common/Testimonials";
import BrandLogos from "../../componets/common/BrandLogos";
import BusinessScaling from "../../componets/common/BusinessScaling";
import ContactForm from "../../componets/common/ContactForm";
import Portfolio from "../../componets/common/Portfolio";
const Home = () => {
  return (
    <div className="overflow-x-hidden   bg-no-repeat max-w-screen">
      <div
        id="banner"
        className="h-screen relative bg-current bg-center  bg-cover "
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        {/* <ReactPlayer
          url={homeBannerVideo}
          loop
          muted
          width="100%"
          height="100%"
          playsinline
          playing
          className="absolute"
        /> */}
        <div className="bg-gradient-to-r to-black/50 from-transparent absolute w-full h-full"></div>
        <div className="pt-[3rem] wrapper flex items-center h-full">
          <div
            data-aos="fade-up"
            className="relative z-10 px-6 justify-center h-full text-white flex flex-col items-center gap-5 text-center md:max-w-[60rem] mx-auto"
          >
            <div className="rounded-text-box border-white/70 font-medium">
              IT Services
            </div>
            <h1 className="heading-1">
              Stand out.
              <br /> Sell more.
              <br /> Scale faster.
            </h1>
            <p className="desc">Don’t just exist online, dominate it.</p>
            <div className="flex flex-row gap-5">
              <Link to="/contact-us" className="primary-btn mt-2">
                Start dominating Now
              </Link>
              <Link to="/services" className="secondary-btn mt-2">
                Learn how we can help you grow
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section className="py-[5rem] bg-black text-white wrapper">
        <div
          data-aos="fade-right"
          className="gradient-rounded-text-box mx-auto lg:mx-0"
        >
          About Us
        </div>
        <div className="flex flex-col-reverse items-center lg:grid grid-cols-2 gap-10 mt-7">
          <div data-aos="fade-right" className="flex h-full flex-col gap-7">
            <div className="flex flex-col gap-7 text-center lg:text-start">
              <h2 className="heading-2">
                We're a team that builds with purpose, not just pixels.{" "}
              </h2>
              <p className="desc">
                This isn’t just our job — it’s what we’re passionate about. From
                day one, our focus has been simple: help businesses grow by
                using design, technology, and strategy the smart way. No
                gimmicks. No overpromises. Just solid work that delivers.
                <br />
                <br />
                We’re not the biggest agency in the game — and that’s exactly
                the point. We stay lean, stay focused, and bring senior-level
                thinking to every project we take on.
              </p>
            </div>
            <div className="flex gap-5 mt-4 justify-center lg:justify-start">
              <Link to="/contact-us" className="primary-btn">
                Contact Us
              </Link>
              <Link to="/services" className="secondary-btn">
                Our Services
              </Link>
            </div>
          </div>
          <div data-aos="fade-left" className="h-full">
            <img
              src={aboutUsImg}
              className="object-contain max-h-[30rem]"
              alt=""
            />
          </div>
        </div>
      </section>
      <BusinessScaling />
      <OurServices length={3} />

      {/* <section className="py-[5rem] bg-black text-white">
        <div
          data-aos="fade-up"
          className="wrapper text-center flex flex-col gap-3"
        >
          <div className="gradient-rounded-text-box mx-auto mb-4">
            Who We Are
          </div>
          <h1 className="heading-2 bg-gradient-to-r from-primary max-w-[50rem] mx-auto to-secondary bg-clip-text text-transparent">
            Your Partner in Reliable and Responsive IT Services
          </h1>
          <p className="desc max-w-[50rem] mx-auto">
            Founded with a passion for technology and creativity, SerraBytesAI
            Solutions Innovations has grown into a trusted partner for
            businesses seeking digital transformation. Our team of experienced
            developers, designers, and strategists are dedicated to building
            high-quality, innovative IT solutions tailored to meet the unique
            needs of each client.
          </p>
        </div>
      </section> */}

      {/* <Faqs /> */}
      <WhyChooseUs />
      {/* <UnlockEfficiency /> */}
      {/* <EndlessOpportunitiesSection /> */}
      <Portfolio />

      <Testimonials />
      <BrandLogos />
      {/* <Contact /> */}
      <ContactForm />
    </div>
  );
};

export default Home;
