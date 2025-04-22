import React from "react";
import { useKeenSlider } from "keen-slider/react";
import profileImg1 from "../../assets/images/profileimg-1.png";
import profileImg2 from "../../assets/images/profileimg-2.png";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";
import { BiUserCircle } from "react-icons/bi";

const reviews = [
  // UI/UX Design
  {
    id: 1,
    name: "Neha Rao",
    role: "Co-Founder, LoopTrack",
    desc: "“Our website looked fine on the surface, but something was off. Users weren’t staying long, and conversions were low. Their team came in, reworked the layout, simplified the flow, and within weeks we saw a major boost in engagement. People are actually completing sign-ups now. That says it all.”",
    category: "UI/UX Design",
  },
  {
    id: 2,
    name: "Alan Whitmore",
    role: "Product Lead, BrightPath",
    desc: "“This wasn’t just a design project — it was a full user experience overhaul. They dug into our product, talked to our users, and came back with something cleaner, faster, and more intuitive. It’s the first time we’ve had users compliment the interface.”",
    category: "UI/UX Design",
  },

  // SEO
  {
    id: 3,
    name: "Sana Iqbal",
    role: "Growth Manager, Petura Pets",
    desc: "“We had content. We had a decent website. But we weren’t showing up anywhere. Their SEO team helped us restructure everything from the ground up. Now, we rank on the first page for several key terms — and the leads coming in are actually qualified.”",
    category: "SEO",
  },
  {
    id: 4,
    name: "Marcus Reed",
    role: "CEO, Holt & Haven",
    desc: "“They approached SEO the right way — no gimmicks, no shortcuts. It was all about building a real foundation: speed, structure, content, relevance. And it worked. Organic traffic is now our strongest source of leads.”",
    category: "SEO",
  },

  // Conversion Rate Optimization
  {
    id: 5,
    name: "Jaya Menon",
    role: "Founder, Ritual Wellness Co.",
    desc: "“We had solid traffic, but not enough of it was turning into business. Their team helped us identify where users were dropping off and fixed it with smart, simple changes. We didn’t redesign the whole site — we just made it work better. The difference in conversions was noticeable within the first few weeks.”",
    category: "Conversion Rate Optimization",
  },
  {
    id: 6,
    name: "Tom Elkins",
    role: "eCommerce Director, Bridge & Bay",
    desc: "“Their CRO work felt more like detective work. They showed us things we hadn’t considered — small friction points that were costing us customers. After implementing their changes, our checkout completion rate improved by over 40%.”",
    category: "Conversion Rate Optimization",
  },

  // Dashboards and Analytics
  {
    id: 7,
    name: "Deeksha Anand",
    role: "Operations Lead, Urban Bloom",
    desc: "“We used to spend hours pulling reports from different platforms. Now we have a custom dashboard that shows exactly what we need to know — in real time. It’s been a huge time-saver and helps us act faster.”",
    category: "Analytics & Dashboards",
  },
  {
    id: 8,
    name: "Mark Levinson",
    role: "Marketing Manager, Skillcore",
    desc: "“Their team helped us go from ‘data overload’ to clarity. We now have a better understanding of what’s working, where we’re losing users, and what actions to take next. It’s changed the way we approach campaigns.”",
    category: "Analytics & Dashboards",
  },

  // Payments
  {
    id: 9,
    name: "Rachel Lin",
    role: "Founder, Mella & Co.",
    desc: "“Integrating multiple payment gateways felt like a headache waiting to happen — until we worked with them. They handled everything, from subscriptions to one-click checkouts, and the process is now smooth and secure for both us and our customers.”",
    category: "Payments",
  },
  {
    id: 10,
    name: "Ethan Grant",
    role: "CTO, Clover Tools",
    desc: "“Since they rebuilt our checkout system, we’ve seen fewer abandoned carts and fewer support tickets around payment issues. It’s one of those backend things that makes a big difference on the front end.”",
    category: "Payments",
  },

  // AI Integration
  {
    id: 11,
    name: "Lydia Cho",
    role: "Head of Customer Experience, PureSkin",
    desc: "“The AI chatbot they built now handles about 70% of our support inquiries — and our customers are getting faster, better responses than ever. Our support team can now focus on complex issues instead of answering the same questions all day.”",
    category: "AI Integration",
  },
  {
    id: 12,
    name: "Rehan Malik",
    role: "eCommerce Strategist, Vento Supply",
    desc: "“We didn’t know where to start with AI, but they made it simple. From product suggestions at checkout to automated follow-ups, the tools they added are already driving more revenue — and saving us time.”",
    category: "AI Integration",
  },
];

const Testimonials = () => {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      slides: {
        perView: 2,
        spacing: 20,
      },
      breakpoints: {
        "(max-width: 1024px)": {
          slides: {
            perView: 1,
            spacing: 20,
          },
        },
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  // Button click handler
  const handleNextClick = () => {
    if (instanceRef.current) {
      instanceRef.current.next(); // Move to the next slide
    }
  };

  const handlePrevClick = () => {
    if (instanceRef.current) {
      instanceRef.current.prev(); // Move to the prev slide
    }
  };
  return (
    <div className="py-[5rem]">
      <div className="wrapper flex flex-col items-center gap-7">
        <div className="gradient-rounded-text-box" data-aos="fade-up">
          Testimonials
        </div>
        <h2
          className="heading-2 text-white mb-2 text-center"
          data-aos="fade-up"
        >
          Our Clients' Experiences
        </h2>
        <div ref={sliderRef} className="keen-slider" data-aos="fade-up">
          {reviews.map((item) => (
            <div
              key={item.id}
              className="keen-slider__slide min-h-[18rem] justify-between text-white p-7 bg-[#101010] rounded-xl flex flex-col gap-4"
            >
              <p className="italic desc">{item.desc}</p>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <div className="w-10 h-10 bg-white flex justify-center items-center rounded-full">
                    <BiUserCircle className="w-9 h-9 text-black" />
                  </div>
                  {/* <img
                    src={item.profileImg}
                    alt={item.name}
                    className="h-[2.5rem] min-w-[2.5rem] max-w-[2.5rem] rounded-full object-cover"
                  /> */}
                  <div className="flex flex-col h-full">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm">{item.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          data-aos="fade-up"
          data-aos-offset="-1000"
          className="flex justify-center items-center gap-10 mt-2"
        >
          <button
            className="text-primary text-5xl hover:text-primary/70 transition-all duration-200"
            onClick={handlePrevClick}
            aria-label="Previous slide"
          >
            <IoArrowBackCircleOutline />
          </button>
          <button
            className="text-primary text-5xl hover:text-primary/70 transition-all duration-200"
            onClick={handleNextClick}
            aria-label="Next slide"
          >
            <IoArrowForwardCircleOutline />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
