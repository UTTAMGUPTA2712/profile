/*
 * resume-data.js — SINGLE SOURCE OF TRUTH for Uttam Gupta's CVs & cover letters.
 *
 * Edit this file, never the HTML. builder.html reads from here and assembles a
 * tailored, ATS-friendly CV + matching cover letter per preset.
 *
 * HOW TAGGING WORKS
 *   Every experience bullet has a `tag`:  'both' | 'mid' | 'senior'
 *     - 'both'   -> appears in every preset
 *     - 'mid'    -> only the mid-level ("Software Developer") CV
 *     - 'senior' -> only the senior CV
 *   Each preset also defines its own title, summary, and the ORDER bullets lead in.
 */

const RESUME = {
  /* ---- Fixed identity (same on every version) ---- */
  basics: {
    name: "Uttam Gupta",
    location: "Delhi, India",
    phone: "+91 9773706266",
    email: "uttamgupta2712@gmail.com",
    portfolio: "uttamgupta2712.is-a.dev",
    github: "github.com/UTTAMGUPTA2712",
    linkedin: "linkedin.com/in/uttam-gupta-a185a8239",
  },

  /* ---- The two positioning presets ----
   * STRATEGY (kept here as a comment so it never renders on the page):
   *   - "mid"    -> use for established / bigger companies (they won't grant
   *                 "Senior" on ~3 yrs; a grounded title clears the filter).
   *   - "senior" -> use for startups / newer firms.
   * The visible dropdown labels are just the job titles, so nothing about this
   * strategy is exposed even if someone finds the deployed builder URL.
   */
  presets: {
    mid: {
      label: "Software Developer",
      title: "Software Developer",
      // Grounded framing. Big companies won't grant "Senior" on ~3 yrs, so a
      // solid title gets you PAST the filter instead of auto-rejected.
      summary:
        "Full Stack Engineer with 3+ years shipping production web platforms end to end. " +
        "Promoted three times for consistent delivery impact. Comfortable across the stack — " +
        "TypeScript / React on the front, Node.js / NestJS services on the back — with hands-on " +
        "DevOps (Docker, Kubernetes, GCP) and applied AI experience.",
      // Bullets lead with delivery + impact.
      bulletOrder: ["latency", "frontend", "rbac", "cloud", "security", "arch", "lead"],
    },

    senior: {
      label: "Senior Full Stack Engineer",
      title: "Senior Full Stack Engineer",
      // Ownership / architecture framing.
      summary:
        "Senior Full Stack Engineer specializing in high-performance, event-driven, multi-tenant " +
        "platforms. Promoted three times in under three years while owning architecture from event " +
        "modeling through delivery. Full-stack depth (TypeScript, Node.js, Rust) plus DevOps " +
        "(Kubernetes, GCP) and applied AI.",
      // Bullets lead with architecture + ownership.
      bulletOrder: ["arch", "latency", "rbac", "cloud", "frontend", "security", "lead"],
    },
  },

  /* ---- Experience: one entry, bullets tagged & keyed by id ---- */
  experience: [
    {
      company: "Zenmonk Software And Services (FUNIBER)",
      role: "Full Stack Developer",
      note: "Promoted 3x for consistent delivery impact",
      dates: "June 2023 – Present",
      bullets: [
        {
          id: "arch",
          tag: "both",
          lead: "Enterprise Architecture",
          text:
            "Led re-engineering of a complex business-management and project-management platform, " +
            "breaking business flows into modular, event-driven services using event modeling and event storming.",
        },
        {
          id: "latency",
          tag: "both",
          lead: "Performance",
          text:
            "Cut document-processing time from 5 minutes to 15 seconds for 10k+ concurrent records by converting " +
            "synchronous routes into asynchronous, parallelized chunk-processing pipelines.",
        },
        {
          id: "rbac",
          tag: "both",
          lead: "Access Control",
          text:
            "Designed a runtime-configurable RBAC system with SSO and strict tenant isolation for a multi-tenant ERP.",
        },
        {
          id: "frontend",
          tag: "both",
          lead: "Frontend",
          text:
            "Improved performance on data-heavy screens with table virtualization for 1,500+ dynamic cells, " +
            "reducing DOM overhead and interaction latency.",
        },
        {
          id: "cloud",
          tag: "both",
          lead: "Cloud & DevOps",
          text:
            "Supported migration of a legacy monolith to RabbitMQ-powered microservices deployed on GCP (GKE) and " +
            "Acens, improving deployment frequency.",
        },
        {
          id: "security",
          tag: "both",
          lead: "Security",
          text:
            "Implemented MongoDB field-level encryption for sensitive PII and resilient message-handling patterns " +
            "to reduce failures during peak throughput.",
        },
        {
          id: "lead",
          tag: "senior",
          lead: "Collaboration",
          text:
            "Worked across engineering, QA, product, and design to move technical-feasibility checks earlier in the " +
            "delivery cycle and shorten feedback loops.",
        },
      ],
    },
  ],

  /* ---- Skills: order per preset via skillsOrder; all groups shown in both ---- */
  skills: {
    Languages: "Rust, TypeScript, JavaScript (ES6+), SQL",
    Frontend: "React.js, Next.js, Redux Toolkit, Tailwind CSS, shadcn/ui",
    Backend: "Node.js, NestJS, RabbitMQ, Redis, PostgreSQL, MongoDB",
    "DevOps & Cloud": "GCP (GKE), Docker, Kubernetes, CI/CD, System Design",
    Architecture: "Event Storming / Modeling, EDA, Saga & CQRS, DDD, RBAC / SSO, TDD, GPT-4o Vision, ONNX Runtime, semantic search",
  },
  // Which skill groups lead, per preset.
  skillsOrder: {
    mid: ["Languages", "Frontend", "Backend", "DevOps & Cloud", "Architecture"],
    senior: ["Architecture", "Backend", "Languages", "DevOps & Cloud", "Frontend"],
  },

  /* ---- Selected projects (shown on both; tweak `show` to hide any) ----
   * Kept to 4 visible projects to match the one-page print layout tuned in
   * builder.html (uttam-gupta-cv.pdf is the reference). CodeMind and Local
   * Lens are still here — flip `show` to true to bring one back if you trim
   * something else to make room.
   */
  projects: [
    { name: "High-Performance Load Balancer (Rust)", show: true,
      text: "Modular Layer-4 load balancer in Rust (Tokio) with Round Robin and IP Hash for concurrent traffic." },
    { name: "Redis Lite (Rust)", show: true,
      text: "Multi-threaded Redis RESP protocol implementation focused on low-latency key-value operations." },
    { name: "CodeMind", show: false,
      text: "Offline semantic search + AI chat over local codebases (Tauri, Next.js, local LLMs)." },
    { name: "Axon", show: true,
      text: "Chrome extension using GPT-4o Vision to automate web workflows — form-filling and content scraping." },
    { name: "Local Lens", show: false,
      text: "Privacy-first, 100% offline OCR and object detection (Rust, ONNX, ResNet50)." },
    { name: "FileBridge", show: true,
      text: "Turns local folders into file-sharing servers with QR-code pairing for cross-device I/O." },
  ],

  education: [
    { school: "Lovely Professional University", degree: "B.Tech, Computer Science & Engineering", detail: "CGPA 7.86 / 10" },
  ],
};
