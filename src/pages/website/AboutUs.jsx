import React from "react";
import {
  aboutUsBanner,
  aboutUsGridImg1,
  aboutUsGridImg2,
  aboutUsGridImg3,
  aboutUsGridImg4,
  aboutUsGridImg5,
  aboutUsPageImg,
  whyChooseUsContent,
} from "../../constant";
// import UnlockEfficiency from "../../componets/common/UnlockEfficiency";
import OurServices from "../../componets/website/OurServices";
import Testimonials from "../../componets/common/Testimonials";
import { Link } from "react-router-dom";
import PricingSection from "../../componets/common/PricingSection";

const AboutUs = () => {
  return (
    <div>
      <div
        data-aos="fade-down"
        className="h-[40vh] sm:h-[55vh] md:h-[70vh] relative"
      >
        <img
          src={aboutUsBanner}
          className="object-cover object-[100%_0%] h-full w-full"
          alt=""
        />
      </div>
      <div className="pt-[5rem] text-white text-center">
        <div className="wrapper flex flex-col items-center gap-5 mb-[5rem]">
          <div data-aos="fade-up" className="gradient-rounded-text-box">
            About Us
          </div>
          <div className="mt-[3rem] grid md:grid-cols-2 gap-5">
            <div
              data-aos="fade-right"
              className="h-full flex items-center overflow-hidden rounded-lg"
            >
              <img
                src={aboutUsPageImg}
                className="scale-125 max-h-[26rem] w-full object-cover"
                alt="about us"
              />
            </div>
            <div data-aos="fade-left" className="h-full">
              <h2 className="heading-2 text-start mb-3">
                We're a team that builds with purpose, not just pixels.
              </h2>
              <p className="desc text-start">
                This isn't just our job — it's what we're passionate about. From
                day one, our focus has been simple: help businesses grow by
                using design, technology, and strategy the smart way. No
                gimmicks. No overpromises. Just solid work that delivers.
                <br />
                <br />
                We're not the biggest agency in the game — and that's exactly
                the point. We stay lean, stay focused, and bring senior-level
                thinking to every project we take on.
                <br />
                <br />
                We're not a service provider. We're a partner.
                <br />
                <br />
                Our team brings together creatives, engineers, strategists, and
                problem-solvers who thrive on building digital experiences that
                actually work. For us, success isn't a pretty website or a fancy
                feature — it's seeing your business hit its goals.
                <br />
                <br />
                We listen closely, ask the right questions, and make sure the
                solutions we build are tailored to your needs — not just the
                latest trend.
                <br />
                <br />
                Whether you're launching something from scratch or looking to
                optimize what already exists, we're here to help you do it
                right.
              </p>
            </div>
          </div>
          <section>
            <h2 data-aos="fade-up" className="heading-2 mt-[4rem] mb-5">
              Magic Behind Our IT Solutions
            </h2>
            <p data-aos="fade-up" className="desc max-w-[50rem]">
              We begin by conducting a comprehensive needs assessment to
              understand your specific requirements, challenges, and goals.
            </p>
            <div className="pt-[3rem]">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col-reverse sm:grid text-start grid-cols-2 gap-5 max-w-5xl mx-auto">
                  <div
                    data-aos="fade-right"
                    className="rounded-xl p-5 bg-gradient-to-r from-primary/60 to-primary/80"
                  >
                    <h6 className="font-bold text-lg font-raleway">
                      Innovation at Heart
                    </h6>
                    <p className="desc mt-2">
                      At SerraBytesAI Solutions, innovation is our driving
                      force. We constantly explore emerging technologies and
                      trends to create future-ready solutions that push the
                      boundaries of what’s possible. We aim to deliver solutions
                      that not only solve today’s challenges but anticipate the
                      needs of tomorrow.
                    </p>
                  </div>
                  <div
                    data-aos="fade-left"
                    className="h-full flex items-center"
                  >
                    <img
                      src={aboutUsGridImg1}
                      alt="Innovation at Heart"
                      className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:grid text-start grid-cols-2 gap-5 max-w-5xl mx-auto">
                  <div
                    data-aos="fade-right"
                    className="h-full flex items-center"
                  >
                    <img
                      src={aboutUsGridImg2}
                      alt="Client-Centric Approach"
                      className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                    />
                  </div>
                  <div
                    data-aos="fade-left"
                    className="rounded-xl p-5 bg-gradient-to-r from-secondary/60 to-secondary/80"
                  >
                    <h6 className="font-bold text-lg font-raleway">
                      Client-Centric Approach
                    </h6>
                    <p className="desc mt-2">
                      We understand that every business is unique, and so are
                      its challenges and goals. We take a highly personalized
                      approach, tailoring each project to align perfectly with
                      your specific needs. From startups to enterprises, we work
                      closely with our clients, building long-term partnerships
                      grounded in trust, transparency, and mutual success.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col-reverse sm:grid text-start grid-cols-2 gap-10 sm:gap-5 max-w-5xl mx-auto">
                  <div
                    data-aos="fade-right"
                    className="rounded-xl p-5 bg-gradient-to-r from-primary/60 to-primary/80"
                  >
                    <h6 className="font-bold text-lg font-raleway">
                      Commitment to Excellence
                    </h6>
                    <p className="desc mt-2">
                      Quality and reliability are at the core of everything we
                      do. We pride ourselves on delivering world-class digital
                      products that are robust, scalable, and secure. Every
                      project undergoes rigorous quality assurance, ensuring
                      that we exceed expectations and industry standards at
                      every turn.
                    </p>
                  </div>
                  <div
                    data-aos="fade-left"
                    className="h-full flex items-center"
                  >
                    <img
                      src={aboutUsGridImg3}
                      alt="Commitment to Excellence"
                      className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:grid text-start grid-cols-2 gap-5 max-w-5xl mx-auto">
                  <div
                    data-aos="fade-right"
                    className="h-full flex items-center"
                  >
                    <img
                      src={aboutUsGridImg4}
                      alt="Innovation with Purpose"
                      className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                    />
                  </div>
                  <div
                    data-aos="fade-left"
                    className="rounded-xl p-5 bg-gradient-to-r from-secondary/60 to-secondary/80"
                  >
                    <h6 className="font-bold text-lg font-raleway">
                      Innovation with Purpose
                    </h6>
                    <p className="desc mt-2">
                      Technology without purpose is meaningless. At SerraBytesAI
                      Solutions, we believe in leveraging technology to create
                      meaningful impact—whether it’s streamlining processes,
                      enhancing customer experiences, or driving growth. Our
                      solutions are designed to transform businesses, help them
                      scale, and lead in their industries.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col-reverse sm:grid text-start grid-cols-2 gap-5 max-w-5xl mx-auto">
                  <div
                    data-aos="fade-right"
                    className="rounded-xl p-5 bg-gradient-to-r from-primary/60 to-primary/80"
                  >
                    <h6 className="font-bold text-lg font-raleway">
                      End to End Solutions
                    </h6>
                    <p className="desc mt-2">
                      We offer a complete suite of services, providing holistic
                      support from concept to deployment and beyond. Our goal is
                      to be your trusted partner throughout your entire digital
                      journey—whether it’s building your online presence,
                      automating your operations, or creating immersive
                      experiences for your customers.
                    </p>
                  </div>
                  <div
                    data-aos="fade-left"
                    className="h-full flex items-center"
                  >
                    <img
                      src={aboutUsGridImg5}
                      alt="End to End Solutions"
                      className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* What We're Really Good At Section */}
          <div className="mt-[5rem] w-full">
            <h2 className="heading-2 text-center mb-5">
              What We're Really Good At
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div
                data-aos="fade-up"
                className="p-6 bg-gray-800 bg-opacity-40 rounded-lg"
              >
                <ul className="text-left space-y-4">
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-3">✓</span>
                    <span>
                      Designing clean, intuitive user experiences that convert
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-3">✓</span>
                    <span>
                      Driving organic traffic through smart SEO and strong
                      content
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-3">✓</span>
                    <span>
                      Boosting conversions through data-backed CRO strategies
                    </span>
                  </li>
                </ul>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="p-6 bg-gray-800 bg-opacity-40 rounded-lg"
              >
                <ul className="text-left space-y-4">
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-3">✓</span>
                    <span>
                      Building dashboards and analytics tools that keep you in
                      control
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-3">✓</span>
                    <span>
                      Integrating payment gateways that make transactions
                      seamless
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-3">✓</span>
                    <span>
                      Deploying AI tools like chatbots, voice assistants, and
                      automation to save time and scale faster
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="desc text-center mt-4">
              If it makes the digital side of your business run smoother, we
              probably do it — and we do it well.
            </p>
          </div>

          {/* What We Believe In Section */}
          <div className="mt-[5rem] w-full">
            <h2 className="heading-2 text-center mb-5">What We Believe In</h2>
            <p className="desc text-center mb-6">
              We're big on transparency, collaboration, and building for the
              long haul. These are a few values we stick to, no matter the
              project:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div
                data-aos="fade-up"
                className="p-6 bg-gray-800 bg-opacity-40 rounded-lg"
              >
                <h3 className="font-bold text-xl mb-3">Keep it simple</h3>
                <p>
                  Clear communication, straightforward solutions, no jargon.
                </p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="p-6 bg-gray-800 bg-opacity-40 rounded-lg"
              >
                <h3 className="font-bold text-xl mb-3">
                  Build for the long term
                </h3>
                <p>Quick fixes aren't our thing. We think sustainability.</p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="p-6 bg-gray-800 bg-opacity-40 rounded-lg hidden sm:flex flex-col"
              >
                <h3 className="font-bold text-xl mb-3">
                  Work like it's our own
                </h3>
                <p>We take ownership and care about the outcome.</p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="p-6 bg-gray-800 bg-opacity-40 rounded-lg md:col-span-1.5"
              >
                <h3 className="font-bold text-xl mb-3">Your time and trust</h3>
                <p>Your time and ours. We don't waste either.</p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="400"
                className="p-6 bg-gray-800 bg-opacity-40 rounded-lg md:col-span-1.5"
              >
                <h3 className="font-bold text-xl mb-3">Always improving</h3>
                <p>Our work evolves. So do we.</p>
              </div>
            </div>
          </div>

          {/* Who We Work With Section */}
          <div className="mt-[5rem] w-full hidden sm:flex flex-col">
            <h2 className="heading-2 text-center mb-5">Who We Work With</h2>
            <p className="desc text-center">
              We've partnered with startups finding their footing, established
              brands looking for a digital refresh, and fast-growing teams ready
              to scale. If you're serious about building something with purpose,
              we're ready to get on board.
            </p>
          </div>

          {/* Why Clients Come Back Section */}
          <div className="mt-[5rem] w-full">
            <h2 className="heading-2 text-center mb-5">
              Why Clients Come Back
            </h2>
            <div
              data-aos="fade-up"
              className="p-8 bg-gray-800 bg-opacity-40 rounded-lg"
            >
              <p className="desc text-center">
                It's not just the results — it's how we work together.
                <br />
                <br />
                We're responsive. We listen. We care.
                <br />
                We don't hide behind process or tech talk.
                <br />
                And we're just as invested in your success as you are.
              </p>
            </div>
          </div>

          {/* Let's Build Something That Matters Section */}
          <div className="mt-[5rem] w-full hidden sm:flex flex-col">
            <h2 className="heading-2 text-center mb-5">
              Let's Build Something That Matters
            </h2>
            <div
              data-aos="fade-up"
              className="p-8 bg-gray-800 bg-opacity-30 rounded-lg"
            >
              <p className="desc text-center mb-6">
                We're here for the long game — not quick wins or cookie-cutter
                solutions. If you're ready to build smarter, work with people
                who actually care, and create digital experiences you're proud
                of — let's talk.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {/* <Link to={''} className="px-6 py-3 bg-gradient-to-r from-yellow-600 to-orange-500 rounded-full hover:opacity-90 transition-all">
                  📞 Book a call
                </Link> */}
                {/* <Link
                  to={"/contact-us"}
                  className="px-6 py-3 bg-gradient-to-r from-orange-600 to-yellow-500 rounded-full hover:opacity-90 transition-all"
                >
                  💬 Message our expert team
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <UnlockEfficiency /> */}
      <div className="pb-[5rem]">
        <PricingSection />
      </div>
    </div>
  );
};

export default AboutUs;
