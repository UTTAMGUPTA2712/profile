# Career Path Report — Uttam Gupta

**Location:** Delhi, India
**Phone:** +91 9773706266
**Email:** uttamgupta2712@gmail.com
**Portfolio:** uttamgupta2712.is-a.dev
**GitHub:** github.com/UTTAMGUPTA2712
**LinkedIn:** in/uttam-gupta-a185a8239

**Employer:** Zenmonk Software And Services — a child company of FUNIBER, building Edtech platforms for the parent organization.
**Tenure:** June 2023 – Present

---

## 1. Role Progression

```
Intern (June 2023) → Full Stack Developer (Sept 2023) → Team Coordinator (Full Stack Developer) (Sept 2024) → Team Lead (Full Stack Developer) (April 2025)
```

Three promotions occurred within under three years — internally framed as "Career Velocity: Associate → Senior levels."

---

## 2. Roles & Responsibilities by Title

### 2.1 Intern
Onboarding to the stack and codebase; supervised, scoped ticket work.

### 2.2 Full Stack Developer
Individual-contributor ownership of features end to end across frontend and backend, built to the organization's backend standards (DDD, SOLID, CQRS) and frontend standard (Feature-Sliced Design). Work at this level was execution-focused: shipping and optimizing features on specific products — most visibly the Question Management Bank processing pipeline and the Attendance Control App's virtualization fix.

### 2.3 Team Coordinator (Full Stack Developer)
Retained hands-on development while taking on coordination of an own team of 5–6 engineers — sequencing that team's work against UI/UX, QA, and Product inputs, and running early technical-feasibility checks on design prototypes before build started, to keep feedback loops short. Scope was limited to the one team, not organization-wide delivery.

### 2.4 Team Lead (Full Stack Developer)
Same team scope as Team Coordinator — the same 5–6 engineers, not a larger headcount. The promotion added project ownership plus technical and architectural authority rather than a bigger team. Responsibilities at this stage:
- Owning the project end to end — accountable for its delivery, not just a slice of implementation.
- Owning technical design and RFCs for the team's work.
- Driving adoption of engineering practices that went on to become organization-wide standards — the Resilient Message Handling (inbox/outbox) pattern, and the DDD/SOLID/CQRS/FSD conventions.
- Leading architecture on the team's most complex systems directly — multi-tenancy and dynamic RBAC design on IBMS, and the domain modeling/event storming behind Padmasna.
- Mentoring the 5–6 person team through code review and pairing.
- Managing inter-team collaboration between the team and the UI/UX and QA teams.
- Translating business requirements into technical deliverables via event modeling — the discovery layer upstream of architecture decisions on IBMS and Padmasna.

---

## 3. Scope of Work by Project

The five products below are a selected, representative set — not the full list of what has been built. All are Edtech platforms, built by Zenmonk for FUNIBER (the parent organization, an international higher-education group) — serving students, faculty/staff, and academic administration rather than a generic enterprise audience. These five were chosen as the clearest, highest-impact examples of the range of work; the remaining projects follow the same architectural and delivery standards described in Section 4.

### 3.1 IBMS (Integrated Business Management System)
**What it is:** An HRM-style platform for the education group — multi-tenant workforce/business management across FUNIBER's constituent organizations, each with its own isolated data and access rules.
- Architected multi-tenancy across the platform.
- Built a dynamic RBAC system (runtime-configurable, not hardcoded).
- Designed organization-level data isolation using a multi-schema approach, with per-organization customization.

### 3.2 Question Management Bank
**What it is:** A repository system for creating, storing, and managing exam/assessment question sets at scale, for academic use.
- Rebuilt a synchronous processing route into an asynchronous, parallelized chunked pipeline to handle 10,000+ documents — cut processing time from 5 minutes to 15 seconds.
- Implemented MongoDB database-level encryption so that direct database access does not expose readable data, independent of the application layer.

### 3.3 Attendance Control App
**What it is:** An attendance-tracking application for recording and managing student/staff presence data.
- Resolved DOM lag on data-heavy screens by implementing virtualization for 1,500+ clickable and anchor-based cells, rendering only visible rows to cut DOM overhead and interaction latency.

### 3.4 Survey Builder
**What it is:** A tool for creating and running academic surveys (e.g. course/student feedback), including handling of long-running survey/response-collection processes.
- Built an internal, database-level mechanism that replicates Saga-pattern behavior to manage long-running processes reliably, without relying on an external orchestration framework.

### 3.5 Padmasna
**What it is:** An internal project/task management and team collaboration tool for the organization — functionally comparable to Asana, Miro, and Jira, adapted to the organization's specific workflows.
- Ran event modeling and event storming to map the product domain.
- Reverse-engineered relevant workflows from Asana, Miro, and Jira, then adapted and distributed the resulting features across the product's domains for implementation.
- Built as a modular monolith, with module separation enforced at the schema level rather than split into separate services.
- Built real-time collaboration via Socket-based communication, within a clean, layered application architecture.

---

## 4. Organization-Wide Engineering Contributions

Work that isn't scoped to a single product but applies across all of them:

- **Deployment:** every project above is deployed through a standardized pipeline — Acens, GitLab CI/CD, Kubernetes, and Docker.
- **Resilient Message Handling:** implemented the inbox/outbox pattern as the organization's standard approach to reliable messaging; now used across all services.
- **Backend architecture standard:** Domain-Driven Design, SOLID principles, and CQRS applied across backend projects.
- **Frontend architecture standard:** Feature-Sliced Design (FSD) applied across frontend projects.

---

## 5. Work Outside the Primary Employer

Two categories, both documented on the portfolio site but distinct in nature: paid freelance/client work, and self-directed personal projects.

### 5.1 Freelance / Client Work

| Project | Description | Problem Addressed | Stack | Live Link |
|---|---|---|---|---|
| **Buck** | Creator-subscription live-streaming platform | End-to-end platform build: authentication, subscription access, payments, and real-time viewer interaction for creators streaming live and monetizing via subscription or ad-supported free tiers | Next.js, Socket.IO, Stripe | [buckstreaming.com](https://buckstreaming.com) |
| **Maity** | AI-powered video-personalization platform for sales outreach | Personalized video generation at scale for sales teams — implemented the video generation pipeline itself, plus campaign management, CRM integrations, video delivery backend, and engagement analytics | React, AI video generation, CRM integrations | [maity.pro](https://maity.pro) |

Both were client engagements with full platform ownership — end-to-end delivery (architecture through deployment) rather than exploratory or portfolio-building work.

### 5.2 Personal Projects

| Project | Description | Problem Addressed | Stack |
|---|---|---|---|
| **Axon** | Chrome extension, vision-to-action layer | Automates web workflows — form-filling and content scraping — by having GPT-4o Vision interpret the page directly rather than relying on brittle DOM selectors | GPT-4o Vision, Chrome Extension API |
| **CodeMind** | Offline semantic search and AI chat over local codebases | Enables natural-language queries against a codebase without transmitting source code to the cloud | Tauri, Next.js, local LLMs |
| **Local Lens** | Privacy-first OCR and object detection, fully offline | Vision inference (OCR, ResNet50 object detection) with no network calls; all processing runs on-device | Rust, ONNX Runtime, ResNet50 |
| **Redis Lite** | Multi-threaded Redis RESP protocol implementation | Low-latency key-value operations implemented from the protocol level up, as a concurrency exercise | Rust, multithreading, RESP |
| **Rust Load Balancer** | Layer-4 load balancer (Tokio) | Round Robin and IP Hash routing algorithms for high-concurrency TCP traffic | Rust, Tokio, TCP/IP |
| **FileBridge** | Turns a local folder into a file-sharing server | Cross-device file I/O via QR-code pairing without a cloud intermediary | Node.js, networking |
| **Ask AI Web** | Chat interface for LLMs and custom GPTs | Streaming responses and conversation-history management over multiple LLM backends | Next.js, Vercel AI SDK, Tailwind |

**Observed pattern:** the personal-project set skews toward offline-first/privacy-first systems work (CodeMind, Local Lens, FileBridge) and low-level performance/concurrency work (Redis Lite, Rust Load Balancer) — self-directed exploration distinct from both the client work in 5.1 and the enterprise product work at the primary employer. Applied AI (Axon, CodeMind) is a recurring thread here, separate from the applied-AI work done for a client (Maity).

---

## 6. Education

- **B.Tech, Computer Science & Engineering** — Lovely Professional University, 2020–2024, 7.86 CGPA
- Class XII — Holy Angels Sr. Sec. School, 92% aggregate
- Google Cloud Skills Boost — Game 7053 (completed March 2026)

---

## 7. Summary

Five distinct Edtech products, all built for FUNIBER through its subsidiary Zenmonk — IBMS, Question Management Bank, Attendance Control App, Survey Builder, and Padmasna — sit under a single, consistent engineering foundation: DDD/SOLID/CQRS on the backend, FSD on the frontend, inbox/outbox messaging org-wide, and a standardized Kubernetes/Docker/GitLab CI/CD deployment pipeline across all of them.

The role progression tracks a shift from single-product execution (Question Management Bank, Attendance Control App) to cross-product architecture ownership (IBMS's multi-tenancy/RBAC design, Padmasna's domain modeling, and setting the org-wide messaging and architecture standards used everywhere else).

Outside the primary employer, two different bodies of work exist side by side: freelance client platforms (Buck, Maity) delivered end-to-end with full ownership, and self-directed personal projects that run on a different axis entirely — systems programming (Rust) and offline/local-first AI. The freelance work is closest in shape to the day job (product ownership, real users, deployment); the personal projects are closer to R&D, relevant when targeting roles with a systems or AI-infrastructure emphasis rather than pure product engineering.
