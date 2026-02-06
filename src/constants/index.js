import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  BNP,
  BNP2,
  Steganography,
  DOMJudge,
  EvolutionProject,
  Find_Vuln,
  Warner,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "Client & Campaign Management", icon: c },
  { title: "Expertise in Influencer Marketing", icon: cpp },
  { title: "Microsoft office", icon: python },
  { title: "Adaptability", icon: java },
];

export const technologies = [
  { name: "Email", icon: html ,link: "mailto:lpuga2012@gmail.com"},
  { name: "LinkedIn", icon: css, link: "https://www.linkedin.com/in/lucaspugamateo/" },
  { name: "Location", icon: javascript, link: "https://maps.app.goo.gl/hXgfzysp5Dbk2eut5" },
];

export const experiences = [
  {
    title: "Marketing manager",
    company_name: "Playoffnations Co.",
    icon: BNP,
    iconBg: "#0f2111ff",
    date: "March 2024 - September 2025",
    points: [
      "Account management (Kellogg's, Pringles, Anaya, etc.), influencer marketing management, social media management, and campaign management with subsequent reporting.",
      "Event organization, ensuring the best execution",
      "Advice on knowledge and decisions in video games",
    ],
  },
  {
    title: "Campaigns and Activations manager",
    company_name: "Playoffnations Co.",
    icon: BNP,
    iconBg: "#0f2111ff",
    date: "October 2023 - March 2024",
    points: [
      "Influencer marketing management, social media management, and campaign management with subsequent reporting.",
    ],
  },
  {
    title: "Customer management in a beauty lab",
    company_name: "Telco",
    icon: BNP2,
    iconBg: "#0f2111ff",
    date: "October 2021 - October 2023",
    points: [
      "Managing conflict situations, providing a swift and appropriate response.",
    ],
  },
  
  
  
];

export const projects = [
  {
    name: "Telefónica 100th anniversary",
    description:
      "We created an immersive experience for Telefónica on Roblox using storytelling, gamification and influencers, connecting with young people internationally and reinforcing its innovative positioning.",
    tags: [
      { name: "Roblox", color: "pink-text-gradient" },
      { name: "Gamification", color: "yellow-text-gradient" },
      { name: "Storytelling", color: "orange-text-gradient" },
      { name: "Influencer-Marketing", color: "orange-text-gradient" },
    ],
    image: Steganography,
    source_code_link: 
      "https://www.youtube.com/watch?v=GVJrQNEBMQA&feature=youtu.be",
  },
  {
    name: "Ultimate Pringles Rocket League Challenge",
    description:
      "We created an immersive gaming experience for Pringles in Rocket League, with creators, competition and our own design, achieving millions of impressions and connecting with Gen Z",
    tags: [
      { name: "Pringles", color: "pink-text-gradient" },
      { name: "Rocket-League", color: "blue-text-gradient" },
      { name: "Influencer-Marketing", color: "orange-text-gradient" },
      { name: "Account-Management", color: "orange-text-gradient" },
    ],
    image: DOMJudge,
    source_code_link: 
      "https://www.youtube.com/watch?si=BOSC-bredtTDC5sr&v=fWL4v_1SYfU&feature=youtu.be",
  },
  {
    name: "Antwology: A new way of education",
    description:
      "We promoted Antwology with an educational and gaming strategy: influencers, organic content, and interactive formats that boosted views and audience numbers on Twitch and positioned the brand as a technological benchmark.",
    tags: [
      { name: "Podcast", color: "pink-text-gradient" },
      { name: "Educational", color: "orange-text-gradient" },
      { name: "Influencer-Marketing", color: "yellow-text-gradient" },
      { name: "Project-Management", color: "orange-text-gradient" },
    ],
    image: EvolutionProject,
    source_code_link:
      "https://playoffnations.com/en/blog/entrada/antwology-way-education/",
  },
  {
    name: "From Map to Plane",
    description:
      "We brought Kiwi.com to Twitch with GeoGuessr and streamers, turning destinations into challenges and cheap flights into entertainment, integrating travel and gaming in a natural and entertaining way.",
    tags: [
      { name: "Kiwi.com", color: "pink-text-gradient" },
      { name: "GeoGuessr", color: "orange-text-gradient" },
      { name: "Influencer-Marketing", color: "yellow-text-gradient" },
      { name: "Campaign-Management", color: "orange-text-gradient" },
    ],
    image: Find_Vuln,
    source_code_link:
      "https://playoffnations.com/blog/entrada/kiwi-from-map-to-plane/",
  },

  {
    name: "Warner Bros. Promotions",
    description:
      "We developed social media campaigns for Warner Bros.' new releases, driving purchases and rentals of titles and achieving excellent results in reach, engagement, and conversion. Joker: Folie à Deux, Dune Part Two, Twisters Godzilla x Kong The new empire... were some of the titles we promoted.",
    tags: [
      { name: "Warner Bros.", color: "pink-text-gradient" },
      { name: "Social-Media", color: "orange-text-gradient" },
      { name: "Influencer-Marketing", color: "yellow-text-gradient" },
      { name: "Campaign-Management", color: "orange-text-gradient" },
    ],
    image: Warner,
    source_code_link:
      "https://www.instagram.com/p/C9KKfmso-8o/",
  },
];
