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
 *
 * HOW TO KEEP THIS CV CLEAN (learned the hard way — follow these)
 *   - Bold keywords: wrap the 2-4 most important technical terms per bullet/project
 *     in <strong>...</strong> (e.g. <strong>Saga & CQRS patterns</strong>). builder.html
 *     inserts `text` via innerHTML, so embedded HTML renders fine — don't skip this,
 *     unbolded bullets are much harder for a recruiter/ATS to skim.
 *   - One page only: builder.html's print CSS targets a single printed page. Keep
 *     each bullet to ~2 wrapped lines — a bullet that wraps to 3 lines (or leaves a
 *     lone last word orphaned on its own line) should be trimmed, not left as-is.
 *   - Summary length: each preset's `summary` must fit on 3 lines when rendered —
 *     if you add a clause, cut one elsewhere in the same summary.
 *   - Projects capped at 3-4 visible (`show: true`): currently Axon, Buck, Maity.
 *     Flip `show` on the rest only if you also hide/trim something else to compensate.
 *   - No Rust anywhere: Rust was intentionally removed from skills/projects/summary
 *     across every CV surface (this file, cv/index.html, profile/index.html's project
 *     grid is the one exception — that portfolio page keeps Rust projects on purpose
 *     since it's a broader showcase, not a targeted resume).
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
      bulletOrder: ["latency", "frontend", "rbac", "cloud", "security", "testing", "arch", "lead"],
    },

    senior: {
      label: "Senior Full Stack Engineer",
      title: "Senior Full Stack Engineer",
      // Ownership / architecture framing.
      summary:
        "Senior Full Stack Engineer specializing in event-driven, multi-tenant platforms. Promoted " +
        "three times while owning architecture end-to-end. Full-stack depth (TypeScript, Node.js), " +
        "DevOps (Kubernetes, GCP), and applied AI.",
      // Bullets lead with architecture + ownership.
      bulletOrder: ["arch", "latency", "rbac", "cloud", "frontend", "security", "testing", "lead"],
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
            "breaking business flows into modular, <strong>event-driven services</strong> using <strong>event " +
            "modeling</strong>, <strong>event storming</strong>, and <strong>Saga & CQRS patterns</strong> for " +
            "distributed transaction consistency.",
        },
        {
          id: "latency",
          tag: "both",
          lead: "Performance",
          text:
            "Cut document-processing time from 5 minutes to 15 seconds for 10k+ concurrent records by converting " +
            "synchronous routes into <strong>asynchronous, parallelized chunk-processing pipelines</strong>.",
        },
        {
          id: "rbac",
          tag: "both",
          lead: "Access Control",
          text:
            "Designed a runtime-configurable <strong>RBAC system</strong> with <strong>SSO</strong> and strict " +
            "<strong>tenant isolation</strong> for a multi-tenant ERP.",
        },
        {
          id: "frontend",
          tag: "both",
          lead: "Frontend",
          text:
            "Improved <strong>React.js/Next.js</strong> performance on data-heavy screens with <strong>table " +
            "virtualization</strong> for 1,500+ dynamic cells, reducing DOM overhead and interaction latency.",
        },
        {
          id: "cloud",
          tag: "both",
          lead: "Cloud & DevOps",
          text:
            "Migrated a legacy <strong>Node.js/NestJS</strong> monolith to <strong>RabbitMQ-powered " +
            "microservices</strong> on <strong>GCP (GKE)</strong>, using <strong>Docker</strong> and " +
            "<strong>CI/CD</strong> to boost deployment frequency.",
        },
        {
          id: "security",
          tag: "both",
          lead: "Security",
          text:
            "Implemented <strong>MongoDB field-level encryption</strong> for sensitive PII and resilient " +
            "<strong>message-handling patterns</strong> to reduce failures during peak throughput.",
        },
        {
          id: "testing",
          tag: "both",
          lead: "Testing & Performance",
          text:
            "Adopted <strong>TDD with Jest</strong> across core services to catch regressions early.",
        },
        {
          id: "lead",
          tag: "senior",
          lead: "Engineering Leadership",
          text:
            "Owned <strong>technical design and RFCs</strong>, <strong>mentored engineers</strong>, and partnered " +
            "cross-functionally to speed up delivery feedback loops.",
        },
      ],
    },
  ],

  /* ---- Skills: order per preset via skillsOrder; all groups shown in both ---- */
  skills: {
    Languages: "TypeScript, JavaScript (ES6+), SQL",
    Frontend: "React.js, Next.js, Vite, Redux Toolkit, Tailwind CSS, shadcn/ui, Material UI",
    Backend: "Node.js, NestJS, Socket.IO, RabbitMQ, Redis, PostgreSQL, MongoDB, Stripe",
    "DevOps & Cloud": "GCP (GKE), Docker, Kubernetes, CI/CD, System Design, WebRTC, HLS",
    Architecture: "Event Storming / Modeling, EDA, Saga & CQRS, DDD, RBAC / SSO, TDD, Jest, Testing Library, API Design (REST/GraphQL/OpenAPI), GPT-4o Vision, ONNX Runtime, semantic search",
  },
  // Which skill groups lead, per preset.
  skillsOrder: {
    mid: ["Languages", "Frontend", "Backend", "DevOps & Cloud", "Architecture"],
    senior: ["Architecture", "Backend", "Languages", "DevOps & Cloud", "Frontend"],
  },

  /* ---- Selected projects (shown on both; tweak `show` to hide any) ----
   * Kept to 3 visible projects (Axon, Buck, Maity) to match cv/index.html and
   * the one-page print layout tuned in builder.html. CodeMind, Local Lens,
   * FileBridge, and the Rust projects are still here — flip `show` to true to
   * bring one back if you trim something else to make room.
   */
  projects: [
    { name: "High-Performance Load Balancer (Rust)", show: false,
      text: "Modular <strong>Layer-4 load balancer</strong> in Rust (Tokio) with <strong>Round Robin</strong> and <strong>IP Hash</strong> for concurrent traffic." },
    { name: "Redis Lite (Rust)", show: false,
      text: "Multi-threaded <strong>Redis RESP protocol</strong> implementation focused on low-latency key-value operations." },
    { name: "CodeMind", show: false,
      text: "Offline <strong>semantic search</strong> + AI chat over local codebases (Tauri, Next.js, local LLMs)." },
    { name: "Axon", show: true,
      text: "Chrome extension using <strong>GPT-4o Vision</strong> to automate web workflows — <strong>form-filling</strong> and <strong>content scraping</strong>." },
    { name: "Local Lens", show: false,
      text: "Privacy-first, 100% offline <strong>OCR</strong> and <strong>object detection</strong> (Rust, ONNX, ResNet50)." },
    { name: "FileBridge", show: false,
      text: "Turns local folders into file-sharing servers with <strong>QR-code pairing</strong> for cross-device I/O." },
    { name: "Buck", show: true, live: "https://buckstreaming.com",
      text: "<strong>Creator-subscription live-streaming platform</strong> (Next.js) where creators stream live and viewers <strong>subscribe</strong> or watch free with <strong>ads</strong>. Built and scaled the platform end-to-end — <strong>authentication</strong>, <strong>subscription access</strong>, <strong>payments</strong>, and <strong>Socket.IO real-time interaction</strong> — with full platform ownership." },
    { name: "Maity", show: true, live: "https://maity.pro",
      text: "<strong>AI-powered video-personalization</strong> platform for sales outreach; built <strong>campaign management</strong>, <strong>CRM integrations</strong>, video delivery backend, and <strong>analytics dashboard</strong>." },
  ],

  education: [
    { school: "Lovely Professional University", degree: "B.Tech, Computer Science & Engineering", detail: "2020 – 2024 · 7.86 CGPA" },
  ],
};
