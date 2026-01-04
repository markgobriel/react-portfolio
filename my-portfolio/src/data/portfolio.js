const portfolio = {
  en: {
    ui: {
    eyebrow: "",
    eyebrowTouch: "",
      resumeTop: "click here for the boring stuff (my resume)",
      skillGroups: {
        languages: "languages",
        frameworks: "software / frameworks",
        tools: "tools",
        "databases / orm": "databases / orm",
      },
      nav: {
        home: "home",
        about: "about",
        education: "education",
        experience: "experience",
        projects: "projects",
        certifications: "certifications",
        skills: "skills",
        contact: "contact",
        resume: "resume",
      },
      headings: {
        about: "about",
        education: "education",
        experience: "work experience",
        projects: "projects",
        certifications: "certifications",
        skills: "skills",
        contact: "contact",
      },
      home: {
        selectedWorks: "selected works",
        viewAllWork: "view all my work",
        timeline: "timeline",
        selectedWorkAria: "open",
      },
      aboutPage: {
        title: "about me",
        skills: "my skills",
        values: "my core values",
        portraitCaption: "me after running my first marathon :)",
        back: "back to home",
      },
      workPage: {
        title: "my work",
        back: "back to home",
      },
      footer: {
        contact: "contact",
        pages: "pages",
        language: "language",
        email: "email",
        linkedin: "linkedin",
        github: "github",
        resume: "resume",
        work: "work",
        about: "about",
        theme: "theme",
        themeToggleDark: "dark mode",
        themeToggleLight: "light mode",
      },
    meta: {
      location: "location",
      focus: "focus",
      currently: "currently",
    },
    },
    name: "mark gobriel",
    educationStart: "start date tbd",
    heroLine1: "i build",
    heroEmphasis: "full stack",
    heroLine2: "products.",
    tagline:
      "hey there, i'm mark gobriel, and i study computer science at the <span class=\"tagline-link-inline\"><img src=\"https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Utoronto_coa.svg/1200px-Utoronto_coa.svg.png\" alt=\"uoft\" class=\"tagline-logo\" /><a href=\"https://www.utoronto.ca\" target=\"_blank\" rel=\"noreferrer\">university of toronto</a></span>",
    taglineTokens: [],
    portrait: {
      src: "/portrait.jpg",
      alt: "my portrait",
    },
    values: ["craft over speed", "design with intent", "ship and iterate", "empathy for users"],
    location: "Toronto, ON",
    focus: "full-stack development, web applications, ux design",
    currently: "looking for a 12-16 month internship starting may 2026",
    about: [
      "i'm an aspiring full-stack developer who loves taking ideas from 0 to shipped, building reliable systems with a keen eye for clean, aesthetic interfaces.",
      "on the front end, i'm creative at heart and i care about making things look and feel premium: clean ux, strong visual design, smooth animations, and tiny details that make an interface genuinely enjoyable.",
      "on the back end, i like building dependable systems with clear apis and solid data models that hold up with real users.",
      "when i'm not coding, i'm weight training, training for my next marathon, cooking high-protein meals, or traveling.",
      "if you like practical, polished software with attention to detail, we'll probably get along.",
    ],
    status: "open to internships for summer 2026",
    focusList: ["React", "JavaScript", "Java", "Python", "Node.js"],
    homeMeta: [
      {
        label: "location",
        value: "Toronto, ON",
        href: "https://www.google.com/maps?q=Toronto",
      },
      {
        label: "recent experience",
        value: "generated 5 figures in revenue @ motherland.",
      },
      {
        label: "previous",
        value: "full-stack developer intern @ futura holding group.",
      },
    ],
    selectedWorks: [
      {
        title: "rewardly",
        summary: "b2b full-stack loyalty platform with live rewards flows.",
        href: "https://github.com/markgobriel/rewardly",
        skills: ["react", "vite", "node.js", "express", "prisma", "sqlite"],
      },
      {
        title: "dormigo",
        summary: "renter + roommate matching interface with realtime filtering.",
        href: "https://github.com/nathancmaniego/deerhacks-iv",
        skills: ["react", "tailwindcss", "postgresql", "fastapi", "python"],
      },
      {
        title: "personal portfolio",
        summary: "this site—playful microinteractions and multi-lang support.",
        href: "https://github.com/markgobriel/react-portfolio",
        skills: ["react", "vite", "javascript", "css", "gsap"],
      },
    ],
    timeline: {
      title: "timeline",
      items: [
        {
          title: "university of colorado",
          date: "september 2025",
          detail: "software design as an element of the software development lifecycle",
          description: "earned certification in advanced development practices.",
          href: "https://www.coursera.org/account/accomplishments/verify/495TOWMTJK3P",
          year: 2025,
        },
        {
          title: "full stack developer intern @ futura holding group",
          date: "may 2025 – august 2025",
          detail: "toronto, on",
          description:
            "built and shipped the futura art gallery foundation site with custom wordpress theme and reusable ui components.",
          year: 2025,
        },
        {
          title: "ceo & founder @ motherland clothing",
          date: "february 2024 – present",
          detail: "mississauga, on",
          description:
            "built production shopify storefront; implemented cart recovery automations recovering ~40% of abandoned carts.",
          year: 2024,
        },
        {
          title: "started computer science @ university of toronto",
          date: "september 2023",
          detail: "toronto, on",
          description: "honours bachelor of science, computer science (minor in business).",
          year: 2023,
        },
      ],
    },
    education: [
      {
        school: "University of Toronto",
        program: "honours bachelor of science, computer science (minor in business)",
        date: "expected april 2027",
        details:
          "relevant coursework: software design, systems programming, software engineering, web programming, data structures & algorithms, databases.",
      },
    ],
    experience: [
      {
        role: "full stack developer intern",
        org: "Futura Holding Group",
        date: "may 2025 – aug 2025",
        location: "toronto, on",
        bullets: [
          "built and shipped the Futura Art Gallery Foundation website on WordPress using a lightweight custom theme and HTML, CSS & JavaScript to deliver core pages and reusable UI components.",
          "improved mobile responsiveness, navigation clarity, and load performance by 20%.",
          "supported the setup of an end-to-end purchase flow so users could buy artwork online.",
        ],
      },
      {
        role: "ceo & founder",
        org: "motherland clothing",
        date: "feb 2024 – present",
        location: "mississauga, on",
        link: "https://wearmotherland.com",
        bullets: [
          "generated five figures in revenue across three product drops, while also growing brand visibility as a vendor at multiple festivals.",
          "built and optimized a production Shopify storefront using Liquid, JavaScript, HTML, and CSS, optimizing product placement and creating an engaging and user-friendly shopping experience.",
          "implemented abandoned cart and checkout recovery automations using Shopify APIs + Liquid, recovering 40% of abandoned carts/checkouts through personalized email flows.",
          "managed all aspects of brand operations, including marketing, creative direction, photoshoots, design process, and collaboration with overseas manufacturers in China to produce apparel.",
        ],
      },
    ],
    work: [
      {
        title: "Rewardly",
        type: "full-stack",
        description: [
          "Built a full-stack loyalty rewards web app that lets users earn and redeem points, with a responsive React frontend bootstrapped with Vite and reusable UI components.",
          "Designed and implemented REST APIs in Node/Express and persisted data with Prisma ORM + SQLite, supporting end-to-end CRUD workflows.",
          "Deployed the application and supported a production-ready setup (routing, environment variables, and basic reliability checks).",
        ],
        stack: ["React", "Vite", "Node.js", "Express.js", "Prisma", "SQLite"],
        link: "https://github.com/markgobriel",
      },
      {
        title: "Dormigo",
        type: "full-stack",
        description: [
          "Developed a full-stack web application using React, Vite, and Tailwind CSS for a responsive, component-based front end, with FastAPI and PostgreSQL powering the backend for real-time data management.",
          "Engineered robust client-side filtering and roommate matching logic to efficiently connect students with compatible rental listings aggregated from Zillow and Toronto Rentals.",
        ],
        stack: ["React", "Vite", "Tailwind CSS", "FastAPI", "PostgreSQL"],
        link: "https://github.com/markgobriel",
      },
      {
        title: "Personal Portfolio",
        type: "web",
        description:
          "personal portfolio site with bilingual routing, microinteractions, and a custom layout system.",
        stack: ["React", "Vite", "JavaScript", "CSS", "GSAP"],
        link: "https://github.com/markgobriel/react-portfolio",
      },
      {
        title: "Othello Game",
        type: "Java",
        description:
          "java-based othello with human vs human, human vs computer, and human vs random modes demonstrating oop and game logic.",
        stack: ["Java", "Javadoc", "JUnit"],
        link: "https://github.com/markgobriel",
      },
      {
        title: "Paint App Clone",
        type: "Java",
        description:
          "java paint clone that uses the Ollama API to generate drawings from natural-language prompts.",
        stack: ["Java", "Maven", "JUnit", "Ollama API"],
        link: "https://github.com/markgobriel",
      },
      {
        title: "Treemap Visualizer",
        type: "Python",
        description:
          "pygame app visualizing hierarchical data as dynamic treemaps with real-time updates and interactivity.",
        stack: ["Python", "Pygame"],
        link: "https://github.com/markgobriel",
      },
      {
        title: "MewbileTech Visualizer",
        type: "Python",
        description:
          "pygame visualization of historical customer call data across toronto with filtering and billing reports.",
        stack: ["Python", "Pygame"],
        link: "https://github.com/markgobriel",
      },
      {
        title: "Ride Sharing Simulation",
        type: "Python",
        description:
          "simulation of a ridesharing service modeling riders, drivers, dispatcher, and monitor on a city grid.",
        stack: ["Python"],
        link: "https://github.com/markgobriel",
      },
      {
        title: "mysh",
        type: "C",
        description:
          "a custom linux shell written in c that supports cd, ls, pwd, background processes, and job control.",
        stack: ["C"],
        link: "https://github.com/markgobriel",
      },
    ],
    notes: [
      {
        institution: "University of Colorado",
        title: "software design as an element of the software development lifecycle",
        href: "https://www.coursera.org/account/accomplishments/verify/495TOWMTJK3P",
      },
    ],
    skills: {
      languages: [
        { name: "Java", iconId: "JavaOriginal" },
        { name: "Python", iconId: "PythonOriginal" },
        { name: "HTML", iconId: "Html5Original" },
        { name: "CSS", iconId: "Css3Original" },
        { name: "JavaScript", iconId: "JavascriptOriginal" },
        { name: "C", iconImg: "https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg" },
      ],
      frameworks: [
        { name: "React", iconId: "ReactOriginal" },
        { name: "Vite", iconId: "VitejsOriginal" },
        { name: "Node.js", iconId: "NodejsOriginal" },
        { name: "Express.js", iconId: "ExpressOriginal" },
        {
          name: "REST APIs",
          iconImg: "https://www.opc-router.com/wp-content/uploads/2020/04/icon_rest_webservice_600x400px-300x200.png",
        },
        { name: "NumPy", iconComponent: "numpy" },
        { name: "Pygame", iconImg: "https://www.pygame.org/ftp/pygame-head-party.png" },
      ],
      tools: [
        { name: "Git", iconId: "GitOriginal" },
        { name: "GitHub", iconId: "GithubOriginal" },
        { name: "Shopify", iconComponent: "shopify" },
        { name: "Figma", iconId: "FigmaOriginal" },
        { name: "JUnit", iconComponent: "junit" },
        { name: "Javadoc", iconId: "JavaOriginal" },
      ],
      "databases / orm": [
        { name: "Prisma", iconId: "PrismaOriginal" },
        { name: "PostgreSQL", iconId: "PostgresqlOriginal" },
        { name: "SQLite", iconId: "SqlitePlainWordmark" },
      ],
    },
    contact: [
      {
        label: "email",
        value: "markgobriel[at]gmail.com",
        href: "mailto:markgobriel@gmail.com",
      },
      {
        label: "linkedin",
        value: "linkedin.com/in/markgobriel",
        href: "https://linkedin.com/in/markgobriel",
      },
      {
        label: "github",
        value: "github.com/markgobriel",
        href: "https://github.com/markgobriel",
      },
    {
      label: "resume",
      value: "resume.pdf",
      href: "/Mark_Gobriel_resume.pdf",
      external: true,
    },
    ],
    footer: {
      updated: "last updated december 2025",
      motto: "built with ♥ by me",
    },
  },
  fr: {
    ui: {
    eyebrow: "",
    eyebrowTouch: "",
      resumeTop: "clique ici pour les détails sérieux (mon cv)",
      skillGroups: {
        languages: "langages",
        frameworks: "frameworks",
        tools: "outils",
        "databases / orm": "bases de données / orm",
      },
      nav: {
        home: "accueil",
        about: "à propos",
        education: "éducation",
        experience: "expérience",
        projects: "projets",
        certifications: "certifications",
        skills: "compétences",
        contact: "contact",
        resume: "cv",
      },
      headings: {
        about: "à propos",
        education: "éducation",
        experience: "expérience pro",
        projects: "projets",
        certifications: "certifications",
        skills: "compétences",
        contact: "contact",
      },
      home: {
        selectedWorks: "projets sélectionnés",
        viewAllWork: "voir tous mes projets",
        timeline: "chronologie",
        selectedWorkAria: "ouvrir",
      },
      aboutPage: {
        title: "à propos",
        skills: "compétences clés",
        values: "mes valeurs fondamentales",
        portraitCaption: "moi après avoir couru mon premier marathon :)",
        back: "retour accueil",
      },
      workPage: {
        title: "mon travail",
        back: "retour accueil",
      },
      meta: {
        location: "lieu",
        focus: "focus",
        currently: "actuellement",
      },
      footer: {
        contact: "contact",
        pages: "pages",
        language: "langue",
        email: "courriel",
        linkedin: "linkedin",
        github: "github",
        resume: "cv",
        work: "travail",
        about: "à propos",
        theme: "thème",
        themeToggleDark: "mode sombre",
        themeToggleLight: "mode clair",
      },
    },
    name: "mark gobriel",
    educationStart: "date de début à préciser",
    heroLine1: "i build",
    heroEmphasis: "full stack",
    heroLine2: "products.",
    tagline:
      "salut, je suis mark gobriel et j'étudie l'informatique à l'<span class=\"tagline-link-inline\"><img src=\"https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Utoronto_coa.svg/1200px-Utoronto_coa.svg.png\" alt=\"uoft\" class=\"tagline-logo\" /><a href=\"https://www.utoronto.ca\" target=\"_blank\" rel=\"noreferrer\">université de toronto</a></span>",
    taglineTokens: [],
    portrait: {
      src: "/portrait.jpg",
      alt: "mon portrait",
    },
    values: ["la qualité avant la vitesse", "conception intentionnelle", "livrer et itérer", "empathie utilisateur"],
    location: "Toronto, ON",
    focus: "développement full-stack, applications web, design ux",
    currently: "à la recherche d'un stage de 12-16 mois à partir de mai 2026",
    about: [
      "je suis un développeur full-stack en devenir qui aime mener des idées de 0 à livraison, en construisant des systèmes fiables avec un œil pour des interfaces propres et esthétiques.",
      "côté front, je suis créatif et je tiens à ce que tout ait un rendu premium : ux propre, design visuel solide, animations fluides et petits détails qui rendent l'interface vraiment agréable.",
      "côté back, j'aime bâtir des systèmes fiables avec des apis claires et des modèles de données solides qui tiennent la charge avec de vrais utilisateurs.",
      "hors code, je fais de la musculation, je prépare mon prochain marathon, je cuisine des plats protéinés, ou je voyage.",
      "si tu aimes les logiciels pratiques, polis et attentifs aux détails, on va bien s'entendre.",
    ],
    status: "disponible pour un stage à l'été 2026",
    focusList: ["React", "JavaScript", "Java", "Python", "Node.js"],
    homeMeta: [
      {
        label: "lieu",
        value: "Toronto, ON",
        href: "https://www.google.com/maps?q=Toronto",
      },
      {
        label: "expérience récente",
        value: "5 chiffres de revenus générés @ motherland.",
      },
      {
        label: "précédent",
        value: "stagiaire développeur full stack @ futura holding group.",
      },
    ],
    selectedWorks: [
      {
        title: "rewardly",
        summary: "plateforme de fidélité b2b full-stack avec flux de récompenses en direct.",
        href: "https://github.com/markgobriel/rewardly",
        skills: ["react", "vite", "node.js", "express", "prisma", "sqlite"],
      },
      {
        title: "dormigo",
        summary: "interface de recherche + matching de colocs avec filtrage en temps réel.",
        href: "https://github.com/nathancmaniego/deerhacks-iv",
        skills: ["react", "tailwindcss", "postgresql", "fastapi", "python"],
      },
      {
        title: "portfolio personnel",
        summary: "ce site—micro-interactions ludiques et support bilingue.",
        href: "https://github.com/markgobriel/react-portfolio",
        skills: ["react", "vite", "javascript", "css", "gsap"],
      },
    ],
    timeline: {
      title: "chronologie",
      items: [
        {
          title: "université du colorado",
          date: "septembre 2025",
          detail: "software design as an element of the software development lifecycle",
          description: "certification obtenue en pratiques avancées de développement.",
          href: "https://www.coursera.org/account/accomplishments/verify/495TOWMTJK3P",
          year: 2025,
        },
        {
          title: "stagiaire développeur full stack @ futura holding group",
          date: "mai 2025 – août 2025",
          detail: "toronto, on",
          description:
            "livré le site de la futura art gallery foundation avec un thème wordpress léger et des composants ui réutilisables.",
          year: 2025,
        },
        {
          title: "fondateur & ceo @ motherland clothing",
          date: "févr 2024 – présent",
          detail: "mississauga, on",
          description:
            "boutique shopify en production; automatisations de relance pour ~40% de paniers récupérés.",
          year: 2024,
        },
        {
          title: "début informatique à l'université de toronto",
          date: "septembre 2023",
          detail: "toronto, on",
          description: "baccalauréat en informatique (mineure en business).",
          year: 2023,
        },
      ],
    },
    education: [
      {
        school: "Université de Toronto",
        program: "bachelor of science spécialisé, informatique (mineure en business)",
        date: "fin prévue : avril 2027",
        details:
          "cours pertinents : conception logicielle, programmation système, génie logiciel, programmation web, structures de données & algorithmes, bases de données.",
      },
    ],
    experience: [
      {
        role: "stagiaire développeur full stack",
        org: "Futura Holding Group",
        date: "mai 2025 – août 2025",
        location: "toronto, on",
        bullets: [
          "livré le site de la Futura Art Gallery Foundation sur WordPress avec un thème personnalisé léger et HTML, CSS & JavaScript pour livrer les pages clés et des composants ui réutilisables.",
          "amélioré la réactivité mobile, la clarté de navigation et les performances de chargement de 20%.",
          "aidé à mettre en place un parcours d'achat de bout en bout pour permettre l'achat d'œuvres en ligne.",
        ],
      },
      {
        role: "fondateur & ceo",
        org: "motherland clothing",
        date: "févr 2024 – présent",
        location: "mississauga, on",
        link: "https://wearmotherland.com",
        bullets: [
          "généré cinq chiffres de revenus sur trois lancements produits, tout en augmentant la visibilité de la marque comme exposant lors de plusieurs festivals.",
          "construit et optimisé une boutique Shopify en production avec Liquid, JavaScript, HTML et CSS, en optimisant le placement des produits et en créant une expérience d'achat engageante et fluide.",
          "mis en place des automatisations de relance panier/checkout via les apis Shopify + Liquid, récupérant 40% des paniers/checkout abandonnés grâce à des emails personnalisés.",
          "géré tous les volets de l'opération de la marque : marketing, direction créative, shootings photo, processus de design, et collaboration avec des fabricants à l'étranger en Chine pour produire les vêtements.",
        ],
      },
    ],
    work: [
      {
        title: "Rewardly",
        type: "full-stack",
        description: [
          "construit une application de fidélité full-stack permettant de gagner et d'utiliser des points, avec un front React réactif lancé via Vite et des composants UI réutilisables.",
          "conçu et implémenté des APIs REST en Node/Express et persistance des données avec Prisma ORM + SQLite, couvrant les workflows CRUD de bout en bout.",
          "déployé l'application et assuré une configuration prête pour la production (routing, variables d'environnement, vérifications de fiabilité de base).",
        ],
        stack: ["React", "Vite", "Node.js", "Express.js", "Prisma", "SQLite"],
        link: "https://github.com/markgobriel",
      },
      {
        title: "Dormigo",
        type: "full-stack",
        description: [
          "développé une application web full-stack avec React, Vite et Tailwind CSS pour un front réactif et basé sur des composants, avec FastAPI et PostgreSQL pour le back et la gestion des données en temps réel.",
          "conçu un filtrage robuste côté client et un appariement de colocataires pour relier efficacement les étudiants à des annonces compatibles agrégées depuis Zillow et Toronto Rentals.",
        ],
        stack: ["React", "Vite", "Tailwind CSS", "FastAPI", "PostgreSQL"],
        link: "https://github.com/markgobriel",
      },
      {
        title: "Portfolio personnel",
        type: "web",
        description:
          "site portfolio personnel avec routage bilingue, micro-interactions et mise en page sur mesure.",
        stack: ["React", "Vite", "JavaScript", "CSS", "GSAP"],
        link: "https://github.com/markgobriel/react-portfolio",
      },
      {
        title: "Othello Game",
        type: "Java",
        description:
          "othello en java avec modes humain vs humain, humain vs ordinateur et aléatoire, démontrant l'oop et la logique de jeu.",
        stack: ["Java", "Javadoc"],
        link: "https://github.com/markgobriel",
      },
      {
        title: "Paint App Clone",
        type: "Java",
        description:
          "clone de paint en java utilisant l'api ollama pour générer des dessins à partir de prompts en langage naturel.",
        stack: ["Java", "Maven", "JUnit", "Ollama API"],
        link: "https://github.com/markgobriel",
      },
      {
        title: "Treemap Visualizer",
        type: "Python",
        description:
          "appli pygame qui visualise des données hiérarchiques en treemaps dynamiques avec mises à jour en temps réel.",
        stack: ["Python", "Pygame"],
        link: "https://github.com/markgobriel",
      },
      {
        title: "MewbileTech Visualizer",
        type: "Python",
        description:
          "visualisation pygame d'historiques d'appels clients à toronto, avec filtres et rapports de facturation.",
        stack: ["Python", "Pygame"],
        link: "https://github.com/markgobriel",
      },
      {
        title: "Ride Sharing Simulation",
        type: "Python",
        description:
          "simulation d'un service de covoiturage modélisant passagers, conducteurs, dispatcher et monitor sur une grille urbaine.",
        stack: ["Python"],
        link: "https://github.com/markgobriel",
      },
      {
        title: "mysh",
        type: "C",
        description:
          "shell linux maison en c qui gère cd, ls, pwd, les processus en arrière-plan et le job control.",
        stack: ["C"],
        link: "https://github.com/markgobriel",
      },
    ],
    notes: [
      {
        institution: "Université du Colorado",
        title: "software design as an element of the software development lifecycle",
        href: "https://www.coursera.org/account/accomplishments/verify/495TOWMTJK3P",
      },
    ],
    skills: {
      languages: [
        { name: "Java", iconId: "JavaOriginal" },
        { name: "Python", iconId: "PythonOriginal" },
        { name: "HTML", iconId: "Html5Original" },
        { name: "CSS", iconId: "Css3Original" },
        { name: "JavaScript", iconId: "JavascriptOriginal" },
        { name: "C", iconImg: "https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg" },
      ],
      frameworks: [
        { name: "React", iconId: "ReactOriginal" },
        { name: "Vite", iconId: "VitejsOriginal" },
        { name: "Node.js", iconId: "NodejsOriginal" },
        { name: "Express.js", iconId: "ExpressOriginal" },
        {
          name: "REST APIs",
          iconImg: "https://www.opc-router.com/wp-content/uploads/2020/04/icon_rest_webservice_600x400px-300x200.png",
        },
        { name: "NumPy", iconComponent: "numpy" },
        { name: "Pygame", iconImg: "https://www.pygame.org/ftp/pygame-head-party.png" },
      ],
      tools: [
        { name: "Git", iconId: "GitOriginal" },
        { name: "GitHub", iconId: "GithubOriginal" },
        { name: "Shopify", iconComponent: "shopify" },
        { name: "Figma", iconId: "FigmaOriginal" },
        { name: "JUnit", iconComponent: "junit" },
        { name: "Javadoc", iconId: "JavaOriginal" },
      ],
      "databases / orm": [
        { name: "Prisma", iconId: "PrismaOriginal" },
        { name: "PostgreSQL", iconId: "PostgresqlOriginal" },
        { name: "SQLite", iconId: "SqlitePlainWordmark" },
      ],
    },
    contact: [
      {
        label: "courriel",
        value: "markgobriel[at]gmail.com",
        href: "mailto:markgobriel@gmail.com",
      },
      {
        label: "linkedin",
        value: "linkedin.com/in/markgobriel",
        href: "https://linkedin.com/in/markgobriel",
      },
      {
        label: "github",
        value: "github.com/markgobriel",
        href: "https://github.com/markgobriel",
      },
      {
        label: "cv",
        value: "cv (pdf)",
        href: "/resume.pdf",
        external: true,
      },
    ],
    footer: {
      updated: "dernière mise à jour décembre 2025",
      motto: "conçu avec ♥ par moi",
    },
  },
};

export default portfolio;
