const site = {
  title: "Mark's Digital Home",
  intro: {
    index: "[1]",
    paragraphs: [
      "I'm a developer who likes to work at the intersection of software and design. I enjoy taking ideas from 0 to shipped and building reliable systems with interfaces that feel thoughtful and polished.",
      "I'm studying computer science at the University of Toronto, with a focus on full-stack development—building dependable backends, clear APIs, and front ends that are clean and practical.",
    ],
    currently: "Currently, a web developer at IEC Mortgage & Finance.",
  },
  contact: {
    index: "[2]",
    title: "Links",
    links: [
      { label: "Mail", href: "mailto:markgobriel@gmail.com" },
      { label: "LinkedIn", href: "https://linkedin.com/in/markgobriel" },
      { label: "GitHub", href: "https://github.com/markgobriel" },
      { label: "Resume", href: "/Mark_Gobriel_resume.pdf", external: true },
    ],
  },
  education: {
    index: "[3]",
    title: "Education",
    items: [
      {
        id: "uoft",
        title: "University of Toronto",
        logo: "/uoft-logo.svg",
        period: "Sep 2023–Apr 2027",
        description:
          "Honours Bachelor of Science in Computer Science with a minor in Business.",
        image: null,
        href: "https://www.utoronto.ca",
      },
    ],
  },
  experience: {
    index: "[4]",
    title: "Experience",
    hint: "(hover over each experience for more detail)",
    items: [
      {
        id: "iec",
        title: "IEC Mortgage & Finance",
        markColor: "#1a3a5c",
        period: "May 2026–Present",
        detailTitle: "Web developer @ IEC Mortgage & Finance",
        description:
          "Designing and developing a modern mortgage brokerage website focused on UX, lead generation, SEO, and easy internal content management.",
        credit: "Toronto, ON",
        image: null,
        href: null,
      },
      {
        id: "savi",
        title: "Savi Finance",
        markColor: "#0d9488",
        period: "Jan 2026–Apr 2026",
        detailTitle: "Software engineer @ Savi Finance ↗",
        description:
          "Led UX and frontend for credit card optimization flows and integrated Plaid + Spinwheel data pipelines.",
        credit: "Toronto, ON",
        image: null,
        href: "https://financesavi.com/",
      },
      {
        id: "futura",
        title: "Futura Holding Group",
        markColor: "#c2c6cc",
        period: "May 2025–Aug 2025",
        detailTitle: "Full-stack developer intern @ Futura ↗",
        description:
          "Built and shipped the Futura Art Gallery Foundation site with a custom WordPress theme and reusable UI components.",
        credit: "Toronto, ON",
        image: null,
        href: "https://github.com/markgobriel",
      },
      {
        id: "motherland",
        title: "Motherland Clothing",
        markColor: "#000000",
        period: "Feb 2024–Present",
        detailTitle: "CEO & founder @ Motherland ↗",
        description:
          "Built a production Shopify storefront and cart recovery automations that recovered roughly 40% of abandoned checkouts, generating five figures in revenue across product drops.",
        credit: "Mississauga, ON",
        image: null,
        href: "https://wearmotherland.com",
      },
    ],
  },
  footer: "thanks for stopping by. last updated may 2026",
};

export default site;
