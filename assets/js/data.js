window.experienceData = [
  {
    date: "Jun 2026 – Jun 2026",
    title: "AdsgencyAI",
    role: "Software Engineer",
    bullets: [
      "Delivered a flagship competitor-ad discovery platform for 500+ users, engineering the frontend masonry UI, backend Meta/TikTok REST APIs, and an LLM-based classification engine.",
      "Built production LLM reliability infrastructure — Redis-backed concurrency semaphores, jittered exponential backoff, and a circuit breaker across the model gateway.",
    ],
    tags: ["LLM Reliability", "Celery", "Redis", "MCP", "SSRF Hardening"],
  },
  {
    date: "May 2025 – May 2026",
    title: "NYU Information Technology",
    role: "Software Engineer",
    bullets: [
      "Proposed and independently built custom Model Context Protocol (MCP) servers for GitHub and Google Workspace, enabling AI agents to autonomously triage internal repository issues and saving ~40 engineering hours weekly.",
      "Owned end-to-end development of internal university platforms, building a Flask REST API and the corresponding React/TypeScript frontend.",
    ],
    tags: ["MCP", "Snowflake", "Flask", "React", "TypeScript"],
  },
  {
    date: "Oct 2023 – Jul 2024",
    title: "Amazon",
    role: "Software Development Engineer II",
    bullets: [
      "Closed out a recurring SEV2 of 200+ stuck order workflows by tracing the root cause to unconfirmed Stripe refund failures, shipping workflow-level terminal-state handling across Ordering and Payments Platform.",
      "Shipped an event-driven Prime auto-refund service from scratch (API Gateway, ECS, Lambda, SNS/SQS, DynamoDB), recovering $500K+ in annual customer value.",
    ],
    tags: ["Java", "Event-Driven Architecture", "AWS", "DynamoDB"],
  },
  {
    date: "Jul 2021 – Sep 2023",
    title: "Amazon",
    role: "Software Development Engineer I",
    bullets: [
      "Mapped cross-service dependencies for 40+ away-teams into a standardized integration playbook, slashing the Belgium launch from 8 months to 2 months and enabling a 2-engineer team to deliver Ireland in 2 weeks.",
      "Implemented a seller disbursement payment method end-to-end using AWS CDK; scaled to 1M+ active users processing ~$50M/month in transaction volume with zero availability incidents.",
    ],
    tags: ["Java", "AWS CDK", "Athena", "Payments"],
  },
];

window.projectsData = [
  {
    title: "Distributed Collaborative Whiteboard (ATProto)",
    description: "Decentralized collaborative whiteboard using Bluesky DID authentication, implementing concurrent conflict-resolution strategies (atomic CAS vs. vector clocks).",
    tags: ["ATProto", "Distributed Systems", "Conflict Resolution"],
  },
  {
    title: "Agentic Code Review System",
    description: "Multi-agent system using LangChain, pgvector, and the Claude API where a planner decomposes issues and a coder generates PRs via RAG-based similarity search.",
    tags: ["LangChain", "pgvector", "Claude API", "RAG"],
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
  "Python", "Java", "TypeScript", "AWS", "Distributed Systems", "LLM / Agentic AI",
];

window.skillsData = [
  { group: "Languages", items: ["Python", "Java", "TypeScript", "JavaScript", "C++", "SQL", "Scala", "Bash"] },
  { group: "Frameworks", items: ["React", "Flask", "Node.js", "Spring Boot", "REST APIs", "CUDA", "OpenMP"] },
  { group: "Cloud / Infra", items: ["AWS (Lambda, ECS, SQS, SNS, EventBridge, DynamoDB, API Gateway, Athena, CDK)", "Terraform", "Kubernetes", "Kafka", "PostgreSQL", "Snowflake", "Docker", "Redis", "Celery"] },
  { group: "AI / Agentic", items: ["Model Context Protocol (MCP)", "LangGraph", "LangChain", "Claude API", "OpenAI API", "RAG", "pgvector", "Multi-Agent Systems", "LLM Orchestration"] },
  { group: "Architecture", items: ["Event-Driven Architecture", "Saga Pattern", "Outbox Pattern", "Circuit Breaker", "Microservices"] },
];

// Narrative-first structure: chapters are the primary axis, system-type subsections nest within.
window.chaptersData = {
  "how-i-think": {
    title: "How I Think",
    intro: "My engineering philosophy centers on hands-on problem solving, systems thinking at scale, and learning through building. Here's what drives my approach.",
    subsections: [
      {
        title: "Hands-On in Ambiguity",
        content: "I thrive when a system is unfamiliar and slightly on fire. Tracing a bug nobody else could pin down, standing up infrastructure that didn't exist, or picking up a new stack because the problem demanded it — that's where I do my best work. This approach has proven itself across event-driven payments systems, LLM infrastructure, and distributed algorithm design.",
      },
      {
        title: "Systems Thinking at Scale",
        content: "Three years at Amazon processing $50M/month in transactions taught me to think in dependencies, failure modes, and architectural constraints. I don't ship features in isolation; I think about cross-service impact, graceful degradation, and what happens when the system catches fire. That discipline carries forward into everything I build.",
      },
      {
        title: "Build, Learn, Repeat",
        content: "I learn fastest by building. Whether it's LLM reliability infrastructure, distributed conflict resolution, or GPU-accelerated pipelines, hands-on iteration beats spec documents. I'd rather figure it out than wait for a fully-specified brief. The outcome is a comfort with ambiguity and unfamiliar domains that becomes a strength on hard problems.",
      },
    ],
  },
  "what-i-built": {
    title: "What I've Built",
    intro: "A map of systems I've shipped, organized by problem domain. Each system represents a depth of ownership and a specific kind of challenge solved.",
    subsections: [
      {
        title: "Payments & Event-Driven Scale",
        content: "Amazon Payments (SDE I → SDE II, Jul 2021 – Jul 2024). Designed and shipped an event-driven Prime auto-refund service from scratch (API Gateway, ECS, Lambda, SNS/SQS, DynamoDB), scaling to 1M+ active users and $50M/month transaction volume with zero availability incidents. Mapped cross-service dependencies for 40+ teams, compressing the Belgium launch from 8 months to 2 months and enabling a 2-engineer team to deliver Ireland in 2 weeks.",
        projects: [
          { title: "Prime Auto-Refund Service", tags: ["Java", "Event-Driven", "AWS", "DynamoDB", "Lambda"] },
          { title: "Seller Disbursement Payment Method", tags: ["AWS CDK", "Athena", "Payments", "1M+ users"] },
        ],
      },
      {
        title: "LLM Reliability & Agentic Systems",
        content: "Recent work building production-grade infrastructure for AI agents and language models. At AdsgencyAI, engineered LLM reliability infrastructure (Redis-backed concurrency semaphores, circuit breaker, jittered exponential backoff) protecting multi-agent workflows. At NYU, designed and built Model Context Protocol servers for GitHub and Google Workspace, enabling AI agents to autonomously triage issues and saving ~40 engineering hours weekly.",
        projects: [
          { title: "LLM Reliability Infrastructure", tags: ["Redis", "Circuit Breaker", "Concurrency Control", "Production"] },
          { title: "Model Context Protocol Servers", tags: ["MCP", "Claude API", "Autonomous Agents"] },
          { title: "Agentic Code Review System", tags: ["LangChain", "pgvector", "Multi-Agent", "RAG"] },
        ],
      },
      {
        title: "Distributed Systems & Concurrency",
        content: "Foundational systems work exploring concurrency, distributed protocols, and low-level optimization. Designed S2Hash — a hybrid locking strategy reducing lock overhead by 128x while retaining 95% throughput on a 64-core AMD EPYC cluster. Built a GPU-accelerated k-mer counter achieving a 2.1x memory throughput improvement through Nsight Compute profiling. Implemented a distributed collaborative whiteboard using ATProto with conflict-resolution strategies (CAS vs. vector clocks).",
        projects: [
          { title: "Multicore Hash Table (S2Hash)", tags: ["C++", "OpenMP", "Lock-Free", "128x improvement"] },
          { title: "GPU-Accelerated K-mer Counter", tags: ["CUDA", "C++", "Profiling", "2.1x speedup"] },
          { title: "Distributed Collaborative Whiteboard", tags: ["ATProto", "Distributed", "Conflict Resolution"] },
        ],
      },
      {
        title: "Data Pipelines & ML",
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
        content: "The frontier isn't just training better models — it's making them reliable, composable, and safe at scale. Building systems that orchestrate multi-agent workflows, handle failures gracefully, and integrate seamlessly into existing infrastructure. This combines systems thinking from distributed work with the emergent possibilities of AI.",
      },
      {
        title: "Core Strengths",
        content: "Distributed systems, event-driven architecture, AWS infrastructure, LLM reliability, and agentic AI are where I operate best. But the thread running through all of it is comfort with complexity and the ability to ship under ambiguity.",
        skillsPreview: true,
      },
      {
        title: "Education",
        content: "<strong>M.S. Computer Science</strong> — New York University, Courant Institute of Mathematical Sciences (Aug 2024 – May 2026)<br>Relevant coursework: Distributed Systems, Machine Learning, GPUs, Advanced Database Systems<br><br><strong>B.Tech. Computer Science &amp; Engineering</strong> — National Institute of Technology Karnataka (Jul 2017 – May 2021)",
      },
      {
        title: "Get in Touch",
        content: "I'm always happy to talk shop or hear about interesting problems.",
        contact: true,
      },
    ],
  },
};
