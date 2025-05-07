import logoImg from "./assets/logo/logo.png";
import whyChooseUsIcon1 from "./assets/images/ph_target-light.png";
import whyChooseUsIcon2 from "./assets/images/mage_light-bulb.png";
import whyChooseUsIcon3 from "./assets/images/tdesign_user-talk.png";
import whyChooseUsIcon4 from "./assets/images/healthicons_ui-secure-outline.png";
import whyChooseUsPng from "./assets/images/whychooseus-png.png";
import faqPng from "./assets/images/faq-character.png";
import appDevBanner from "./assets/images/app-dev-banner.jpg";
import webDevBanner from "./assets/images/web-landing-banner.jpg";
import webLandingAbout from "./assets/images/web-landing-about1.png";
import appLandingAbout from "./assets/images/app-landing-about.png";
import endlessOpportunitiesImg1 from "./assets/images/section-8-img-1.png";
import endlessOpportunitiesImg2 from "./assets/images/section-8-img-2.png";
import endlessOpportunitiesImg3 from "./assets/images/section-8-img-3.png";
import homeBannerVideo from "./assets/videos/home-banner.mp4";
import defaultBanner from "./assets/images/banner.jpg";
import aboutUsBanner from "./assets/images/about-us-banner.jpg";
import aboutUsGridImg1 from "./assets/images/aboutus-png1.png";
import aboutUsGridImg2 from "./assets/images/aboutus-png2.png";
import aboutUsGridImg3 from "./assets/images/aboutus-png3.png";
import aboutUsGridImg4 from "./assets/images/aboutus-png4.png";
import aboutUsGridImg5 from "./assets/images/aboutus-png5.png";
import aboutUsPageImg from "./assets/images/about-us-pageImg.jpg";
import { ReactComponent as EcommerceIcon } from "./assets/svgs/ecommerce.svg";
import { ReactComponent as SocialMediaIcon } from "./assets/svgs/socialmedia.svg";
import { ReactComponent as LandingPageIcon } from "./assets/svgs/landingpage.svg";
import { ReactComponent as CustomWebsiteIcon } from "./assets/svgs/customwebsite.svg";
import { ReactComponent as IosIcon } from "./assets/svgs/iosdevelopment.svg";
import { ReactComponent as AndroidIcon } from "./assets/svgs/androiddevelopment.svg";
import { ReactComponent as FlutterIcon } from "./assets/svgs/flutterdevelopment.svg";
import { ReactComponent as HybridAppIcon } from "./assets/svgs/hybridappdevelopment.svg";

// porfolio image
// Import all images at the top (Web Development)
import FiveGHomesImg from "./assets/web-development-portfolio/5ghomes.png";
import ColdCreekcapImg from "./assets/web-development-portfolio/cold creekcap.png";
import ThinkRealityImg from "./assets/web-development-portfolio/think reality.png";
import AkashMegaMart from "./assets/web-development-portfolio/Akash Mega Mart.png";
import MidwamImmersive from "./assets/web-development-portfolio/Midwam – Immersive Experience Design Company.png";

// Import all images at the top (App Development)
import RentopBikeAndCarImgapp from "./assets/app-development-portfolio/Rentop – Bike & Car Rentals.jpg";
import AkashMegaMartApp from "./assets/app-development-portfolio/Akash Mega Mart Mobile App.jpg";
import FeelItMobileApp from "./assets/app-development-portfolio/FeelIt Mobile App.jpg";
import KlikomicsMobileApp from "./assets/app-development-portfolio/Klikomics Mobile App.jpg";
import AutoSnapMobileApp from "./assets/app-development-portfolio/AutoSnap Mobile App.jpg";

import { lazy } from "react";
const Home = lazy(() => import("./pages/website/Home"));
const Services = lazy(() => import("./pages/website/Services"));
const ContactUs = lazy(() => import("./pages/website/ContactUs"));
const AboutUs = lazy(() => import("./pages/website/AboutUs"));

export {
  logoImg,
  whyChooseUsPng,
  whyChooseUsIcon1,
  whyChooseUsIcon2,
  whyChooseUsIcon3,
  whyChooseUsIcon4,
  faqPng,
  appDevBanner,
  webDevBanner,
  webLandingAbout,
  appLandingAbout,
  endlessOpportunitiesImg1,
  endlessOpportunitiesImg2,
  endlessOpportunitiesImg3,
  homeBannerVideo,
  defaultBanner,
  aboutUsBanner,
  aboutUsGridImg1,
  aboutUsGridImg2,
  aboutUsGridImg3,
  aboutUsGridImg4,
  aboutUsGridImg5,
  aboutUsPageImg,
};

// company details
export const companyDetails = {
  name: "SerraBytesAI Solutions",
  phone: "+91-80886 86984",
  whatsapp: "8088686984",
  address: `SerraBytesAI Solutions
Unit 101, Oxford Towers
139, HAL Old Airport Road
Kodihalli
Bangalore 560008`,
  email: "support@serrabytesai.com",
  instagram: "https://www.instagram.com/serrabytesai?igsh=b2hhZHZsYjcyeXY0",
  twitter: "https://x.com/serrabytesai_",
  linkedIn: "https://www.linkedin.com/company/serrabytesai/",
  facebook: "https://www.facebook.com/profile.php?id=61575897055039",
};

// website routes
export const routes = [
  {
    name: "Home",
    link: "/",
    component: <Home />,
  },
  {
    name: "Services",
    link: "/services",
    component: <Services />,
    children: [
      {
        link: "/web-development",
        name: "Web Development",
      },
      {
        link: "/app-development",
        name: "App Development",
      },
    ],
  },
  {
    name: "About Us",
    link: "/about-us",
    component: <AboutUs />,
  },
  {
    name: "Contact Us",
    link: "/contact-us",
    component: <ContactUs />,
  },
];

export const faqs = [
  {
    id: 1,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
  {
    id: 2,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
  {
    id: 3,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
  {
    id: 4,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
  {
    id: 5,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerence Websites",
    icon: EcommerceIcon,
    description:
      "Empowering your online business with tailored ecommerce solutions. Our platforms boost customer engagement, streamline operations, and drive revenue growth. ",
  },
  {
    id: 2,
    title: "Social Media Websites",
    icon: SocialMediaIcon,
    description:
      "Get custom social media websites that captivate and engage your audience, driving growth and brand loyalty effortlessly",
  },
  {
    id: 3,
    title: "Landing Websites",
    icon: LandingPageIcon,
    description:
      " Creating high-converting landing pages that capture attention and drive action. Tailored designs that showcase your brand’s message and maximize conversions.",
  },
  {
    id: 4,
    title: "Custom Websites",
    icon: CustomWebsiteIcon,
    description:
      "Delivering tailor-made websites designed to meet your unique business needs. Our solutions blend creativity and functionality for an exceptional online experience.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    icon: IosIcon,
    description:
      "Our skilled developers work with both Swift and Objective-C to build robust and efficient apps. We optimize your app for performance, speed, and responsiveness.",
  },
  {
    id: 2,
    title: "Android App Development",
    icon: AndroidIcon,
    description:
      "We design and develop tailor-made Android apps that align with your vision and business goals.Proficient in both Java and Kotlin, we build robust and efficient apps.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    icon: FlutterIcon,
    description:
      "Flutter allows you to build apps for both iOS and Android using a single codebase. While Flutter's default web app architecture presents challenges, we can overcome them with smart strategies. ",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    icon: HybridAppIcon,
    description:
      "We build feature-rich hybrid apps tailored to your business needs. We create mobile-friendly apps that work seamlessly across iOS and Android devices.",
  },
];

// all services
// export const allServices = [
//   {
//     id: 1,
//     title: "Web Development",
//     desc: "Crafting modern, responsive, and scalable websites that deliver outstanding user experiences. From front-end to back-end, our web solutions are tailored to meet your business needs.",
//     detailContent:
//       "At SerraBytesAI Solutions, we specialize in delivering high-performance websites and digital platforms that help businesses thrive online. From custom web development to responsive design, we build solutions that are both user-friendly and visually stunning. Let's turn your vision into a reality.",
//   },
//   {
//     id: 2,
//     title: "Mobile App Development",
//     desc: "Creating high-performance mobile applications for iOS and Android that engage users and drive business growth. Our apps are designed with a focus on usability, speed, and seamless functionality.",
//     detailContent:
//       "At SerraBytesAI Solutions, we specialize in creating intuitive, high-performing mobile applications tailored to meet the unique needs of businesses across industries. Our expert team combines technical expertise with creative design to develop apps that drive engagement and growth.",
//   },
//   {
//     id: 3,
//     title: "Chatbots",
//     desc: "Developing intelligent chatbots to automate customer interactions, streamline processes, and enhance user engagement. Our chatbots are powered by advanced natural language processing for accurate and human-like conversations.",
//     detailContent:
//       "At SerraBytesAI Solutions, we specialize in developing AI-powered chatbots that streamline customer support, enhance user engagement, and improve business efficiency. Whether you're looking for a customer service assistant or an interactive sales bot, we build tailored solutions that understand and respond to your users in real time.",
//   },
//   {
//     id: 4,
//     title: "Machine Learning Solutions",
//     desc: "Leveraging data-driven insights to build predictive models, automate processes, and unlock new opportunities. Our machine learning solutions are designed to optimize performance and drive innovation.",
//     detailContent:
//       "SerraBytesAI Solutions was founded with the vision of helping businesses harness the full potential of artificial intelligence and machine learning. With expertise in data science, AI engineering, and algorithm development, our team provides tailored solutions that address real business problems. We are committed to pushing the boundaries of what’s possible with data-driven insights and intelligent automation.",
//   },
//   {
//     id: 5,
//     title: "Game Development",
//     desc: "At SerraBytesAI Solutions, we specialize in game development, creating immersive and enjoyable gaming experiences.",
//     detailContent:
//       "At SerraBytesAI Solutions, we don’t just build games—we create worlds. Our team of passionate developers, artists, and storytellers brings your ideas to life with captivating gameplay, stunning visuals, and unforgettable narratives. Whether it’s an action-packed adventure or a mind-bending puzzle, our games are designed to transport players into new realms and keep them engaged.",
//   },
//   {
//     id: 6,
//     title: "Computer Vision",
//     desc: "Utilizing advanced computer vision techniques to analyze visual data, enabling smart automation, enhanced security, and actionable insights. From object detection to facial recognition, our solutions are precise and reliable.",
//     detailContent:
//       "At SerraBytesAI Solutions, we specialize in cutting-edge computer vision technology that enables machines to interpret and act on visual data. Our AI-driven solutions power automation, enhance security, and provide deep insights across industries. From object detection to video analysis, we help businesses transform raw visual data into actionable insights.",
//   },
//   {
//     id: 7,
//     title: "Virtual Reality (VR) and Augmented Reality (AR) Development",
//     desc: "Immerse your audience with cutting-edge VR and AR experiences that redefine engagement and elevate brand perception.",
//     detailContent:
//       "At SerraBytesAI Solutions, we specialize in creating interactive augmented reality experiences that engage users, enhance brand interaction, and drive innovation. From retail and marketing to education and gaming, our AR solutions provide immersive experiences that blend the digital with the real world, offering limitless possibilities for engagement and creativity.",
//   },
// ];

export const serviceDetails = [
  {
    id: 1,
    title: "UI/UX Design That Converts — Not Just Looks Good",
    description:
      "Good design isn’t just about style. It’s about guiding people through your product or site in a way that feels effortless — and gets results. We focus on how users actually think, move, and decide, turning that insight into design that performs.",
    points: [
      "User flows that feel natural and help people complete their goals",
      "Clean, responsive layouts that work smoothly on any screen",
      "Prototypes you can test and tweak before launching",
      "Focus on real-world usability, not just trendy visuals",
    ],
    closing:
      "We design with the end-user in mind — and your bottom line at the center.",
  },
  {
    id: 2,
    title: "SEO That Brings the Right People to You",
    description:
      "Getting traffic is great. Getting the right traffic is even better. We help businesses get seen by the people who matter most — using SEO strategies that are built to last.",
    points: [
      "Site structure and speed optimization that improves both rankings and user experience",
      "Keyword research and page optimization that target what your audience is searching for",
      "Local SEO to help you show up in your area — or global strategies for wider reach",
      "Content that supports your goals while meeting search engine standards",
    ],
    closing:
      "We make sure your site works hard even when you're not actively promoting it.",
  },
  {
    id: 3,
    title: "Conversion Optimization That Makes Every Click Count",
    description:
      "You’ve got people visiting your site — but are they taking action? We help you understand where drop-offs are happening, and what changes will help turn interest into action.",
    points: [
      "Detailed testing and analysis to figure out what’s holding users back",
      "Form and checkout improvements that reduce friction and increase completions",
      "Page structure tweaks that align better with how users actually behave",
      "Data-informed decisions — no guessing, no assumptions",
    ],
    closing:
      "Even small improvements in conversion rates can have a big impact on your revenue.",
  },
  {
    id: 4,
    title: "Business Dashboards and Analytics That Make Sense",
    description:
      "Too much data is just noise — unless you can turn it into something useful. We create custom dashboards that show you exactly what you need to know, when you need to know it.",
    points: [
      "Real-time reporting for your key metrics",
      "Funnel tracking so you can see where users drop off",
      "Custom views for different teams — sales, marketing, leadership",
      "Integrations with your current tools so everything talks to each other",
    ],
    closing:
      "Whether you’re tracking sales, leads, or customer behavior — you’ll finally have the clarity to make smarter decisions, faster.",
  },
  {
    id: 5,
    title: "Payment Integration That Just Works",
    description:
      "You want your customers to check out without a second thought. We make that happen with secure, smooth, and flexible payment systems that fit your business model.",
    points: [
      "Fast, user-friendly checkout experiences",
      "Support for one-time, subscription, or recurring payments",
      "Integrations with top providers like Stripe, PayPal, Razorpay, Apple Pay & more",
      "Built-in fraud protection and compliance with global standards",
    ],
    closing: "When payments are easy, people buy more — and they come back.",
  },
  {
    id: 6,
    title: "AI Tools That Actually Help Your Business Run Smarter",
    description:
      "AI isn’t just a buzzword — when used the right way, it can take real pressure off your team and make the customer experience smoother and faster. We help you integrate AI where it makes the most sense.",
    points: [
      "Chatbots that guide users, answer questions, and capture leads — instantly",
      "Voice bots for support or navigation, especially on mobile",
      "AI-powered checkout flows that recommend products or services on the fly",
      "Automated systems for follow-ups, reminders, and lead nurturing",
    ],
    closing:
      "These tools don’t replace your team — they support it. Think of it as having an extra pair of hands running in the background, 24/7.",
  },
];

// about us page why choose content
export const whyChooseUsContent = [
  {
    title: "Customized Solutions for Every Business",
    desc: "We believe in a tailored approach because every business is unique. We take time to understand your goals and create custom digital solutions that align perfectly with your vision.",
  },
  {
    title: "Cutting-Edge Technology",
    desc: "Our team is equipped with the latest tools and technologies to bring your project to life, ensuring that you stay ahead in the ever-changing digital space.",
  },
  {
    title: "Security and Reliability",
    desc: "At SerraBytesAI Solutions, we take security seriously. Our solutions are built with stringent security protocols to safeguard your business data and protect it from cyber threats.",
  },
  {
    title: "Long-Term Partnerships",
    desc: "We’re not just a service provider; we’re your strategic partner. From conceptualization to deployment and ongoing support, we’re with you every step of the way, ensuring your success in the digital landscape.",
  },
  {
    title: "Agility and Innovation",
    desc: "As technology evolves, so do we. We continuously adapt to the latest trends and innovations to deliver products that not only meet your current needs but are scalable for the future.",
  },
];

//portfolio

//web port folio
export const webPortfolio = [
  {
    id: 1,
    img: FiveGHomesImg,
    title: "5g Homes",
    link: "https://5ghighspeedinternet.co",
  },
  {
    id: 3,
    img: ColdCreekcapImg,
    title: "Cold Creekcap",
    link: "https://www.coldcreekcap.com",
  },
  {
    id: 9,
    img: ThinkRealityImg,
    title: "Think Reality",
    link: "https://thinkrealty.ae",
  },
  {
    id: 90,
    img: AkashMegaMart,
    title: "Akash Mega Mart",
    link: "https://akashmegamart.com/",
  },
  {
    id: 91,
    img: MidwamImmersive,
    title: "Midwam – Immersive Experience Design Company",
    link: "https://www.midwam.com/en/about",
  },
];
//app port folio
export const appPortfolio = [
  {
    id: 1,
    img: AkashMegaMartApp,
    title: "Akash Mega Mart Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.app.akash_mega_mart",
  },
  {
    id: 2,
    img: FeelItMobileApp,
    title: "FeelIt Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.app.akash_mega_mart",
  },
  {
    id: 3,
    img: KlikomicsMobileApp,
    title: "Klikomics Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
  },
  {
    id: 4,
    img: AutoSnapMobileApp,
    title: "AutoSnap Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
  },
  {
    id: 8,
    img: RentopBikeAndCarImgapp,
    title: "Rentop Bike and Car",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
  },
];
