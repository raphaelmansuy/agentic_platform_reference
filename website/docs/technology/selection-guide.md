---
sidebar_position: 8
title: Technology Selection Guide
description: How to choose technologies based on needs, cloud strategy, team capabilities, and maturity requirements.
keywords: [technology selection, build vs buy, cloud strategy, team capabilities]
---

# Technology Selection Guide

Choosing the right technologies for an agentic platform requires balancing multiple factors: organizational strategy, team capabilities, maturity requirements, and specific use case needs.

---

## Build vs. Buy vs. Compose

The fundamental strategic question is how much to build in-house versus purchasing or composing existing solutions.

```
┌─────────────────────────────────────────────────────────────────┐
│              BUILD vs. BUY vs. COMPOSE                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  BUILD                                                          │
│  ─────                                                          │
│  ✓ Maximum flexibility                                          │
│  ✓ Full control over features and roadmap                       │
│  ✓ No vendor lock-in                                            │
│  ✗ Highest investment (time, team, cost)                        │
│  ✗ Maintenance burden                                           │
│  ✗ Slower time-to-market                                        │
│                                                                 │
│  BUY                                                            │
│  ───                                                            │
│  ✓ Fastest time-to-value                                        │
│  ✓ Vendor handles maintenance and updates                       │
│  ✓ Often includes support and SLAs                              │
│  ✗ Vendor lock-in risk                                          │
│  ✗ Feature constraints                                          │
│  ✗ Ongoing licensing costs                                      │
│                                                                 │
│  COMPOSE                                                        │
│  ───────                                                        │
│  ✓ Balance of flexibility and speed                             │
│  ✓ Best-of-breed components                                     │
│  ✓ Partial vendor independence                                  │
│  ✗ Integration complexity                                       │
│  ✗ Multiple vendor relationships                                │
│  ✗ Potential compatibility issues                               │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Recommendations by Organization Type

| Organization Type | Recommended Approach |
| --- | --- |
| **Startups** | Buy/Compose — Focus on core product, not infrastructure |
| **Mid-size Enterprise** | Compose — Balance flexibility with speed |
| **Large Enterprise** | Compose/Build — Custom needs often require custom solutions |
| **Hyperscale Tech** | Build — Have resources and need for full control |
| **Regulated Industries** | Compose/Build — Compliance often requires control |

---

## Cloud Strategy Alignment

Your cloud strategy significantly influences technology choices.

### Single-Cloud Strategy

**Use native services for maximum integration:**

| Cloud | Recommended Stack |
| --- | --- |
| **AWS** | Bedrock Agents + Step Functions + Knowledge Bases + Guardrails |
| **Google Cloud** | Agent Builder + ADK + Vertex AI Search + Cloud Workflows |
| **Azure** | AI Agent Service + Semantic Kernel + Durable Functions + AI Search |

**Advantages:**
- Tight service integration
- Single billing relationship
- Unified security model
- Vendor support alignment

### Multi-Cloud Strategy

**Use portable frameworks with cloud-agnostic data:**

| Component | Recommended |
| --- | --- |
| **Framework** | LangChain/LangGraph, LlamaIndex |
| **Orchestration** | Temporal (self-hosted) |
| **Vector DB** | Weaviate, Qdrant, Milvus (self-hosted) |
| **Observability** | OpenTelemetry + Langfuse |
| **Model Access** | Abstract via framework, use multiple providers |

**Advantages:**
- Avoid vendor lock-in
- Leverage best services from each cloud
- Negotiate better pricing
- Resilience through diversity

### Hybrid Strategy

**Combine cloud agent services with on-premises governance:**

| Layer | Location |
| --- | --- |
| **Agent Runtime** | Cloud (managed) |
| **Models** | Cloud (API) or on-prem (sensitive) |
| **Data** | On-prem (governed) with cloud cache |
| **Governance** | On-prem (control) |
| **Exposition** | Cloud (edge) |

**Common in:** Financial services, healthcare, government

---

## Maturity & Risk Tolerance

Different projects require different maturity levels.

### Production-Critical Systems

**Prioritize stability and support:**

| Component | Recommended |
| --- | --- |
| **Platform** | AWS Bedrock, Azure AI, Google Vertex (managed) |
| **Framework** | LangChain (mature), Semantic Kernel (Microsoft support) |
| **Orchestration** | Step Functions, Durable Functions (managed) |
| **Vector DB** | Pinecone (managed), pgvector (familiar) |
| **Observability** | Datadog, New Relic (enterprise support) |

### Innovation-Focused Projects

**Prioritize capability and velocity:**

| Component | Recommended |
| --- | --- |
| **Framework** | LangGraph (latest features), CrewAI (multi-agent) |
| **Vector DB** | Qdrant (performance), Weaviate (features) |
| **Observability** | Langfuse (open-source), Arize Phoenix |
| **Orchestration** | Temporal (flexibility) |

### Regulated Industries

**Prioritize compliance and audit:**

| Need | Recommended |
| --- | --- |
| **Governance** | Unity Catalog (Databricks), Azure Purview |
| **Audit** | Cloud-native audit logs, Immutable storage |
| **Guardrails** | NeMo Guardrails (programmable) |
| **Compliance** | Enterprise vendors with certifications |

---

## Team Capabilities

Match technologies to your team's skills.

### Python-Centric Teams

```
┌─────────────────────────────────────────────────────────────────┐
│  Python Stack                                                   │
├─────────────────────────────────────────────────────────────────┤
│  Framework:   LangChain, LlamaIndex, Google ADK                 │
│  Validation:  Pydantic AI, Instructor                           │
│  Testing:     Pytest, Promptfoo                                 │
│  Deployment:  FastAPI, Cloud Run, Lambda                        │
│  Notebooks:   Jupyter, Databricks                               │
└─────────────────────────────────────────────────────────────────┘
```

### .NET/Enterprise Teams

```
┌─────────────────────────────────────────────────────────────────┐
│  .NET Stack                                                     │
├─────────────────────────────────────────────────────────────────┤
│  Framework:   Semantic Kernel                                   │
│  Platform:    Azure AI Agent Service                            │
│  Low-code:    Copilot Studio                                    │
│  Orchestration: Durable Functions                               │
│  Deployment:  Azure Functions, AKS                              │
└─────────────────────────────────────────────────────────────────┘
```

### TypeScript/Full-Stack Teams

```
┌─────────────────────────────────────────────────────────────────┐
│  TypeScript Stack                                               │
├─────────────────────────────────────────────────────────────────┤
│  Framework:   LangChain.js, BeeAI, Mastra                       │
│  UI:          AG-UI, CopilotKit                                 │
│  API:         tRPC, Next.js API routes                          │
│  Deployment:  Vercel, Cloudflare Workers                        │
└─────────────────────────────────────────────────────────────────┘
```

### Platform Engineering Teams

```
┌─────────────────────────────────────────────────────────────────┐
│  Platform Engineering Stack                                     │
├─────────────────────────────────────────────────────────────────┤
│  Orchestration: Temporal, Kubernetes                            │
│  Custom:        Own agent runtime                               │
│  Observability: OpenTelemetry, Prometheus, Grafana              │
│  IaC:           Terraform, Pulumi                               │
│  GitOps:        ArgoCD, Flux                                    │
└─────────────────────────────────────────────────────────────────┘
```

---

## Decision Framework

Use this framework to guide technology selection:

### Step 1: Define Constraints

- Cloud strategy (single/multi/hybrid)
- Budget (build capacity vs. buy budget)
- Timeline (innovation vs. production deadline)
- Compliance requirements
- Team skills

### Step 2: Identify Priority Needs

Rank the eight needs for your use case:

| Use Case | Top Priorities |
| --- | --- |
| **Customer Service** | Agent Exposition, Integration, Governance |
| **Data Analysis** | Data Foundation, Intelligence, Developer Productivity |
| **Process Automation** | Operational Reliability, Security, Integration |
| **Research/Exploration** | Developer Productivity, Intelligence |

### Step 3: Map to Technologies

Use the technology mapping tables to select components for each priority need.

### Step 4: Validate Integration

Ensure selected components integrate well:
- Framework support for your chosen vector DB
- Observability tool support for your framework
- Cloud service compatibility

### Step 5: Plan Migration Path

Consider future needs:
- Can you switch vector DBs later?
- Can you add guardrails incrementally?
- Is there a path to multi-cloud if needed?

---

## Quick Reference

### Safest Bets (Production)

| Component | Technology |
| --- | --- |
| **Framework** | LangChain/LangGraph |
| **Vector DB** | Pinecone, pgvector |
| **Orchestration** | Cloud-native (Step Functions, Durable Functions) |
| **Observability** | LangSmith, Datadog |

### Emerging Leaders (Innovation)

| Component | Technology |
| --- | --- |
| **Framework** | CrewAI, Google ADK |
| **Vector DB** | Qdrant, Weaviate |
| **Orchestration** | Temporal |
| **Observability** | Langfuse |

### Enterprise Choices

| Component | Technology |
| --- | --- |
| **Platform** | Azure AI, AWS Bedrock, Salesforce Agentforce |
| **Framework** | Semantic Kernel |
| **Governance** | Unity Catalog, Azure Purview |
| **Guardrails** | NeMo Guardrails |
