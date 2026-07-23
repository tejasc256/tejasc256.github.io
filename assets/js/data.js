window.experienceData = [
  {
    date: "Jun 2026 – Jun 2026",
    title: "AdsgencyAI",
    role: "Software Engineer",
    bullets: [
      "Delivered a flagship competitor-ad discovery platform for 500+ users, engineering the full stack: frontend masonry UI, backend Meta/TikTok REST APIs, and an LLM-based classification engine.",
      "Engineered production LLM reliability infrastructure — Redis-backed concurrency semaphores, jittered exponential backoff, circuit breaker across model gateway; platform now handles ~200 AI-generation jobs daily reliably.",
      "Re-architected production incident response pipeline from synchronous to queue-first (Celery), adding retry-with-backoff, idempotency guards, and failure-mode handling.",
      "Hardened image-ingestion pipeline against infrastructure vulnerabilities with defense-in-depth, thread-safe secure connection pool, and strict certificate verification.",
      "Redesigned unbounded LLM API call into asynchronous semaphore-capped worker pool, eliminating 5–15 minute first-load hang and delivering instant fallback responses.",
      "Engineered backend foundation for visual discovery by integrating TikTok and Meta Ads APIs; built unified data normalizer, caching layer, and pagination system.",
      "Enhanced search reliability by implementing lazily-triggered pagination with cross-page cache deduplication, ensuring users receive at least 15 unique, high-quality creatives per query.",
      "Fixed Redis cache bypass affecting 31 LangGraph agent nodes and consolidated duplicated LLM fallback logic copy-pasted across 27 files onto single shared handler.",
      "Fixed critical frontend and authentication bugs including Roku OAuth stale connection handling and silent token-refresh failures.",
    ],
    tags: ["LLM Reliability", "Celery", "Redis", "MCP", "Circuit Breaker", "Concurrency Control"],
  },
  {
    date: "May 2025 – May 2026",
    title: "NYU Information Technology",
    role: "Software Engineer",
    bullets: [
      "Proposed and independently built custom Model Context Protocol (MCP) servers for GitHub and Google Workspace—enabling AI agents to autonomously triage and resolve internal repository issues, saving ~40 engineering hours weekly.",
      "Deployed Snowflake MCP integration allowing non-technical university stakeholders to run natural-language analytical queries against institutional data; extended with RAG layer using pgvector and Claude API.",
      "Owned end-to-end development of internal university platforms, building Flask REST API handling hundreds of daily requests and corresponding React/TypeScript frontend.",
      "Implemented WCAG accessibility compliance across React UI (verified with Axe DevTools) and introduced client-side fuzzy search using Fuse.js for better usability.",
      "Built streaming LLM response interface in React using Server-Sent Events (SSE).",
    ],
    tags: ["MCP", "Snowflake", "Flask", "React", "TypeScript", "pgvector", "RAG"],
  },
  {
    date: "Oct 2023 – Jul 2024",
    title: "Amazon",
    role: "Software Development Engineer II",
    bullets: [
      "Closed out a recurring SEV2 affecting 200+ stuck order workflows by tracing root cause to Stripe only confirming successful refunds—not failures. Shipped workflow-level terminal-state handling across Ordering and Payments Platform despite strict cross-service change-approval bar.",
      "Shipped event-driven Prime auto-refund service from scratch (API Gateway, ECS, Lambda, SNS/SQS, DynamoDB), recovering ~$500K+ in annual customer value and eliminating 30,000+ annual customer contacts.",
      "Spearheaded payments-domain integration for org-wide centralized config store, standardizing legacy hardcoded parameters into single scalable schema; negotiated adoption roadmaps with 40+ downstream service owners.",
      "Conducted 200+ peer code reviews and led design reviews introducing event-driven architecture patterns (Saga, Outbox, event sourcing), establishing new engineering standards across payments organization.",
      "Served as payments workstream lead for Amazon Ireland launch; coordinated 40+ service migration across payments, retail, checkout, disbursements, and subscriptions.",
      "Diagnosed and resolved payment transaction race condition where simultaneous updates had no synchronization; designed locking mechanism from scratch to serialize concurrent updates safely.",
    ],
    tags: ["Java", "Event-Driven Architecture", "AWS", "DynamoDB", "System Design"],
  },
  {
    date: "Jul 2021 – Sep 2023",
    title: "Amazon",
    role: "Software Development Engineer I",
    bullets: [
      "Accelerated marketplace payments launches globally by mapping cross-service dependencies for 40+ away-teams into standardized integration playbook; framework slashed Belgium launch from 8 months to 2 months and enabled 2-engineer team to deliver Ireland in 2 weeks.",
      "Implemented seller disbursement payment method end-to-end using AWS CDK; scaled to 1M+ active users processing ~$50M/month in transaction volume with zero availability incidents.",
      "Built deep expertise across 10+ European payment flows including SCA/3DS authentication, local payment methods, refunds, and disputes.",
      "Designed dual-pipeline PII data leak detection service covering 20+ Tier-1 services using AWS Athena and AWS Batch, surfacing and remediating real data leakage in legacy codebases.",
      "Mentored 2 interns through full delivery of PII auditing tool from architecture design to onboarding high-traffic services.",
    ],
    tags: ["Java", "AWS CDK", "Athena", "Payments", "AWS Batch"],
  },
];

window.projectsData = [
  {
    title: "Distributed Collaborative Whiteboard (ATProto)",
    description: "Decentralized collaborative whiteboard using Bluesky DID authentication, implementing concurrent conflict-resolution strategies (atomic CAS vs. vector clocks).",
    tags: ["ATProto", "Distributed Systems", "Conflict Resolution"],
  },
  {
    title: "RAG-Powered Institutional Knowledge Assistant",
    description: "RAG system over NYU IT documentation using pgvector and Flask, combining dense vector similarity with keyword BM25 filtering for high-relevance answers.",
    tags: ["RAG", "pgvector", "Flask", "BM25"],
  },
  {
    title: "MTA NYC Bus Transit Time Prediction",
    description: "Real-time predictive pipeline ingesting REST APIs into a PostgreSQL feature store, training spatially partitioned XGBoost models per NYC grid zone.",
    tags: ["XGBoost", "PostgreSQL", "Real-Time Pipelines"],
  },
  {
    title: "GPU-Accelerated K-mer Counter",
    description: "High-throughput single-GPU k-mer counting pipeline achieving a 2.1x memory throughput improvement through systematic profiling via Nsight Compute.",
    tags: ["CUDA", "C++", "GPU Computing"],
  },
  {
    title: "Multicore Hash Table Concurrency",
    description: "Designed S2Hash, a hybrid locking strategy reducing lock overhead by 128x while retaining 95% throughput, validated on a 64-core AMD EPYC cluster.",
    tags: ["C++", "OpenMP", "Concurrency"],
  },
];

window.coreSkillsData = [
  "Python", "Java", "TypeScript", "AWS", "Distributed Systems", "LLM Reliability",
];

window.skillsData = [
  { group: "Languages", items: ["Python", "Java", "TypeScript", "JavaScript", "C++", "SQL", "Scala", "Bash"] },
  { group: "Frameworks", items: ["React", "Flask", "Node.js", "Spring Boot", "REST APIs", "CUDA", "OpenMP"] },
  { group: "Cloud / Infra", items: ["AWS (Lambda, ECS, SQS, SNS, EventBridge, DynamoDB, API Gateway, Athena, CDK)", "Terraform", "Kubernetes", "Kafka", "PostgreSQL", "Snowflake", "Docker", "Redis", "Celery"] },
  { group: "AI / Agentic", items: ["Model Context Protocol (MCP)", "LangGraph", "LangChain", "Claude API", "OpenAI API", "RAG", "pgvector", "Multi-Agent Systems", "LLM Orchestration"] },
  { group: "Architecture", items: ["Event-Driven Architecture", "Saga Pattern", "Outbox Pattern", "Circuit Breaker", "Microservices"] },
];

// Narrative-first structure: chapters are the primary axis, system-type subsections
// nest within. Subsections render as cards (title + snippet); clicking a card opens
// a modal with the full content.
window.chaptersData = {
  "how-i-think": {
    title: "How I Think",
    intro: "My engineering philosophy centers on hands-on problem-solving, systems thinking at scale, and learning through building. I thrive at the intersection of ambiguity and technical depth—whether that's tracing a production bug nobody else could pin down, standing up infrastructure from scratch, or picking up a new stack because the problem demanded it. Here's what drives my approach.",
    subsections: [
      {
        title: "Hands-On in Ambiguity",
        snippet: "I thrive when systems are unfamiliar and slightly on fire.",
        content: "I thrive when a system is unfamiliar and slightly on fire. Tracing a bug that's been hanging for weeks, standing up infrastructure that didn't exist, picking up a new language or framework because the problem demanded it—that's where I do my best work.\n\nAt Amazon, I traced a recurring SEV2 affecting 200+ stuck order workflows back to Stripe not confirming refund failures for certain payment methods—only successes. This left ordering-level workflows retrying indefinitely until they errored out. No existing playbook existed for this exact failure mode; I shipped workflow-level terminal-state handling across Ordering and Payments despite the org's strict change-approval bar for shared payment workflows.\n\nAt AdsgencyAI, a production incident had hung ad generations indefinitely. I re-architected the entire generation pipeline from synchronous to queue-first (Celery), adding retry-with-backoff, idempotency guards, and failure-mode handling. The shift took the system from broken to processing ~200 jobs daily reliably.\n\nThis comfort with ambiguity and unfamiliar domains isn't a personality quirk—it's foundational to how I approach problems. The outcome is an ability to ship under uncertainty and learn fast when frameworks don't exist yet.",
      },
      {
        title: "Systems Thinking at Scale",
        snippet: "Thinking in dependencies, failure modes, and architectural constraints.",
        content: "Three years at Amazon processing $50M/month in transactions taught me to think in dependencies, failure modes, and architectural constraints. I don't ship features in isolation; I think about cross-service impact, graceful degradation, what happens when the system catches fire, and what the operational load looks like at 3am on a Sunday.\n\nWhen I owned the seller disbursement payment method for Amazon marketplace, the system scaled to 1M+ active users processing $50M/month with zero availability incidents. That didn't happen by accident. It happened because every design decision was filtered through: What breaks? How do we fail gracefully? What can we observe? How does this scale if traffic doubles overnight?\n\nThat discipline carries into everything I build now. At NYU IT, designing internal platforms meant thinking about how stakeholders would debug issues, how the system would behave under unexpected load, and how to isolate failures so one broken data source didn't cascade across the whole platform.\n\nSystems thinking at scale is the difference between 'this works in a demo' and 'this will still work when your customers are in 15 time zones.' It's the skill that translates across domains—payments, ad tech, AI orchestration, distributed databases, anything.",
      },
      {
        title: "Build, Learn, Repeat",
        snippet: "Learning fastest through hands-on iteration, not spec documents.",
        content: "I learn fastest by building. Whether it's LLM reliability infrastructure, distributed conflict-resolution protocols, or GPU-accelerated pipelines, hands-on iteration beats spec documents.\n\nConsider the MCP servers I built at NYU. There was no formal project brief. I saw a problem—AI agents couldn't autonomously triage our GitHub issues or run Workspace analytics—and I owned it end-to-end. I built custom Model Context Protocol servers, integrated them with Claude, and saved the team ~40 engineering hours weekly. Nobody asked me to. I saw the gap and filled it because building taught me what was possible.\n\nOr the GPU work: I profiled a k-mer counter using Nsight Compute, found memory-throughput bottlenecks in the access pattern, and shipped a 2.1× speedup. Profiling isn't something you understand from a paper; you understand it by running the tool, reading the metrics, forming hypotheses, and iterating.\n\nThis preference for hands-on learning also means I'm comfortable with tools, languages, and domains I've never seen before. The learning curve is shorter because I'm not waiting for certainty—I'm building toward it. The outcome is a comfort with ambiguity and unfamiliar domains that becomes a strength on hard problems.",
      },
    ],
  },
  "what-i-built": {
    title: "What I've Built",
    intro: "A map of systems I've shipped, organized by problem domain. Each system represents a depth of ownership and a specific kind of challenge solved.",
    subsections: [
      {
        title: "Payments & Event-Driven Scale",
        snippet: "Event-driven Prime auto-refund service scaling to 1M+ users.",
        content: "Amazon Payments (SDE I → SDE II, Jul 2021 – Jul 2024). Designed and shipped an event-driven Prime auto-refund service from scratch (API Gateway, ECS, Lambda, SNS/SQS, DynamoDB), scaling to 1M+ active users and $50M/month transaction volume with zero availability incidents. Mapped cross-service dependencies for 40+ teams, compressing the Belgium launch from 8 months to 2 months and enabling a 2-engineer team to deliver Ireland in 2 weeks.",
        projects: [
          { title: "Prime Auto-Refund Service", tags: ["Java", "Event-Driven", "AWS", "DynamoDB", "Lambda"] },
          { title: "Seller Disbursement Payment Method", tags: ["AWS CDK", "Athena", "Payments", "1M+ users"] },
        ],
      },
      {
        title: "LLM Reliability & Agentic Systems",
        snippet: "Production-grade infrastructure for AI agents and language models.",
        content: "Recent work building production-grade infrastructure for AI agents and language models. At AdsgencyAI, engineered LLM reliability infrastructure (Redis-backed concurrency semaphores, circuit breaker, jittered exponential backoff) protecting multi-agent workflows. At NYU, designed and built Model Context Protocol servers for GitHub and Google Workspace, enabling AI agents to autonomously triage issues and saving ~40 engineering hours weekly.",
        projects: [
          { title: "LLM Reliability Infrastructure", tags: ["Redis", "Circuit Breaker", "Concurrency Control", "Production"] },
          { title: "Model Context Protocol Servers", tags: ["MCP", "Claude API", "Autonomous Agents"] },
        ],
      },
      {
        title: "Distributed Systems & Concurrency",
        snippet: "Concurrency, distributed protocols, and low-level optimization work.",
        content: "Foundational systems work exploring concurrency, distributed protocols, and low-level optimization. Designed S2Hash — a hybrid locking strategy reducing lock overhead by 128x while retaining 95% throughput on a 64-core AMD EPYC cluster. Built a GPU-accelerated k-mer counter achieving a 2.1x memory throughput improvement through Nsight Compute profiling. Implemented a distributed collaborative whiteboard using ATProto with conflict-resolution strategies (CAS vs. vector clocks).",
        projects: [
          { title: "Multicore Hash Table (S2Hash)", tags: ["C++", "OpenMP", "Lock-Free", "128x improvement"] },
          { title: "GPU-Accelerated K-mer Counter", tags: ["CUDA", "C++", "Profiling", "2.1x speedup"] },
          { title: "Distributed Collaborative Whiteboard", tags: ["ATProto", "Distributed", "Conflict Resolution"] },
        ],
      },
      {
        title: "Data Pipelines & ML",
        snippet: "Real-time pipelines and machine learning systems end-to-end.",
        content: "Real-time pipelines and machine learning systems built end-to-end. RAG-powered knowledge assistant combining pgvector similarity search with BM25 keyword filtering. Transit time prediction system ingesting REST APIs into a PostgreSQL feature store, training spatially partitioned XGBoost models per NYC grid zone.",
        projects: [
          { title: "RAG Knowledge Assistant", tags: ["pgvector", "Flask", "BM25", "Dense + Keyword"] },
          { title: "Transit Time Prediction", tags: ["XGBoost", "PostgreSQL", "Real-Time", "Spatial"] },
        ],
      },
    ],
  },
  "whats-next": {
    title: "What's Next",
    intro: "Current focus areas and how to connect.",
    subsections: [
      {
        title: "LLM Reliability in Production",
        snippet: "Making models reliable, composable, and safe at scale.",
        content: "The frontier isn't just training better models — it's making them reliable, composable, and safe at scale. Building systems that orchestrate multi-agent workflows, handle failures gracefully, and integrate seamlessly into existing infrastructure. This combines systems thinking from distributed work with the emergent possibilities of AI.",
      },
      {
        title: "Core Strengths",
        snippet: "Distributed systems, event-driven architecture, AWS, and agentic AI.",
        content: "Distributed systems, event-driven architecture, AWS infrastructure, LLM reliability, and agentic AI are where I operate best. But the thread running through all of it is comfort with complexity and the ability to ship under ambiguity.",
        skillsPreview: true,
      },
      {
        title: "Education",
        snippet: "M.S. from NYU Courant Institute, B.Tech. from NIT Karnataka.",
        content: "<strong>M.S. Computer Science</strong> — New York University, Courant Institute of Mathematical Sciences (Aug 2024 – May 2026)<br>Relevant coursework: Distributed Systems, Machine Learning, GPUs, Advanced Database Systems<br><br><strong>B.Tech. Computer Science &amp; Engineering</strong> — National Institute of Technology Karnataka (Jul 2017 – May 2021)",
      },
      {
        title: "Get in Touch",
        snippet: "Always happy to talk shop or hear interesting problems.",
        content: "I'm always happy to talk shop or hear about interesting problems.",
        contact: true,
      },
    ],
  },
};
