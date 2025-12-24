---
sidebar_position: 6
title: Infrastructure Components
description: Runtime, observability, security, and knowledge infrastructure technologies for agentic platforms.
keywords: [Temporal, vector database, observability, guardrails, infrastructure]
---

# Infrastructure Components

The infrastructure layer provides the runtime, observability, security, and knowledge capabilities that underpin an agentic platform.

---

## Runtime & Orchestration

| Component | Technologies |
| --- | --- |
| **Durable Execution** | Temporal, Azure Durable Functions, AWS Step Functions, Inngest, Restate |
| **Kubernetes-Native** | Kagent, Argo Workflows, Kubeflow Pipelines |
| **Serverless** | AWS Lambda, Google Cloud Functions, Azure Functions, Cloudflare Workers |
| **Container Runtime** | Docker, containerd, gVisor (sandboxing), Firecracker |

### Durable Execution Deep Dive

Durable execution platforms ensure agent workflows survive infrastructure failures:

```
┌─────────────────────────────────────────────────────────────────┐
│              DURABLE EXECUTION OPTIONS                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Temporal                                                       │
│  • Open-source, self-hosted or Temporal Cloud                   │
│  • SDKs for Python, Go, Java, TypeScript, .NET                  │
│  • Rich workflow primitives                                     │
│  • Production-proven at massive scale                           │
│                                                                 │
│  Azure Durable Functions                                        │
│  • Serverless durable execution                                 │
│  • .NET native, Python/JavaScript support                       │
│  • Integrated with Azure ecosystem                              │
│                                                                 │
│  AWS Step Functions                                             │
│  • Visual workflow designer                                     │
│  • Native AWS service integration                               │
│  • Standard and Express workflows                               │
│                                                                 │
│  Inngest                                                        │
│  • Developer-friendly durable execution                         │
│  • Event-driven architecture                                    │
│  • Modern TypeScript-first API                                  │
│                                                                 │
│  Restate                                                        │
│  • Distributed durable execution                                │
│  • Low-latency execution                                        │
│  • Virtual object model                                         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## API & Exposition

| Component | Technologies |
| --- | --- |
| **API Gateway** | Kong, AWS API Gateway, Apigee, Azure API Management, Envoy |
| **GraphQL** | Apollo, Hasura, AWS AppSync |
| **Real-time** | WebSockets, Server-Sent Events, Socket.io |
| **Channel SDKs** | Slack Bolt, Microsoft Bot Framework, Twilio, Discord.js |

### API Gateway Selection

| Gateway | Best For |
| --- | --- |
| **Kong** | Multi-cloud, plugin ecosystem |
| **AWS API Gateway** | AWS-native deployments |
| **Apigee** | Google Cloud, enterprise API management |
| **Azure API Management** | Azure ecosystem |
| **Envoy** | Service mesh, custom deployments |

---

## Knowledge & Memory

| Component | Technologies |
| --- | --- |
| **Vector Databases** | Pinecone, Weaviate, Milvus, Qdrant, Chroma, pgvector |
| **Knowledge Graphs** | Neo4j, Amazon Neptune, TigerGraph |
| **Search** | Elasticsearch, OpenSearch, Vertex AI Search, Azure AI Search |
| **Caching** | Redis, Memcached, DragonflyDB |

### Vector Database Comparison

| Database | Deployment | Strengths | Best For |
| --- | --- | --- | --- |
| **Pinecone** | Managed SaaS | Ease of use, serverless | Fast start, production |
| **Weaviate** | Self-hosted/Cloud | GraphQL API, modules | Hybrid search |
| **Milvus** | Self-hosted/Zilliz | Scale, performance | Large deployments |
| **Qdrant** | Self-hosted/Cloud | Rust performance | High performance |
| **Chroma** | Embedded/Server | Developer experience | Development, small scale |
| **pgvector** | Postgres extension | Existing Postgres | Unified data layer |

---

## Observability & Evaluation

| Component | Technologies |
| --- | --- |
| **Tracing & Monitoring** | LangSmith, Langfuse, Arize Phoenix, Weights & Biases, Helicone |
| **Evaluation** | Promptfoo, DeepEval, Ragas, TruLens, MLflow |
| **APM Integration** | Datadog, New Relic, Dynatrace, OpenTelemetry |
| **Logging** | Elasticsearch, Splunk, Grafana Loki |

### Agent-Specific Observability

Traditional APM tools monitor infrastructure. Agent observability requires additional capabilities:

```
┌─────────────────────────────────────────────────────────────────┐
│              AGENT OBSERVABILITY STACK                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Agent-Specific                                                 │
│  ───────────────                                                │
│  • LangSmith    ─► LangChain ecosystem, playground, datasets    │
│  • Langfuse     ─► Open-source, self-hosted option              │
│  • Arize Phoenix─► Open-source, notebook-first                  │
│  • Helicone     ─► LLM proxy, cost tracking                     │
│                                                                 │
│  Evaluation                                                     │
│  ──────────                                                     │
│  • Promptfoo    ─► Prompt testing, CI/CD integration            │
│  • DeepEval     ─► Python-native, comprehensive metrics         │
│  • Ragas        ─► RAG-specific evaluation                      │
│  • TruLens      ─► Feedback functions, monitoring               │
│                                                                 │
│  Infrastructure APM                                             │
│  ───────────────────                                            │
│  • OpenTelemetry─► Standard for traces, metrics, logs           │
│  • Datadog      ─► Enterprise APM with LLM integrations         │
│  • New Relic    ─► Full-stack observability                     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Security & Governance

| Component | Technologies |
| --- | --- |
| **Guardrails** | Guardrails AI, NeMo Guardrails (NVIDIA), Rebuff, LLM Guard |
| **Content Safety** | Azure AI Content Safety, AWS Bedrock Guardrails, Perspective API |
| **Identity** | Okta, Auth0, Microsoft Entra ID, AWS IAM |
| **Secrets** | HashiCorp Vault, AWS Secrets Manager, Azure Key Vault |

### Guardrails Comparison

| Solution | Approach | Best For |
| --- | --- | --- |
| **Guardrails AI** | Validation-focused, structured outputs | Type safety, extraction |
| **NeMo Guardrails** | Programmable rails, Colang | Complex policy logic |
| **Azure Content Safety** | Managed service, categories | Azure deployments |
| **Bedrock Guardrails** | Managed service, topic filtering | AWS deployments |
| **Rebuff** | Prompt injection detection | Security-focused |
| **LLM Guard** | Open-source, self-hosted | Custom deployments |

---

## Technology Mapping to Needs

```
┌─────────────────────────────────────────────────────────────────┐
│              TECHNOLOGY MAPPING TO NEEDS                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  NEED 1: OPERATIONAL RELIABILITY                                │
│  ─────────────────────────────────────────────────────────────  │
│  Durability     → Temporal, Step Functions, Durable Functions   │
│  Scaling        → Kubernetes, serverless functions              │
│  Observability  → LangSmith, Datadog, OpenTelemetry             │
│                                                                 │
│  NEED 2: SECURITY & TRUST                                       │
│  ─────────────────────────────────────────────────────────────  │
│  Isolation      → gVisor, Firecracker, container sandboxing     │
│  Access Control → Cloud IAM, Vault, service mesh                │
│  Threat Detect  → Guardrails AI, content safety APIs            │
│                                                                 │
│  NEED 3: GOVERNANCE & COMPLIANCE                                │
│  ─────────────────────────────────────────────────────────────  │
│  Policy         → NeMo Guardrails, custom policy engines        │
│  Audit          → Unity Catalog, cloud audit logs               │
│  Model Registry → MLflow, Vertex AI Model Registry              │
│                                                                 │
│  NEED 4: DATA FOUNDATION & FACTUALITY                           │
│  ─────────────────────────────────────────────────────────────  │
│  Retrieval      → Vertex AI Search, Azure AI Search, RAG        │
│  Storage        → Vector DBs, knowledge graphs                  │
│  Quality        → Data validation, lineage tracking             │
│                                                                 │
│  NEED 5: INTELLIGENCE & REASONING                               │
│  ─────────────────────────────────────────────────────────────  │
│  Reasoning      → LangGraph, Semantic Kernel, ADK               │
│  Memory         → Vector DBs, Redis, custom stores              │
│  Knowledge      → RAG frameworks, search engines                │
│                                                                 │
│  NEED 6: INTEGRATION & CONNECTIVITY                             │
│  ─────────────────────────────────────────────────────────────  │
│  Tools          → MCP servers, function calling                 │
│  Agents         → A2A protocol, custom federation               │
│  Payments       → Stripe, payment APIs, AP2                     │
│                                                                 │
│  NEED 7: AGENT EXPOSITION & ACCESS                              │
│  ─────────────────────────────────────────────────────────────  │
│  API            → Kong, Apigee, API Gateway                     │
│  Channels       → Slack Bolt, Bot Framework, AG-UI              │
│  Enterprise     → Salesforce SDK, SAP BTP, ServiceNow APIs      │
│                                                                 │
│  NEED 8: DEVELOPER PRODUCTIVITY                                 │
│  ─────────────────────────────────────────────────────────────  │
│  Development    → LangChain, framework SDKs                     │
│  Testing        → Promptfoo, DeepEval, Ragas                    │
│  Deployment     → GitOps, CI/CD, feature flags                  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```
