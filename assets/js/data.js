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

window.skillsData = [
  { group: "Languages", items: ["Python", "Java", "TypeScript", "JavaScript", "C++", "SQL", "Scala", "Bash"] },
  { group: "Frameworks", items: ["React", "Flask", "Node.js", "Spring Boot", "REST APIs", "CUDA", "OpenMP"] },
  { group: "Cloud / Infra", items: ["AWS (Lambda, ECS, SQS, SNS, EventBridge, DynamoDB, API Gateway, Athena, CDK)", "Terraform", "Kubernetes", "Kafka", "PostgreSQL", "Snowflake", "Docker", "Redis", "Celery"] },
  { group: "AI / Agentic", items: ["Model Context Protocol (MCP)", "LangGraph", "LangChain", "Claude API", "OpenAI API", "RAG", "pgvector", "Multi-Agent Systems", "LLM Orchestration"] },
  { group: "Architecture", items: ["Event-Driven Architecture", "Saga Pattern", "Outbox Pattern", "Circuit Breaker", "Microservices"] },
];
