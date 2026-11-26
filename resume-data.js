/*
 * resume-data.js — MASTER CV. The single source of truth for every CV and cover letter.
 *
 * Read by:
 *   - builder.html (Resume Studio): pick a preset, toggle bullets/projects, export PDF + cover letter
 *   - cv.html: the public one-page CV (default preset, or ?preset=<key>)
 * Rendering lives in resume-render.js.
 *
 * HOW TO UPDATE
 *   1. Add new work as a bullet under the right job in `experience` (give it a unique id).
 *   2. Add new side projects to `projects` (unique id).
 *   3. Put the ids in a preset's `bullets` / `projects` lists to show them on that CV.
 *      Ids that exist but aren't listed stay available as unchecked toggles in Resume Studio.
 *   4. A new target role = a new entry in `presets`. Nothing else needs changing.
 *
 * Bullet text may contain <strong> for emphasis. Keep each bullet to 1–2 lines on the page.
 */

const RESUME = {
  /* ---- Identity ---- */
  basics: {
    name: "Uttam Gupta",
    location: "Delhi, India",
    phone: "+91 9773706266",
    email: "uttamgupta2712@gmail.com",
    portfolio: "uttamgupta2712.is-a.dev",
    github: "github.com/UTTAMGUPTA2712",
    linkedin: "linkedin.com/in/uttam-gupta-a185a8239",
    linkedinUrl: "https://www.linkedin.com/in/uttam-gupta-a185a8239/",
  },

  /* The preset cv.html shows when no ?preset= is given. */
  defaultPreset: "backend_fullstack",

  /* ---- Target roles ----
   * title       headline under your name (positioning, not a job title you held)
   * summary     3–4 sentences
   * bullets     { jobId: [bullet ids in display order] }
   * projects    project ids in display order
   * skills      skill group names in display order
   * coverLetter {role} and {company} are filled in automatically
   */
  presets: {
    backend_fullstack: {
      label: "Backend & Full-Stack Engineer",
      title: "Backend & Full-Stack Engineer",
      summary:
        "Backend-focused full-stack engineer with 3+ years building multi-tenant SaaS and business platforms in TypeScript, Node.js, " +
        "NestJS, PostgreSQL/MongoDB, RabbitMQ and Next.js on Kubernetes. Cut a document-processing job from 5 minutes to 15 seconds, " +
        "introduced the inbox/outbox messaging standard now used across all services, and migrated an organization's " +
        "project history into a new platform. Test-driven; lead a 5–6 person team through code review and RFCs.",
      bullets: {
        zenmonk: ["latency", "outbox", "platform", "migration", "rbac", "subscription", "salon", "virtualization"],
        buck: ["buck-stripe", "buck-socket"],
        maity: ["maity-pipeline"],
      },
      projects: ["axon", "bookshelf-tutor"],
      projectsHeading: "Side Projects",
      skills: ["Backend & Architecture", "Databases & Storage", "Frontend", "DevOps & Delivery", "Testing & Quality", "Languages"],
      coverLetter: {
        intro:
          "I'm applying for the {role} role at {company}. I'm a backend-focused full-stack engineer with 3+ years building " +
          "production systems in TypeScript, Node.js and Next.js: multi-tenant platforms, reliable messaging and data pipelines.",
        body:
          "At Zenmonk Software I cut a document-processing route on our question bank from 5 minutes to 15 seconds by " +
          "moving it to an asynchronous, chunked pipeline; introduced the inbox/outbox pattern that is now our standard " +
          "for reliable messaging; and built a resumable, rate-limit-aware pipeline that migrated an organization's " +
          "project history into our own platform. Our services run on Kubernetes behind a GitLab CI pipeline with " +
          "SonarQube, and I write them test-first. I also lead a 5–6 person team through code review and RFCs.",
        close:
          "I'd welcome the chance to talk about how I can help your backend team ship reliable systems. Thank you for your time.",
      },
    },

    forward_deployed: {
      label: "Forward Deployed Engineer",
      title: "Forward Deployed Engineer",
      summary:
        "Full-stack engineer with 3+ years turning business requirements into shipped software. I run event-modeling " +
        "sessions with stakeholders, then design and build the system end to end in TypeScript, Node.js and React. " +
        "Delivered two client platforms end to end, from architecture to deployment (live streaming with Stripe billing; " +
        "AI video personalization with CRM integrations), and build applied-AI tools on local and cloud LLMs.",
      bullets: {
        zenmonk: ["requirements", "migration", "subscription", "salon", "latency", "lead"],
        buck: ["buck-ownership", "buck-stripe", "buck-socket"],
        maity: ["maity-pipeline", "maity-crm"],
      },
      projects: ["axon", "bookshelf-tutor", "codemind"],
      projectsHeading: "Selected AI Projects",
      skills: ["Backend & Architecture", "Integrations & Payments", "Applied AI", "Languages", "DevOps & Delivery"],
      coverLetter: {
        intro:
          "I'm applying for the {role} role at {company}. I'm a full-stack engineer with 3+ years taking business " +
          "problems from first conversation to production, most recently on client platforms I delivered end to end.",
        body:
          "For Buck I built a creator live-streaming platform from scratch (auth, Stripe subscriptions, real-time viewer " +
          "interaction), and for Maity an AI video-personalization pipeline with CRM integrations and engagement " +
          "analytics. At Zenmonk Software I run event-modeling sessions to turn stakeholder requirements into system " +
          "designs, built a resumable pipeline that migrated an organization's project history into our platform, and " +
          "designed a reusable Stripe subscription service for our products.",
        close:
          "I'd welcome the chance to talk about how I can help your customers get to production faster. Thank you for your time.",
      },
    },
  },

  /* ---- Experience ----
   * titles: your real job titles, oldest first. Shown as a progression line on the CV.
   */
  experience: [
    {
      id: "zenmonk",
      company: "Zenmonk Software & Services (Technology Subsidiary of FUNIBER)",
      url: "https://zenmonk.tech",
      location: "Delhi, India",
      dates: "June 2023 – Present",
      titles: [
        { title: "Intern", from: "Jun 2023" },
        { title: "Full Stack Developer", from: "Sep 2023" },
        { title: "Team Coordinator", from: "Sep 2024" },
        { title: "Team Lead", from: "Apr 2025" },
        { title: "Software Architect", from: "Aug 2026" },
      ],
      bullets: [
        {
          id: "latency",
          lead: "Performance",
          text: "Rebuilt a blocking document-processing route on the Question Management Bank as an <strong>asynchronous, chunked, parallel pipeline</strong> for 10,000+ documents, cutting processing time from <strong>5 minutes to 15 seconds</strong>.",
        },
        {
          id: "outbox",
          lead: "Reliable Messaging",
          text: "Introduced the <strong>transactional inbox/outbox pattern</strong> on <strong>RabbitMQ</strong> for reliable message handling; it is now the standard across all of the organization's services, with the outbox dispatcher running as a <strong>Kubernetes CronJob</strong>.",
        },
        {
          id: "platform",
          lead: "Platform & Delivery",
          text: "Ship to <strong>Kubernetes on Acens Cloud (Spain)</strong> via <strong>GitLab CI</strong> (build → test → SonarQube → deploy); since 2025 new projects are <strong>modular monoliths</strong>, each module's RabbitMQ consumers running as their own Deployment.",
        },
        {
          id: "tdd",
          lead: "Testing",
          text: "Work <strong>test-first (TDD)</strong>: every entity, handler, controller, processor and third-party integration has tests, run in CI alongside <strong>SonarQube</strong>.",
        },
        {
          id: "migration",
          lead: "Data Migration",
          text: "Built a <strong>resumable, job-queue-based migration pipeline</strong> moving an organization's projects, teams, tasks and attachments from a legacy tool into Padmasana, with rate-limited workers, retries and ordered import.",
        },
        {
          id: "ingestion",
          lead: "Hierarchical Import",
          text: "Imported nested parent/child tasks with a <strong>two-pass recursive seeding step</strong> in bounded batches, preserving relationships without foreign-key violations.",
        },
        {
          id: "rbac",
          lead: "Multi-Tenancy",
          text: "Designed <strong>multi-schema tenant isolation</strong> and <strong>runtime-configurable RBAC</strong> for IBMS (Intelligent Business Management System), a multi-tenant SaaS in development for external customers.",
        },
        {
          id: "subscription",
          lead: "Shared Billing Service",
          text: "Architected a <strong>reusable subscription service</strong> on Stripe: plans managed centrally, <strong>webhooks</strong> keep subscription state in sync and failed payments are retried, so new products don't build their own billing.",
        },
        {
          id: "salon",
          lead: "New Product",
          text: "Architected a <strong>multi-tenant salon booking SaaS</strong> from scratch, with Stripe for both platform subscriptions and customer payments.",
        },
        {
          id: "saga",
          lead: "Long-Running Workflows",
          text: "Built a <strong>database-level saga mechanism</strong> to run long, multi-step survey processes reliably without an external orchestrator.",
        },
        {
          id: "openfga",
          lead: "Authorization",
          text: "Implemented fine-grained, relationship-based access control in Padmasana with <strong>OpenFGA</strong>.",
        },
        {
          id: "padmasana",
          lead: "Modular Monolith",
          text: "Built Padmasana, an internal Jira/Asana-style collaboration tool, as a <strong>modular monolith</strong> with schema-level module boundaries, per-module consumers and Socket.IO real-time collaboration.",
        },
        {
          id: "encryption",
          lead: "Data Security",
          text: "Added <strong>encryption at the MongoDB layer</strong> so direct database access never exposes readable exam data.",
        },
        {
          id: "virtualization",
          lead: "Frontend Performance",
          text: "Removed lag on <strong>React/Next.js</strong> screens with 1,500+ interactive cells via <strong>row virtualization</strong>.",
        },
        {
          id: "requirements",
          lead: "Requirements to Design",
          text: "Ran <strong>event-modeling and event-storming</strong> sessions with product, design and QA to turn business requirements into system designs for IBMS and Padmasana, and checked design prototypes for feasibility before build.",
        },
        {
          id: "lead",
          lead: "Team Leadership",
          text: "Lead a <strong>5–6 person team</strong>: own technical design and RFCs, mentor through code review and pairing, and set the team's DDD/SOLID/CQRS and Feature-Sliced Design conventions.",
        },
      ],
    },
    {
      id: "buck",
      company: "Buck",
      role: "Freelance Full-Stack Engineer",
      location: "Remote",
      url: "https://buckstreaming.com",
      dates: "Jan 2024 – June 2024",
      bullets: [
        {
          id: "buck-ownership",
          lead: "End-to-End Delivery",
          text: "Built a creator-subscription <strong>live-streaming platform</strong> for the client from architecture through deployment.",
        },
        {
          id: "buck-stripe",
          lead: "Billing & Access",
          text: "Built the subscription backend on <strong>Stripe webhooks</strong> for billing lifecycles and tier-based access control.",
        },
        {
          id: "buck-socket",
          lead: "Real-Time",
          text: "Built live chat and viewer interaction with <strong>Socket.IO</strong> for concurrent broadcasts.",
        },
      ],
    },
    {
      id: "maity",
      company: "Maity",
      role: "Freelance Full-Stack AI Engineer",
      location: "Remote",
      url: "https://maity.pro",
      dates: "July 2024 – Dec 2024",
      bullets: [
        {
          id: "maity-pipeline",
          lead: "AI Video Pipeline",
          text: "Built the <strong>asynchronous video-generation pipeline</strong> that produces personalized sales videos from generative models and delivers them to recipients.",
        },
        {
          id: "maity-crm",
          lead: "CRM & Analytics",
          text: "Integrated <strong>CRM webhooks</strong> to trigger campaigns and built engagement-analytics endpoints for sales teams.",
        },
      ],
    },
  ],

  /* ---- Skills (groups; each preset picks which ones and in what order) ---- */
  skills: {
    "Languages": "TypeScript, JavaScript, Rust, Python, SQL",
    "Backend & Architecture": "Node.js, NestJS, Express, RabbitMQ, DDD, SOLID, CQRS, Event Modeling, Multi-Tenancy, Saga, Inbox/Outbox, REST, WebSockets",
    "Databases & Storage": "PostgreSQL, MongoDB (encryption), Redis, Multi-Schema Isolation",
    "Frontend": "React, Next.js, TypeScript, Redux Toolkit, Tailwind CSS, list virtualization",
    "DevOps & Delivery": "Docker, Kubernetes (namespaces, Ingress, TLS, CronJobs), GitLab CI/CD, Linux, Acens Cloud (Spain)",
    "Testing & Quality": "TDD, Jest, unit and integration tests, SonarQube",
    "Systems (hobby, Rust)": "Tokio (async Rust), HTTP reverse proxying, RESP protocol",
    "Integrations & Payments": "Stripe (subscriptions, webhooks), CRM integrations, Socket.IO, OpenFGA",
    "Applied AI": "LLM integration (OpenAI, Gemini, Ollama), vision models, Chrome extensions, Tauri desktop apps",
  },

  /* ---- Projects ---- */
  projects: [
    {
      id: "bookshelf-tutor",
      name: "Bookshelf Tutor",
      tech: "Rust, Tauri, Ollama, SQLite",
      github: "https://github.com/UTTAMGUPTA2712/bookshelf-tutor",
      text: "Desktop app that turns PDF books into a tutor: quizzes you on each chapter and reviews every answer with the pages to re-read. Runs <strong>offline on local models</strong> or with your own API key.",
    },
    {
      id: "load-balancer",
      name: "HTTP Load Balancer (hobby)",
      tech: "Rust, Tokio, hyper",
      github: "https://github.com/UTTAMGUPTA2712/load-balancer",
      text: "Async <strong>HTTP (Layer-7) reverse proxy</strong> in Rust with six pluggable strategies: round robin, weighted round robin, least connections, IP hash, URL hash and random.",
    },
    {
      id: "redis-lite",
      name: "Redis Lite (hobby)",
      tech: "Rust, Tokio, RESP",
      github: "https://github.com/UTTAMGUPTA2712/redis_lite",
      text: "Async key-value server in Rust that speaks a subset of the <strong>Redis RESP protocol</strong> (GET, SET, DELETE, PING), with key expiry and optional file persistence.",
    },
    {
      id: "axon",
      name: "Axon",
      tech: "Chrome MV3, Vision models",
      url: "https://axon-ai-assistant.vercel.app/",
      text: "Free Chrome extension with <strong>100+ users</strong> on the Chrome Web Store: summarizes the current page, answers questions about it and fills forms from your profile. Bring-your-own API key.",
    },
    {
      id: "codemind",
      name: "CodeMind",
      tech: "Tauri, Next.js, Local LLMs",
      github: "https://github.com/UTTAMGUPTA2712/codemind",
      text: "Semantic search and AI chat over a local codebase on <strong>local models</strong>, so source code never leaves the machine.",
    },
    {
      id: "ulearn",
      name: "ULearn",
      tech: "Next.js, MDX",
      url: "https://ulearn-it.vercel.app/",
      text: "Open learning site I write and maintain; each topic is an MDX folder that generates its own routes, sitemap and structured data.",
    },
    {
      id: "socket-io-connector",
      name: "Socket.IO Connector",
      tech: "React, TypeScript",
      url: "https://socket-io-connector.vercel.app/",
      text: "Browser-based Socket.IO client for testing real-time backends.",
    },
  ],

  /* ---- Education ---- */
  education: [
    {
      institution: "Lovely Professional University",
      area: "Computer Science & Engineering",
      studyType: "B.Tech",
      dates: "2020 – 2024",
      score: "7.86 CGPA",
    },
  ],

  /* ---- Certificates (show: false keeps it on file but off the CV) ---- */
  certificates: [
    {
      name: "Google Cloud Skills Boost - Game 7053",
      issuer: "Google Cloud",
      date: "March 2026",
      show: false,
    },
  ],
};
