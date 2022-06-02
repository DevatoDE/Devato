import GlassGaming from "./assets/otherprojects/game.png";
import Launch from "./assets/otherprojects/launch.png";
import Bookmark from "./assets/otherprojects/bookmark.png";
import Memory from "./assets/otherprojects/memory.png";
import Invoice from "./assets/otherprojects/invoice.png";
import Pomodoro from "./assets/otherprojects/pomodoro.png";
import Weather from "./assets/otherprojects/weather.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

export const IMAGE_WIDTH = "1200";
export const IMAGE_HEIGHT = "630";
export const PORTFOLIO_WEBSITE_NAME = "Devato | Shopify Development";
export const BLOG_WEBSITE_NAME = "Devato | Blog";
export const TWITTER_CARD_TYPE = "summary_large_image";
export const AUTHOR = "Florian Stanglmeier";
export const WEBSITE_URL = "https://www.devato.de/";
export const BLOG_URL = "https://www.devato.de/blog";
export const TWITTER_ACC = "@flostanglmeier";
export const TWITTER_PUBLISHER = "https://twitter.com/FloStanglmeier";
export const WEBSITE_KEYWORDS =
  "Remix, Shopify, ECommerce, Shopify Agentur, Agentur Shopify, Shopify Software Entwicklung, Shopify Development, Backend, Software Development, Software Engineer, Modern Programing, Frontend Engineer, Web Developer, Florian Stanglmeier, Tobias Peters, Ecommerce Optimierung, Shopify Beratung, Shopify Programmierer";
export const BLOG_KEYWORDS =
"Remix, Shopify, ECommerce, Shopify Agentur, Agentur Shopify, Shopify Software Entwicklung, Shopify Development, Backend, Software Development, Software Engineer, Modern Programing, Frontend Engineer, Web Developer, Florian Stanglmeier, Tobias Peters, Ecommerce Optimierung, Shopify Beratung, Shopify Programmierer";
export const WEBSITE_DESCRIPTION =
  "Devato ist einer der führenden Anbieter für Shopify eCommerce Development im deutschsprachigen Raum. Durch jahrelange Expertise und Millionenumsätzen in eigenen Shopify Stores, weiß das Devato Team exakt, vor welchen Problemen eCommerce Treiber stehen. Dadurch können wir einen einzigartige Dienstleistung anbieten. Für die Entwicklung neuer Shopify Stores, Migration von WooCommerce zu Shopify, technische Backend Entwicklungen, API Integration & Automation sowie Optimierung von Sales und Conversion Rate unterstützen wir unsere Kunden.";
export const BLOG_DESCRIPTION =
  "Shopify Development von Experten: Alles rund um ECommerce Optimierung und Software Engineering für Shopify-Websites und -Apps.";
export const PORTFOLIO_IMAGE_URL =
  "https://www.devato.de/images/preview.jpg";
export const BLOG_IMAGE_URL =
  "https://www.devato.de/images/blogpreview.jpg";

export const topLevelLinksOnMobile: { href: string; displayName: string }[] = [
  {
    href: "/",
    displayName: "Home"
  },
  {
    href: "/blog",
    displayName: "Blog & Case Studies"
  },
  {
    href: "/#portfolio",
    displayName: "Services"
  },
  {
    href: "/#projects",
    displayName: "Projekte"
  },
  {
    href: "/#contact",
    displayName: "Kontakt"
  }
];
export const topLevelLinksOnDesktop: { href: string; displayName: string }[] = [
  {
    href: "/blog",
    displayName: "Blog & Case Studies"
  },
  {
    href: "/#portfolio",
    displayName: "Services"
  },
  {
    href: "/#projects",
    displayName: "Projekte"
  },
  {
    href: "/#contact",
    displayName: "Kontakt"
  }
];

export const THEME_COOKIE_KEY = "florian_s_theme";
interface SocialMediaIconData {
  name: string;
  className: string;
  icon: React.FC;
  externalUrl: string;
}
export const sm: SocialMediaIconData[] = [
  {
    name: "Facebook",
    className: "icon facebook relative bg-white text-black hover:text-white",
    icon: () => <FaFacebookF />,
    externalUrl: "https://www.facebook.com/alissa.1404"
  },
  {
    name: "Twitter",
    className: "icon twitter text-black hover:text-white",
    icon: () => <FaTwitter />,
    externalUrl: "https://twitter.com/alissang_dev"
  },
  {
    name: "Instagram",
    className: "icon instagram text-black hover:text-white",
    icon: () => <FaInstagram />,
    externalUrl: "https://www.instagram.com/alissang1211/"
  },
  {
    name: "Github",
    className: "icon github text-black hover:text-white",
    icon: () => <FaGithub />,
    externalUrl: "https://github.com/alissanguyen"
  },
  {
    name: "Linkedin",
    className: "icon linkedin text-black hover:text-white",
    icon: () => <FaLinkedin />,
    externalUrl: "https://www.linkedin.com/in/alissa-nguyen-dev/"
  }
];
export const contactFormHtmlId = "contact-form";

export const tags = [
  { id: "algorithms", name: "algorithms" },
  { id: "tutorials", name: "tutorials" },
  {
    id: "frontEnd",
    name: "front-end"
  },
  {
    id: "backEnd",
    name: "backend"
  },
  {
    id: "css",
    name: "css"
  },
  {
    id: "html",
    name: "html"
  },
  {
    id: "javascript",
    name: "javascript"
  },
  {
    id: "performance",
    name: "performance"
  },
  {
    id: "personal",
    name: "personal"
  },
  {
    id: "productivity",
    name: "productivity"
  },
  {
    id: "react",
    name: "react"
  },
  {
    id: "remix",
    name: "remix"
  },
  {
    id: "typescript",
    name: "typescript"
  },
  {
    id: "git",
    name: "git"
  },
  {
    id: "resources",
    name: "resources"
  },
  {
    id: "testing",
    name: "testing"
  },
  {
    id: "general",
    name: "general"
  },
  { id: "security", name: "security" },
  { id: "hosting", name: "hosting" },
  { id: "databases", name: "databases" },
  { id: "shopify", name: "shopify" },
];

export const enum TEXT_HIGHLIGHT {
  BLUE = "var(--blue)",
  YELLOW = "var(--yellow)",
  GREEN = "var(--green)",
  RED = "var(--red)",
  ORANGE = "var(--orange)",
  PINK = "var(--pink)",
  PURPLE = "var(--purple)"
}
export const enum STICKY_HIGHLIGHT {
  BLUE = "rgba(75, 150, 255, 0.1)",
  YELLOW = "var(--sticky-yellow-bg)",
  GREEN = "var(--sticky-green-bg)",
  ORANGE = "var(--sticky-orange-bg)",
  PINK = "rgb(255, 69, 140, 0.1)",
  PURPLE = "rgb(196, 69, 255, 0.1)",
  RED = "rgba(255, 69, 69, 0.1)"
}
export const enum STICKY_BORDER {
  BLUE = "rgba(75, 150, 255, 1)",
  YELLOW = "var(--sticky-yellow-border)",
  GREEN = "var(--sticky-green-border)",
  ORANGE = "var(--sticky-orange-border)",
  PINK = "rgb(255, 81, 148)",
  PURPLE = "rgb(203, 89, 255)",
  RED = "rgb(255, 69, 69)"
}
export const fixedWidthLayoutClasses = `relative max-w-screen-lg w-full text-3xl m-auto px-8 sm:px-12 lg:px-5 xl:px-0`;

export const skills = [
  {
    id: "a",
    name: "Javascript",
    icon: "/images/tech/javascript.svg"
  },
  {
    id: "b",
    name: "Typescript",
    icon: "/images/tech/typescript.svg"
  },
  {
    id: "c",
    name: "React.js",
    icon: "/images/tech/react.svg"
  },
  {
    id: "d",
    name: "HTML",
    icon: "/images/tech/html.svg"
  },
  {
    id: "e",
    name: "CSS",
    icon: "/images/tech/css.svg"
  },
  // {
  //   id: "s",
  //   name: "Remix",
  //   icon: "/images/tech/remix.svg"
  // },
  {
    id: "g",
    name: "C#",
    icon: "/images/tech/C.svg"
  },
  // {
  //   id: "h",
  //   name: "Supabase",
  //   icon: "/images/tech/supabase.svg"
  // },
  // {
  //   id: "i",
  //   name: "MongoDB",
  //   icon: "/images/tech/mongodb.svg"
  // },
  // {
  //   id: "j",
  //   name: "Stripe",
  //   icon: "/images/tech/stripe.svg"
  // },
  {
    id: "k",
    name: "Framework",
    icon: "/images/tech/NET.svg"
  },
  // {
  //   id: "l",
  //   name: "Azure Cloud",
  //   icon: "/images/tech/Azure.svg"
  // },
  // {
  //   id: "m",
  //   name: "Framer",
  //   icon: "/images/tech/framer.svg"
  // },
  {
    id: "n",
    name: "Tensorflow",
    icon: "/images/tech/tensorflow.svg"
  },
  {
    id: "o",
    name: "Python",
    icon: "/images/tech/Python.svg"
  },
  {
    id: "p",
    name: "Node.js",
    icon: "/images/tech/nodejs.svg"
  },
  {
    id: "q",
    name: "Shopify",
    icon: "/images/tech/shopify.svg"
  },
  {
    id: "r",
    name: "Woo Commerce",
    icon: "/images/tech/woocom.svg"
  },
  // {
  //   id: "t",
  //   name: "Cloudflare",
  //   icon: "/images/tech/cloudflare.svg"
  // },
  // {
  //   id: "u",
  //   name: "NodeJS",
  //   icon: "/images/tech/nodejs.svg"
  // }
];

export const headings = [
  "Frontend",
  "Backend",
  "Integrationen"
]

export const abilities = [
  "FRONTEND - Die richtige Technologie unterstützt Ihr Vorhaben und optimiert wichtige Aspekte wie Performance und Sicherheit. Durch ein tiefes technisches Verständnis der Technologien können Sie Ihre Projekte effizienter gestalten und schneller entwickeln. Wir nutzen Javascript, Typescript und React für unsere Front-End Projekte.",
  "BACKEND - Ein resilentes Backend System ist der Grundstein für einen automatisierten Online Store. Sei es die Automation der Bestellung beim Supplier oder die Integration von innovativen Machine Learning Systemen - Die Experten von Devato entwickeln eine individuelle Lösung für Ihr Unternehmen. ",
  "Durch jahrelange Erfahrung mit diversen E-Commerce Plattformen und Shop Systemen können wir Sie sowohl bei der Optimierung von Conversion Rates und allgemeinen KPI's helfen, als auch bei der Migration von ganzen Stores auf eine neue Plattform. "
];

export const recentProjects = [
  {
    name: "Unimals",
    description:
      "Unimals verkauft Artikel die der Kunde selbst gestalten kann. Neben einer ausgiebigen Analyse der bestehenden Prozesse, wurde eine gründliche Optimierung der generellen Schnittstellen vorgenommen. Ferner mussten alle Bestellungen im Backend automatisch an die Supplier API gesendet werden.",
    gitRepo: "https://github.com/alissanguyen/lunar",
    website: "https://www.unimals.de/",
    img: "/images/projects/unimals.png"
  },
  {
    name: "HelloBello",
    description: "Migration von WooCommerce zu Shopify auf Basis eines integrierten Subscription (Abo) Modelles.",
    gitRepo: "https://github.com/alissanguyen/league-demo",
    website: "https://www.hellobello.at/",
    img: "/images/projects/HelloBello.png"
  },
  {
    name: "LiWanda",
    description: "A responsive website with animations and futuristic design.",
    gitRepo: "https://github.com/alissanguyen/atom",
    website: "https://atom.alissanguyen.dev",
    img: "/images/projects/atom.jpg"
  },
  // {
  //   name: "Planets",
  //   description:
  //     "A responsive landing page to learn about planets in the universe.",
  //   gitRepo: "https://github.com/alissanguyen/planets",
  //   website: "https://planets.alissanguyen.dev",
  //   img: "/images/projects/planets.jpg"
  // },
  // {
  //   name: "Calculator App",
  //   description:
  //     "A responsive calculator app with mobile-first design and custom theme widget.",
  //   gitRepo: "https://github.com/alissanguyen/calculator-app",
  //   website: "https://calculator.alissanguyen.dev",
  //   img: "/images/projects/calculator.jpg"
  // },
  // {
  //   name: "GitHub Spotter 2.0",
  //   img: "/images/projects/githubspotter2.jpg",
  //   description:
  //     "A website designed to search GitHub users by usernames with GitHub API.",
  //   gitRepo: "https://github.com/alissanguyen/github-spotter-2",
  //   website: "https://githubspotter2.alissanguyen.dev"
  // }
];

export const mainProjects = [
  {
    name: "useTypewriter Hook",
    img: "/images/projects/usetypewriter.jpg",
    description:
      "A flexible hook for creating typewriter-like experience with React. Users can add functions for further applications.",
    role: "2020 — Design & web development",
    frameworks: ["React.js", "Next.js", "TypeScript", "CSS"],
    gitRepo: "https://github.com/alissanguyen/react-use-typewriter",
    website: "https://usetypewriter.com/",
    npm: "https://www.npmjs.com/package/use-typewriter-hook",
    bgLight: "linear-gradient(-120deg, #fedfe7, #fbedff)",
    bgDark:
      "linear-gradient(120deg, rgba(255, 91, 137, 0.25) 53.5%, rgba(234, 68, 68, .25) 100.2%)"
  },

  {
    name: "Dont Buy From Me",
    img: "/images/projects/dontbuyfromme.jpg",
    description:
      "A demo shopping website with add to cart features and purchases enabled.",
    role: "2020 — Design & web development",
    frameworks: ["Remix", "Stripe", "TailwindCSS", "Prisma"],
    gitRepo: "https://github.com/alissanguyen/dont-buy-from-me",
    website: "http://www.dontbuyfrom.me/",
    inProgress: true,
    bgLight: "linear-gradient(120deg, #d3e0ff, #eaeaff)",
    bgDark:
      "linear-gradient(120deg, rgba(82, 91, 219, .25) 11.2%, rgba(65, 71, 150, 0.25))"
  },
  {
    name: "Clipboard Demo Page",
    img: "/images/projects/clipboard.jpg",
    description:
      "A responsive landing page for a tool called Clipboard with animations.",
    role: "2020 — Web development",
    frameworks: ["React.js", "Javascript", "HTML & SCSS"],
    gitRepo: "https://github.com/alissanguyen/clipboard-page",
    website: "https://clipboard.alissanguyen.dev",
    bgLight: "linear-gradient(120deg, #ffeede, #fff9ea)",
    bgDark:
      "linear-gradient(120deg, rgba(217, 164, 4, .25) 10.7%, rgba(242, 116, 5, .25) 113.2%)"
  },
  {
    name: "Crowdfund",
    img: "/images/projects/crowdfund.jpg",
    description: "A responsive demo landing page for crowdfunding projects.",
    role: "2020 — Web development",
    frameworks: ["React.js", "Javascript", "HTML & CSS"],
    gitRepo: "https://github.com/alissanguyen/demo-crowdfunding-page",
    website: "https://crowdfund.alissanguyen.dev",
    bgLight: "linear-gradient(120deg, #e0f7ff, #dffff4)",
    bgDark:
      "linear-gradient(120deg, rgba(14, 174, 87, .25) 0%, rgba(12, 116, 117, .25) 90%)"
  }
];

export const otherProjects = [
  {
    icon: GlassGaming,
    name: "Glass Gaming",
    description:
      "A demo UI for gamers to track gaming progress with inneumorphism design.",
    gitRepo: "https://github.com/alissanguyen/glass-gaming-website",
    website: "https://glassgaming.alissanguyen.dev"
  },
  {
    icon: Launch,
    name: "Launch Countdown",
    description: "A demo launch countdown page with animations.",
    gitRepo: "https://github.com/alissanguyen/launch-countdown",
    website: "https://launch.alissanguyen.dev"
  },
  {
    icon: Bookmark,
    name: "Bookmark Page Demo",
    description: "A demo landing page for a bookmark tool.",
    gitRepo: "https://github.com/alissanguyen/demo-bookmark-page",
    website: "https://bookmark.alissanguyen.dev"
  },
  {
    icon: Memory,
    name: "Memory Game",
    description: "A memory game website.",
    gitRepo: "https://github.com/alissanguyen/memory-game",
    website: "https://memory.alissanguyen.dev/"
  },
  {
    icon: Invoice,
    name: "Invoice App Demo",
    description: "A demo UI for invoices management.",
    gitRepo: "https://github.com/alissanguyen/invoice-app-demo",
    website: "https://invoices.alissanguyen.dev"
  },

  {
    icon: Pomodoro,
    name: "Pomodoro Timer App",
    description: "A pomodoro inspired timer with mobile-first design.",
    gitRepo: "https://github.com/alissanguyen/pomodoro-app",
    website: "https://pomodoro.alissanguyen.dev/"
  },
  {
    icon: Weather,
    name: "Weatherly",
    description:
      "A 5-day weather website that includes forecast for every 3 hours.",
    gitRepo: "https://github.com/alissanguyen/weatherly",
    website: "https://weatherly.alissanguyen.dev/"
  }
];

export const facts = [
  {
    index: 1,
    title: "WooCoomerce to Shopify",
    description:
      "Migration von Shops kann aufwändig sein. Wir helfen Ihnen damit.",
    image: "/images/facts/bg_services.jpg",
    color: "sky",
    imgDescription: "Pic of cat"
  },
  {
    index: 2,
    title: `Subscription Integration`,
    description: "Abo Modelle in Shopify Stores integrieren und verwalten.",
    image: "/images/facts/bg_services.jpg",
    color: "blue",
    imgDescription: "Pic of Harvard"
  },
  {
    index: 3,
    title: "Conversion Optimierung",
    description: "Nachweisliche Steigerung Ihrer KPI's durch strategische Optimierung.",
    image: "/images/facts/bg_services.jpg",
    color: "indigo",
    imgDescription: "Pic of snake"
  },
  {
    index: 4,
    title: "Third Party Integration",
    description:
      "Drittanbieter Applikationen einfach und sicher in Shopify implementieren.",
      image: "/images/facts/bg_services.jpg",
    color: "violet",
    imgDescription: "Illustration"
  },
  {
    index: 5,
    title: "Shopify Daten Export & Pipeline",
    description:
      "Shopify sammelt wertvolle E_Commerce Daten die wir für Sie in bestehende Dashboards integrieren.",
      image: "/images/facts/bg_services.jpg",
    color: "purple",
    imgDescription: "Pic of math on chalkboard"
  },
  {
    index: 6,
    title: "Analytics & Artificial Intelligence",
    description:
      "Als Experten für E-Commerce Analytics und KI entwickeln wir innovative Lösungen.",
      image: "/images/facts/bg_services.jpg",
    color: "fuchsia",
    imgDescription: "Pic of mayonnaise"
  },
  {
    index: 7,
    title: "Chat Bot und On-Site Apps",
    description:
      "Durch Chatbots und ander On-Site Apps bieten Sie Ihren Kunden mehr als die Konkurrenz",
      image: "/images/facts/bg_services.jpg",
    color: "pink",
    imgDescription: "Pic of piano"
  },
  {
    index: 8,
    title: "CRM Integration & Custom Backend Development",
    description: "Wir lösen die technisch komplexesten Shopify Probleme.",
    image: "/images/facts/bg_services.jpg",
    color: "rose",
    imgDescription: "Pic of a dad (not my dad)"
  }
];

export const NAVBAR_ID = "Navbar";
