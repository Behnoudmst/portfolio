import { Icons } from "@/components/icons";
import { Bot, HomeIcon, Rocket, TrendingUp, Zap } from "lucide-react";

export const DATA = {
  name: "Behnoud Mostafaie",
  initials: "BM",
  url: "https://behnoud.net",
  location: "Milan, Italy",
  locationLink: "",
  description: "",
  summary:
    "I'm a full-stack software engineer with over five years of experience designing, developing, and deploying scalable systems end to end. With a solid background in the startup ecosystem, I excel in fast-paced environments, solving complex real-world problems and delivering practical, results-driven solutions. I’m passionate about continuous learning and taking on new challenges with focus and determination.",
  avatarUrl: "/me.jpeg",
  skills: [
    "Typescript",
    "React",
    "Next.js",
    "Node.js",
    "Nest.js",
    "MongoDB",
    "Docker",
    "Git",
    "Linux",
    "Langchain.js",
    "Electron js",
    "React Native",
    "Expo",
    "AWS",
    "Postgres",
    "CI/CD",
    "GCP",
    "REST API",
    "Ai automation (n8n)",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hi@behnoud.net",
    tel: "+393381291915",
    social: {
      contact: {
        name: "save Contact",
        url: "/ben.vcf",
        icon: Icons.contact,
        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Behnoudmst",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/behnoudmostafaie",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:hi@behnoud.net",
        icon: Icons.email,
        navbar: true,
      },
      instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/behnoud.mst",
        icon: Icons.instagram,
        navbar: true,
      },
    },
  },

  work: [{
     company: "Cosmico (contracted to a2a digital hub)",
      href: "https://www.a2a.it",
      badges: ['Contract'],
      location: "Hybrid",
      title: "Full stack developer",
      logoUrl: "/a2a-logo.png",
      start: "October 2025",
      end: "present",
      description:
        "Collaborated with the internal team at A2A Digital Hub on various projects, utilizing TypeScript, Tailwind CSS, Next.js, and GitLab on a daily basis.",
      testimonial: "Behnoud integrated seamlessly into our team and delivered consistent results across multiple projects.",
    },
    {
      company: "Abstract (on a project for Luxottica)",
      href: "https://www.luxottica.com",
      badges: ['Contract'],
      location: "Full Remote",
      title: "Full stack developer",
      logoUrl: "/abstract-logo.jpg",
      start: "February 2025",
      end: "October 2025",
      description:
        "Collaborated with a cross-functional team of ~80 developers, BAs, and QAs to design and implement a large-scale healthcare system for Luxottica. Leveraged React.js for the front-end (+15 micro frontends) and Node.js with Nest.js for the back-end (+18 microservices). Integrated third-party APIs to enhance functionality and streamline operations. Applied Agile methodologies and comprehensive unit testing to ensure timely delivery and maintain high-quality standards.",
      testimonial: "Integrated 3rd-party APIs across 15 micro frontends, streamlining operations for an 80-person cross-functional team.",
    },
    {
      company: "Log-e Srl",
      href: "",
      badges: ['Full-time'],
      location: "Milan, Italy",
      title: "Full stack developer",
      logoUrl: "/loge.jpg",
      start: "November 2021",
      end: "January 2025",
      description:
        "Designed and Developed software solutions with Nodejs (Nestjs framework), React.js (Nextjs framework), Mongodb, Docker and Google cloud. Demonstrating REST Api development, DevOps, backend and front-end development skills. Transformed entrepreneurial ideas into functional web applications within 5 months by collaborating closely with founders and leveraging the MERN stack.",
      testimonial: "Transformed our ideas into a functional web application in just 5 months—a game-changer for our launch timeline.",
    },
    {
      company: "Upwork",
      badges: ["Top Rated"],
      href: "",
      location: "Remote",
      title: "Freelance web developer",
      logoUrl: "/upwork.png",
      start: "January 2020",
      end: "April 2021",
      description:
        "Top rated Freelancer on Upwork with 100% job success rate and +10K earnings. Developed and maintained web applications for clients using React.js, Node.js, and MongoDB. Collaborated with clients to understand their requirements and deliver high-quality solutions that met their needs.",
      testimonial: "100% job success rate. This guy really knows his stuff, and can be trusted to follow through on time and above expectation.",
    },
    {
      company: "Mars Global",
      badges: ['Full-time'],
      href: "",
      location: "Istanbul, Turkey",
      title: "Web design and digital marketing",
      logoUrl: "",
      start: "March 2017",
      end: "January 2018",
      description:
        "Designed new landing pages and improved SEO of company website which led to 30% more conversions from Google ads campaign for the same budget.",
      testimonial: "30% more conversions from the same Google Ads budget after redesigning our landing pages.",
    },
  ],
  education: [
    {
      school: "TU Darmstadt",
      href: "https://www.tu-darmstadt.de/",
      degree: "Masters thesis exchange, Machine Learning",
      logoUrl: "/tu-darm.png",
      start: "2020",
      end: "2021",
    },
    {
      school: "Sapienza University of Rome",
      href: "https://www.uniroma1.it",
      degree: "Masters degree in Mechanical Engineering",
      logoUrl: "/sapienza.png",
      start: "2018",
      end: "2021",
    },
  ],
  solutionStacks: [
    {
      icon: <TrendingUp className="size-5" />,
      title: "The Revenue Accelerator Stack",
      description: "Faster payment implementations that drive revenue from day one",
      technologies: ["Next.js", "Stripe", "Analytics", "WhatsApp API"],
      caseStudy: "Tiktaac processed thousands in ticket sales in its first month of launch",
    },
    {
      icon: <Rocket className="size-5" />,
      title: "The Scale-Ready Infrastructure",
      description: "Systems that grow with your business without breaking",
      technologies: ["AWS/GCP", "Docker", "CI/CD", "Microservices"],
      caseStudy: "Handled 15 micro frontends + 18 microservices for Luxottica's healthcare system",
    },
    {
      icon: <Zap className="size-5" />,
      title: "The MVP Launch Kit",
      description: "From idea to market in weeks, not months",
      technologies: ["React", "Node.js", "MongoDB", "TailwindCSS"],
      caseStudy: "Transformed entrepreneurial ideas into functional web apps in under 5 months",
    },
    {
      icon: <Bot className="size-5" />,
      title: "The AI Automation Suite",
      description: "Intelligent workflows that replace hours of manual work",
      technologies: ["Langchain.js", "n8n", "REST API", "DeepSeek AI"],
      caseStudy: "Built AI-powered landing page analyzer for automated conversion optimization",
    },
  ],
  livePulse: {
    status: "Currently optimizing Elegant Menu's checkout flow",
    detail: "est. 15% conversion lift",
  },
  projects: [
    {
      title: "Tiktaac",
      href: "https://Tiktaac.com",
      dates: "March 2024 - Jan 2025",
      active: true,
      resultBadge: "50% Faster Event Check-ins",
      description:
        "Built Tiktaac's digital ticketing system that eliminated paper tickets and halved event wait times by digitizing ticket sales and real-time payments.",
      technologies: [
        "Next.js",
        "Typescript",
        "Mongodb",
        "Mongoose",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Whatsapp api",
        "Node.js",
        "Nest.js",
      ],
      links: [
        {
          type: "Website",
          href: "https://tiktaac.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/tiktaac.gif",
    },
    {
      title: "Elegant Menu",
      href: "https://elegant.menu",
      dates: "Jan 2024 - Present",
      active: true,
      resultBadge: "SaaS Platform — 100+ Restaurant Menus",
      description:
        "Built a complete SaaS platform enabling restaurants to create, customize, and manage digital menus with integrated ordering and payment flows.",
      technologies: [
        "Next.js",
        "Typescript",
        "Mongodb",
        "Mongoose",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Whatsapp api",
        "Node.js",
        "Nest.js",
      ],
      links: [
        {
          type: "Website",
          href: "https://elegant.menu",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/elegant.gif",
    },
    {
      title: "Tiktaac Scanner",
      href: "#",
      dates: "Jan 2024 - Present",
      active: true,
      resultBadge: "Real-time Event Analytics",
      description:
        "Mobile app providing event organizers with real-time data on ticket scans, attendance rates, and key metrics—enabling data-driven decisions for future events.",
      technologies: [
        "React Native",
        "Expo",
        "Xcode",
        "transporter",
        "play store & app store",
      ],
      links: [
        // {
        //   type: ,
        //   href: "https://tools.behnoud.net/form/page-tester",
        //   icon: <Icons.globe className="size-3" />,
        // },
      ],
      image: "",
      video: "",
    },
    {
      title: "Landing page analyzer",
      href: "https://tools.behnoud.net/form/page-tester",
      dates: "Jan 2024 - Present",
      active: true,
      resultBadge: "AI-Powered Conversion Optimization",
      description:
        "AI-driven tool that analyzes landing page design, layout, and content—then delivers actionable insights to boost conversion rates.",
      technologies: [
        "DeepSeek ai",
        "n8n",
        "Google Cloud",
        "mailcow",
        "REST Api",
        "SMTP server",
      ],
      links: [
        {
          type: "Website",
          href: "https://tools.behnoud.net/form/page-tester",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  testimonial: {
    quote:
      "Behnoud is very knowledgable, responsive, and a pleasure to work with. I found him thru the UpWork platform and quickly realized what a gem we found. He has been an integral part of the success of our website and I highly recommend him to anyone looking for WordPress web developer support. This guy really knows his stuff, and can be trusted to follow thru on time and above expectation. ",
    author: "Chris Kydd",
    title: "Associate Published, The Coast News, CA, USA",
  },
  // hackathons: [
  //   {
  //     title: "Hack Western 5",
  //     dates: "November 23rd - 25th, 2018",
  //     location: "London, Ontario",
  //     description:
  //       "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  //   {
  //     title: "Hack The North",
  //     dates: "September 14th - 16th, 2018",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a mobile application which delivers university campus wide events in real time to all students.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  //   {
  //     title: "FirstNet Public Safety Hackathon",
  //     dates: "March 23rd - 24th, 2018",
  //     location: "San Francisco, California",
  //     description:
  //       "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
  //     icon: "public",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
  //     links: [],
  //   },
  //   {
  //     title: "DeveloperWeek Hackathon",
  //     dates: "February 3rd - 4th, 2018",
  //     location: "San Francisco, California",
  //     description:
  //       "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
  //     links: [
  //       {
  //         title: "Github",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/cryptotrends/cryptotrends",
  //       },
  //     ],
  //   },
  //   {
  //     title: "HackDavis",
  //     dates: "January 20th - 21st, 2018",
  //     location: "Davis, California",
  //     description:
  //       "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
  //     win: "Best Data Hack",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
  //     links: [
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/my6footprint",
  //       },
  //       {
  //         title: "ML",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/my6footprint-machine-learning",
  //       },
  //       {
  //         title: "iOS",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/CarbonWallet",
  //       },
  //       {
  //         title: "Server",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/wallet6-server",
  //       },
  //     ],
  //   },
  //   {
  //     title: "ETH Waterloo",
  //     dates: "October 13th - 15th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
  //     links: [
  //       {
  //         title: "Organization",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/ethdocnet",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Hack The North",
  //     dates: "September 15th - 17th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a virtual reality application allowing users to see themselves in third person.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Streamer Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/justinmichaud/htn2017",
  //       },
  //       {
  //         title: "Client Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/RTSPClient",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Hack The 6ix",
  //     dates: "August 26th - 27th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/ShareShip/ShareShip",
  //       },
  //       {
  //         title: "Site",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://share-ship.herokuapp.com/",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Stupid Hack Toronto",
  //     dates: "July 23rd, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/nsagirlfriend/nsagirlfriend",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Global AI Hackathon - Toronto",
  //     dates: "June 23rd - 25th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
  //     win: "1st Place Winner",
  //     links: [
  //       {
  //         title: "Article",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/TinySamosas/",
  //       },
  //     ],
  //   },
  //   {
  //     title: "McGill AI for Social Innovation Hackathon",
  //     dates: "June 17th - 18th, 2017",
  //     location: "Montreal, Quebec",
  //     description:
  //       "Developed realtime facial microexpression analyzer using AI",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
  //     links: [],
  //   },
  //   {
  //     title: "Open Source Circular Economy Days Hackathon",
  //     dates: "June 10th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
  //     win: "1st Place Winner",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/genecis",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Make School's Student App Competition 2017",
  //     dates: "May 19th - 21st, 2017",
  //     location: "International",
  //     description: "Improved PocketDoc and submitted to online competition",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
  //     win: "Top 10 Finalist | Honourable Mention",
  //     links: [
  //       {
  //         title: "Medium Article",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
  //       },
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/pocketdoc-react-native",
  //       },
  //       {
  //         title: "YouTube",
  //         icon: <Icons.youtube className="h-4 w-4" />,
  //         href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/pocketdoc-react-native",
  //       },
  //     ],
  //   },
  //   {
  //     title: "HackMining",
  //     dates: "May 12th - 14th, 2017",
  //     location: "Toronto, Ontario",
  //     description: "Developed neural network to optimize a mining process",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
  //     links: [],
  //   },
  //   {
  //     title: "Waterloo Equithon",
  //     dates: "May 5th - 7th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
  //     links: [
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/pocketdoc-react-native",
  //       },
  //       {
  //         title: "YouTube",
  //         icon: <Icons.youtube className="h-4 w-4" />,
  //         href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/pocketdoc-react-native",
  //       },
  //     ],
  //   },
  //   {
  //     title: "SpaceApps Waterloo",
  //     dates: "April 28th - 30th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/earthwatch",
  //       },
  //     ],
  //   },
  //   {
  //     title: "MHacks 9",
  //     dates: "March 24th - 26th, 2017",
  //     location: "Ann Arbor, Michigan",
  //     description:
  //       "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/threejs-planes",
  //       },
  //     ],
  //   },
  //   {
  //     title: "StartHacks I",
  //     dates: "March 4th - 5th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
  //     win: "1st Place Winner",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source (Mobile)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/recipic-ionic",
  //       },
  //       {
  //         title: "Source (Server)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/recipic-rails",
  //       },
  //     ],
  //   },
  //   {
  //     title: "QHacks II",
  //     dates: "February 3rd - 5th, 2017",
  //     location: "Kingston, Ontario",
  //     description:
  //       "Developed a mobile game which enables city-wide manhunt with random lobbies",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source (Mobile)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/human-huntr-react-native",
  //       },
  //       {
  //         title: "Source (API)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/human-huntr-rails",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Terrible Hacks V",
  //     dates: "November 26th, 2016",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a mock of Windows 11 with interesting notifications and functionality",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Portal Hackathon",
  //     dates: "October 29, 2016",
  //     location: "Kingston, Ontario",
  //     description:
  //       "Developed an internal widget for uploading assignments using Waterloo's portal app",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/UWPortalSDK/crowmark",
  //       },
  //     ],
  //   },
  // ],
} as const;
