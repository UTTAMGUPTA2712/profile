/*
 * resume-data.js — SINGLE SOURCE OF TRUTH for Uttam Gupta's CVs & cover letters.
 * Synchronized with master_data.json.
 *
 * builder.html reads from here and assembles a tailored, ATS-friendly CV + matching
 * cover letter per preset, strictly constricted to a single page.
 */

const RESUME = {
  /* ---- Fixed Identity ---- */
  basics: {
    name: "Uttam Gupta",
    label: "Lead Backend & Distributed Systems Engineer",
    location: "Delhi, India",
    phone: "+91 9773706266",
    email: "uttamgupta2712@gmail.com",
    portfolio: "uttamgupta2712.is-a.dev",
    github: "github.com/UTTAMGUPTA2712",
    linkedin: "linkedin.com/in/uttam-gupta-a185a8239",
  },

  /* ---- Target Positioning Presets ---- */
  presets: {
    lead_backend: {
      label: "Lead Backend & Systems Engineer",
      title: "Lead Backend & Distributed Systems Engineer",
      summary:
        "Backend Systems Engineer with 3+ years of production experience architecting high-throughput data pipelines, " +
        "multi-tenant architectures, and resilient event-driven systems. Core expertise in TypeScript, Node.js, and Rust, " +
        "specializing in asynchronous batch processing, database-level concurrency, and distributed transactions. Proven " +
        "track record eliminating I/O bottlenecks by 95% and engineering fault-tolerant data migration infrastructure.",
      // 4-5 focused high-impact bullets to guarantee exact single-page confinement
      bulletOrder: ["outbox", "etl", "latency", "rbac", "saga"],
    },

    tech_lead: {
      label: "Full Stack Technical Lead",
      title: "Full Stack Technical Lead",
      summary:
        "Technical Lead and Systems Architect with 3+ years owning platform architecture, engineering standards, " +
        "and distributed data pipelines across multiple enterprise platforms. Proven track record mentoring engineering teams, " +
        "authoring RFCs, and delivering complex multi-tenant isolation, asynchronous ingestion, and resilient messaging systems.",
      bulletOrder: ["lead", "outbox", "latency", "rbac", "etl"],
    },

    senior_backend: {
      label: "Senior Backend Engineer",
      title: "Senior Backend Engineer",
      summary:
        "Senior Backend Systems Engineer specializing in event-driven microservices, database-level concurrency, " +
        "and distributed transaction consistency. Production depth across Node.js/NestJS, TypeScript, PostgreSQL, and Rust, " +
        "with proven impact cutting processing latency by 95% and building client-side field-level encryption at scale.",
      bulletOrder: ["latency", "outbox", "encryption", "saga", "ingestion"],
    },
  },

  /* ---- Professional Experience ---- */
  experience: [
    {
      id: "zenmonk",
      company: "Zenmonk Software & Services (Subsidiary of FUNIBER)",
      role: "Lead Backend Engineer / Full Stack Technical Lead",
      location: "Delhi, India",
      dates: "June 2023 – Present",
      note: "Promoted 3x: Intern → Full Stack Dev → Team Lead",
      summary: "Owning platform architecture, engineering standards, and distributed data pipelines across enterprise platforms.",
      bullets: [
        {
          id: "outbox",
          lead: "Resilient Messaging",
          text: "Standardized organization-wide Resilient Message Handling using the <strong>Transactional Outbox/Inbox pattern</strong>, eliminating message drop across microservices.",
        },
        {
          id: "etl",
          lead: "ETL Pipeline Architecture",
          text: "Architected a fault-tolerant Python ETL pipeline migrating entire organization's Asana history to Padmasana, using a <strong>dynamic thread pool</strong> and <strong>runtime token rotation</strong> to overcome strict API rate limits.",
        },
        {
          id: "ingestion",
          lead: "Recursive Ingestion",
          text: "Engineered a <strong>two-pass recursive dependency ingestion algorithm</strong> for nested tasks, resolving parent-child hierarchies in bounded 10,000-record batches without foreign key violations.",
        },
        {
          id: "latency",
          lead: "Performance Optimization",
          text: "Re-architected a blocking processing route on Question Management Bank into an <strong>asynchronous, chunked pipeline</strong> for 10,000+ files, reducing execution latency from 5 minutes to 15 seconds (<strong>95% reduction</strong>).",
        },
        {
          id: "rbac",
          lead: "Multi-Tenancy & Security",
          text: "Designed a <strong>multi-tenant isolation model</strong> with a multi-schema strategy on IBMS and built a dynamic, <strong>runtime-configurable RBAC engine</strong>.",
        },
        {
          id: "saga",
          lead: "Distributed Transactions",
          text: "Implemented a <strong>database-level Saga pattern</strong> to orchestrate long-running, multi-step survey operations reliably without external coordinator overhead.",
        },
        {
          id: "encryption",
          lead: "Data Security",
          text: "Integrated <strong>client-side field-level encryption</strong> at the MongoDB layer to safeguard sensitive examination data independently of application code.",
        },
        {
          id: "lead",
          lead: "Engineering Leadership",
          text: "Authored <strong>RFCs</strong> and mentored a 5–6 person engineering team on <strong>Domain-Driven Design (DDD)</strong>, <strong>CQRS</strong>, and strict schema-level bounded contexts.",
        },
      ],
    },
    {
      id: "buck",
      company: "Buck",
      role: "Lead Platform Engineer (Contract)",
      location: "Remote",
      url: "https://buckstreaming.com",
      dates: "Jan 2024 – June 2024",
      summary: "Creator-subscription live-streaming platform.",
      bullets: [
        {
          id: "buck-stripe",
          lead: "Billing & Access",
          text: "Architected core subscription backend integrating <strong>Stripe webhooks</strong> for automated billing lifecycles and tier access control.",
        },
        {
          id: "buck-socket",
          lead: "Real-Time Systems",
          text: "Built real-time messaging and live-viewer interaction infrastructure via <strong>Socket.IO</strong>, minimizing latency during concurrent broadcast events.",
        },
      ],
    },
    {
      id: "maity",
      company: "Maity",
      role: "Backend Systems Engineer (Contract)",
      location: "Remote",
      url: "https://maity.pro",
      dates: "July 2024 – Dec 2024",
      summary: "AI video generation and sales personalization platform.",
      bullets: [
        {
          id: "maity-pipeline",
          lead: "AI Pipeline",
          text: "Constructed an <strong>asynchronous rendering pipeline</strong> connecting external generative video models with upstream CRM webhooks.",
        },
        {
          id: "maity-analytics",
          lead: "Analytics Scale",
          text: "Designed <strong>analytics aggregation endpoints</strong> to track distribution and viewer engagement metrics at scale.",
        },
      ],
    },
  ],

  /* ---- Technical Skills (5 categories from master_data.json) ---- */
  skills: {
    "Languages": "TypeScript, JavaScript, Rust, Python, SQL",
    "Backend & Architecture": "Node.js, NestJS, Express, Domain-Driven Design (DDD), CQRS, Multi-Tenancy, Saga Pattern, Event Modeling, REST APIs, WebSockets",
    "Systems & Concurrency": "Tokio (Async Rust), Layer-4 Load Balancing, TCP/IP Networking, Multi-threading, RESP Protocol Implementation",
    "Databases & Storage": "PostgreSQL, MongoDB (Database-Level Encryption), Redis, Multi-Schema Isolation",
    "DevOps & Cloud": "Docker, Kubernetes, GitLab CI/CD, Linux, Acens",
  },

  skillsOrder: {
    lead_backend: ["Systems & Concurrency", "Backend & Architecture", "Databases & Storage", "Languages", "DevOps & Cloud"],
    tech_lead: ["Backend & Architecture", "Languages", "Databases & Storage", "DevOps & Cloud", "Systems & Concurrency"],
    senior_backend: ["Backend & Architecture", "Databases & Storage", "Languages", "Systems & Concurrency", "DevOps & Cloud"],
  },

  /* ---- Selected Projects ---- */
  projects: [
    {
      name: "Layer-4 Load Balancer",
      tech: "Rust, Tokio, TCP/IP",
      github: "https://github.com/UTTAMGUPTA2712/load-balancer",
      show: true,
      text: "Asynchronous <strong>Layer-4 TCP reverse proxy</strong> and load balancer built in <strong>Rust (Tokio)</strong>. Implemented <strong>Round-Robin</strong> and <strong>IP-Hash</strong> scheduling algorithms for high-concurrency stream routing and connection pooling.",
    },
    {
      name: "Redis Lite",
      tech: "Rust, RESP, Concurrency",
      github: "https://github.com/UTTAMGUPTA2712/redis_lite",
      show: true,
      text: "Multi-threaded, in-memory key-value store adhering to the <strong>Redis Serialization Protocol (RESP)</strong>. Built low-level <strong>TCP byte-stream parsing</strong> with atomic primitives for thread-safe concurrent reads and writes.",
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

  /* ---- Certificates ---- */
  certificates: [
    {
      name: "Google Cloud Skills Boost - Game 7053",
      issuer: "Google Cloud",
      date: "March 2026",
    },
  ],
};
