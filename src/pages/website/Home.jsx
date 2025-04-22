import React from "react";
import { Link } from "react-router-dom";
import Contact from "../../componets/landingPages/Contact";
import aboutUsImg from "../../assets/images/landing-aboutus.png";
import WhyChooseUs from "../../componets/common/WhyChooseUs";
import ReactPlayer from "react-player";
import { homeBannerVideo } from "../../constant";
import OurServices from "../../componets/website/OurServices";
import EndlessOpportunitiesSection from "../../componets/common/EndlessOpportunitiesSection";
import UnlockEfficiency from "../../componets/common/UnlockEfficiency";
import bannerImage from "../../assets/videos/bannerimage.jpg";
const Home = () => {
  return (
    <>
      <div
        id="banner"
        className="h-screen relative bg-current bg-center  bg-cover   bg-no-repeat "
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
              Delivering <br /> Next-Generation <br /> Technology Solutions
            </h1>
            <p className="desc">
              Expert IT services tailored to your business needs.
            </p>
            <div className="flex flex-row gap-5">
              <Link to="/contact-us" className="primary-btn mt-2">
                Get Started
              </Link>
              <Link to="/services" className="secondary-btn mt-2">
                learn how we can help you grow
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
                Driving Operational Excellence Through Cutting-Edge Technology.
              </h2>
              <p className="desc">
                At AI Company, we are committed to delivering high-quality
                digital solutions tailored to meet the demands of today’s
                fast-evolving business landscape. Driven by a passion for
                innovation, creativity, and excellence, we approach each project
                with a commitment to achieving impactful results. As your
                trusted technology partner, we turn bold ideas into reality
                through advanced technology and creative digital strategies. Our
                core strengths include Web Development, App Development, Chatbot
                Development, Machine Learning Solutions, Virtual Reality (VR)
                and Augmented Reality (AR) Development, Computer Vision and Game
                Development—enabling businesses to not only adapt but thrive and
                grow in a competitive digital world.
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
      <OurServices length={3} />
      <section className="py-[5rem] bg-black text-white">
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
            Founded with a passion for technology and creativity, Parvesha
            Innovations has grown into a trusted partner for businesses seeking
            digital transformation. Our team of experienced developers,
            designers, and strategists are dedicated to building high-quality,
            innovative IT solutions tailored to meet the unique needs of each
            client.
          </p>
        </div>
      </section>

      {/* <Faqs /> */}
      <WhyChooseUs />
      <UnlockEfficiency />
      <EndlessOpportunitiesSection />
      <Contact />
    </>
  );
};

export default Home;
