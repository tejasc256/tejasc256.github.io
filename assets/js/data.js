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
    intro: "A map of systems I've shipped, organized by problem domain and technical capability. Each system represents ownership, depth, and a specific kind of challenge solved. Together, they show breadth across payments, AI/agentic systems, distributed architecture, and low-level optimization.",
    subsections: [
      {
        title: "LLM Reliability & Agentic Systems",
        snippet: "Production-grade infrastructure for AI agents and language models.",
        content: "The frontier of production AI isn't just training better models—it's making them reliable, composable, and safe at scale. I've spent the last year building infrastructure that does exactly that.\n\n<strong>At AdsgencyAI (Jun 2026):</strong>\nEngineered production LLM reliability infrastructure — Redis-backed concurrency semaphores, jittered exponential backoff, and a circuit breaker across the model gateway — for a competitor-ad discovery platform serving 500+ users, taking it from 15–20 minute worst-case waits to ~200 reliable AI-generation jobs a day.\n\n<strong>At NYU IT (May 2025 – May 2026):</strong>\nProposed and independently built custom Model Context Protocol (MCP) servers for GitHub and Google Workspace—not an assigned project. These servers enable AI agents to autonomously triage and resolve internal repository issues, saving ~40 engineering hours weekly.\n\nDeployed a Snowflake MCP integration allowing non-technical university stakeholders to run natural-language analytical queries against institutional data, reducing analyst bottlenecks. Extended the workflow with a RAG layer using pgvector and the Claude API; built a streaming LLM response interface in React using Server-Sent Events (SSE).",
        projects: [
          { title: "LLM Reliability Infrastructure", tags: ["Redis", "Circuit Breaker", "Concurrency Control", "Production"] },
          { title: "Model Context Protocol Servers", tags: ["MCP", "Claude API", "Autonomous Agents"] },
          { title: "Celery Priority Queue System", tags: ["Celery", "Job Processing", "~200 jobs/day"] },
        ],
      },
      {
        title: "Payments & Distributed-Scale Systems",
        snippet: "Event-driven systems processing $50M/month, owned end-to-end.",
        content: "Three years at Amazon Payments (SDE I → SDE II, Jul 2021 – Jul 2024) taught me how to build and operate systems that process billions of dollars while remaining invisible to customers. The systems I owned processed $50M/month in transaction volume with zero availability incidents.\n\n<strong>SDE II (Oct 2023 – Jul 2024):</strong>\nClosed out a recurring SEV2 affecting 200+ stuck order workflows after weeks of investigation by prior engineers. The root cause: Stripe only confirms successful refund transactions—not failures. This left ordering-level workflows retrying indefinitely until they errored out. I shipped workflow-level terminal-state handling across Ordering and Payments Platform despite Amazon's strict cross-service change-approval bar for shared payment workflows.\n\nShipped an event-driven Prime auto-refund service from scratch (API Gateway, ECS, Lambda, SNS/SQS, DynamoDB), recovering ~$500K+ in annual customer value and eliminating 30,000+ annual customer contacts. Designed the service for extensibility from the start, enabling deployment across multiple international marketplaces with minimal additional engineering.\n\nSpearheaded the payments-domain integration for an org-wide centralized config store, standardizing legacy hardcoded parameters into a single scalable schema. Negotiated adoption roadmaps with owners of 40+ downstream services, applying system-design leadership across the payments org.\n\nConducted 200+ peer code reviews and led design reviews introducing event-driven architecture patterns (Saga, Outbox, event sourcing), establishing new engineering standards across the payments organization.\n\nServed as payments workstream lead for the Amazon Ireland launch, applying a proactive playbook to deliver the first production charge and refund within days of kickoff. Coordinated the 40+ service migration across payments, retail, checkout, disbursements, and subscriptions, aligning TPMs, PMs, and service owners with differing views of scope.\n\nDiagnosed and resolved a payment transaction race condition where simultaneous updates from a partner service and Amazon's internal payments system had no clear synchronization. Whichever write landed second silently overwrote the other, leaving transactions stuck indefinitely. With no existing locking pattern on the team to reference, I designed a locking mechanism from scratch to serialize the concurrent updates safely.\n\n<strong>SDE I (Jul 2021 – Sep 2023):</strong>\nAccelerated marketplace payments launches globally by mapping cross-service dependencies for 40+ away-teams into a standardized integration playbook. This framework slashed the Belgium launch from 8 months to 2 months, scaled to MENA/LATAM/APAC teams, and enabled a 2-engineer team to deliver the Ireland launch in just 2 weeks. (Parallelized Belgium execution across 5–6 engineers; managed the workstream in a 12-hour launch war room.)\n\nImplemented the seller disbursement payment method end-to-end using AWS CDK: a system that scaled to 1M+ active users processing ~$50M/month in transaction volume with zero availability incidents. Built deep expertise across 10+ European payment flows including SCA/3DS authentication, local payment methods, refunds, and disputes.\n\nDesigned a dual-pipeline PII data leak detection service covering 20+ Tier-1 services using AWS Athena and AWS Batch, surfacing and remediating real data leakage in legacy codebases. Mentored 2 interns through full delivery of the PII auditing tool from architecture design to onboarding high-traffic services.",
        projects: [
          { title: "Prime Auto-Refund Service", tags: ["Java", "Event-Driven", "AWS", "Lambda", "SNS/SQS"] },
          { title: "Seller Disbursement Payment Method", tags: ["AWS CDK", "1M+ users", "$50M/month", "Payments"] },
          { title: "Centralized Config Store Integration", tags: ["40+ services", "System Design"] },
        ],
      },
      {
        title: "Platform & Full-Stack Infrastructure",
        snippet: "End-to-end ownership of internal platforms and cross-functional systems.",
        content: "I own systems from backend API design through frontend implementation, with a focus on building platforms that scale gracefully and integrate seamlessly with existing infrastructure.\n\n<strong>At NYU Information Technology (May 2025 – May 2026):</strong>\nOwned end-to-end development of internal university platforms, building a Flask REST API handling hundreds of daily requests and the corresponding React/TypeScript frontend. These systems serve university stakeholders—researchers, administrators, IT staff—with varying technical sophistication, so robustness and clarity matter.\n\nImplemented WCAG accessibility compliance across the React UI (verified with Axe DevTools) and introduced client-side fuzzy search using Fuse.js, making internal platforms more usable for non-technical users.\n\n<strong>Design & Architecture Patterns:</strong>\n- REST API design with Flask (routing, request validation, error handling)\n- React/TypeScript frontend with modern patterns (hooks, state management)\n- Integration with cloud platforms (Snowflake, Google Workspace)\n- Accessibility-first UI design (WCAG compliance)\n- Server-Sent Events (SSE) for streaming LLM responses",
        projects: [
          { title: "NYU IT Platform", tags: ["Flask", "React", "TypeScript", "REST API"] },
          { title: "Snowflake MCP Integration", tags: ["Natural-language queries", "pgvector", "RAG"] },
          { title: "Accessibility & Search", tags: ["WCAG", "Fuse.js", "Axe DevTools"] },
        ],
      },
      {
        title: "Low-Level Optimization & Concurrency",
        snippet: "Systems-level work: GPU acceleration, lock-free algorithms, distributed protocols.",
        content: "Some of my most satisfying work happens at the systems level: profiling bottlenecks, designing novel concurrency patterns, and optimizing for throughput or latency when the straightforward approach isn't enough.\n\n<strong>GPU-Accelerated K-mer Counter (CUDA/C++):</strong>\nEngineered a high-throughput single-GPU k-mer counting pipeline achieving a 2.1× memory throughput improvement. The work involved systematic profiling via Nsight Compute, identifying memory-access patterns that were underutilizing the GPU's memory bandwidth, and redesigning the kernel to stream data more efficiently. Performance profiling at this level is detective work—forming hypotheses about where the bottleneck lives, validating them with profiling tools, iterating on the design.\n\n<strong>Multicore Hash Table Concurrency (C++/OpenMP):</strong>\nDesigned S2Hash, a hybrid locking strategy that reduces lock overhead by 128× while retaining 95% throughput. Validated the approach on a 64-core AMD EPYC cluster, iterating on the synchronization strategy to minimize contention. Lock-free and lock-based concurrency trade throughput, latency, and implementation complexity in ways that only become clear through experimentation.\n\n<strong>Distributed Collaborative Whiteboard (ATProto/Distributed Systems):</strong>\nBuilt a decentralized collaborative whiteboard using Bluesky DID authentication and implemented concurrent conflict-resolution strategies (atomic CAS vs. vector clocks). The work explores how different consistency models and conflict-resolution strategies behave at scale. It's the kind of foundational systems work that feels academic but has real implications for any distributed system that needs agreement without centralized coordination.",
        projects: [
          { title: "Multicore Hash Table (S2Hash)", tags: ["C++", "OpenMP", "128× improvement", "Lock-Free"] },
          { title: "GPU-Accelerated K-mer Counter", tags: ["CUDA", "C++", "2.1× speedup", "Profiling"] },
          { title: "Distributed Collaborative Whiteboard", tags: ["ATProto", "Distributed Systems", "Conflict Resolution"] },
        ],
      },
      {
        title: "Data Pipelines & Machine Learning",
        snippet: "Real-time pipelines, feature engineering, and end-to-end ML systems.",
        content: "Building data systems requires different thinking: you're optimizing for accuracy, freshness, and operational stability simultaneously.\n\n<strong>MTA NYC Bus Transit Time Prediction:</strong>\nBuilt a real-time predictive pipeline ingesting REST APIs into a PostgreSQL feature store, training spatially partitioned XGBoost models per NYC grid zone. The work involves data pipeline design (ingestion, transformation, storage), feature engineering (spatial partitioning, temporal features), model training, and serving. Real-time prediction pipelines add constraints: you need low-latency predictions, reliable ingestion, and a feature store that can handle high-throughput reads.",
        projects: [
          { title: "MTA Transit Time Prediction", tags: ["XGBoost", "PostgreSQL", "Real-Time", "Spatial"] },
        ],
      },
    ],
  },
  "whats-next": {
    title: "What's Next",
    intro: "Where I'm heading professionally, what excites me about the next phase of my career, and how to stay in touch. I'm interested in roles that combine systems thinking, architectural depth, and emerging-technology adoption—especially in AI infrastructure and agentic systems at scale.",
    subsections: [
      {
        title: "The Frontier of LLM Reliability",
        snippet: "Models are good enough. Making them reliable in production is the hard part.",
        content: "Models are good enough now. What's still broken is production reliability — they hallucinate, they rate-limit, they fail silently, and they don't integrate cleanly into existing systems.\n\nThat's what I want to keep building: circuit breakers, retries, and graceful degradation borrowed from distributed systems; agents that decompose a problem and route it across models and APIs without falling over; and enough logging and tracing to actually audit what a model did and why.\n\nI've built pieces of this already at AdsgencyAI and NYU. I want to go deeper.",
      },
      {
        title: "Breadth, Not Narrow Specialization",
        snippet: "Distributed systems + LLM infrastructure + intentional breadth.",
        content: "I've deliberately stayed broad instead of specializing into one lane — payments, platform work, LLM infrastructure, low-level systems optimization. Hard problems tend to span domains, and the best architectural calls come from having seen more than one of them.\n\nWhere I have real depth: event-driven architecture and microservices (Amazon, $50M/month in transactions), distributed systems, AWS infrastructure, LLM reliability and agentic workflows, full-stack platform work, and systems-level optimization.\n\nThe common thread is comfort with complexity and shipping under ambiguity.",
        skillsPreview: true,
      },
      {
        title: "Learning & Growth",
        snippet: "On-going development areas and what's next technically.",
        content: "Three things I'm deliberately investing in right now:\n\n<strong>Multi-agent orchestration</strong> — going past single-agent systems to ones where multiple agents collaborate and fail gracefully.\n\n<strong>LLM observability</strong> — better tooling to audit what a model actually did, and catch it when it's wrong.\n\n<strong>Rust</strong> — I know C++ well; I want production-grade Rust for systems work where correctness matters.\n\nSame approach as always: build it, ship it, learn from what breaks.",
      },
      {
        title: "Get in Touch",
        snippet: "Always happy to talk shop or hear interesting problems.",
        content: "Happy to talk about production LLM infrastructure, distributed systems and payments, incident response, or just a good technical problem. Reach out — full-time, consulting, or just a conversation.",
        contact: true,
      },
      {
        title: "Education & Credentials",
        snippet: "M.S. from NYU Courant Institute (3.9 GPA), B.Tech. from NIT Karnataka.",
        content: "<strong>M.S. Computer Science</strong> — New York University, Courant Institute of Mathematical Sciences (Aug 2024 – May 2026, GPA: 3.9)\nCoursework: Distributed Systems, Machine Learning, GPUs, Advanced Database Systems, Big Data Application Development, Operating Systems, Data Communication and Networking, Fundamental Algorithms\n\n<strong>B.Tech. Computer Science &amp; Engineering</strong> — National Institute of Technology Karnataka (Jul 2017 – May 2021)",
      },
    ],
  },
};
