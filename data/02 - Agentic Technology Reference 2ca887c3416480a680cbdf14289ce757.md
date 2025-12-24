# 02 - Agentic Technology Reference

Author Raphaël MANSUY

December 2025

The agentic platform ecosystem spans hyperscaler offerings, enterprise software vendors, specialized frameworks, and enabling infrastructure. This section maps available technologies to the seven needs and six architectural layers.

---

### 11.1 Hyperscaler Agent Platforms

Major cloud providers now offer integrated agent platforms that address multiple needs through managed services.

```
┌─────────────────────────────────────────────────────────────────┐
│              HYPERSCALER AGENT PLATFORMS                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │  AMAZON WEB SERVICES                                      │  │
│  ├───────────────────────────────────────────────────────────┤  │
│  │                                                           │  │
│  │  Amazon Bedrock Agents                                    │  │
│  │  • Agent orchestration with tool use                      │  │
│  │  • Knowledge bases (RAG)                                  │  │
│  │  • Guardrails for governance                              │  │
│  │  • Multi-agent collaboration                              │  │
│  │                                                           │  │
│  │  AWS Agent Core                                           │  │
│  │  • Low-level agent runtime primitives                     │  │
│  │  • State management and checkpointing                     │  │
│  │  • Integration with Step Functions                        │  │
│  │                                                           │  │
│  │  Amazon Q                                                 │  │
│  │  • Enterprise assistant platform                          │  │
│  │  • Pre-built connectors (40+ data sources)                │  │
│  │  • Business application integration                       │  │
│  │                                                           │  │
│  │  Supporting Services:                                     │  │
│  │  • Step Functions (durable orchestration)                 │  │
│  │  • EventBridge (event-driven triggers)                    │  │
│  │  • API Gateway (agent exposition)                         │  │
│  │  • CloudWatch (observability)                             │  │
│  │  • IAM (identity and access)                              │  │
│  │                                                           │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │  GOOGLE CLOUD                                             │  │
│  ├───────────────────────────────────────────────────────────┤  │
│  │                                                           │  │
│  │  Vertex AI Agent Builder                                  │  │
│  │  • Visual agent development                               │  │
│  │  • Grounding with Google Search and enterprise data       │  │
│  │  • Multi-turn conversation management                     │  │
│  │  • Integration with Vertex AI models                      │  │
│  │                                                           │  │
│  │  Google Agent Development Kit (ADK)                       │  │
│  │  • Open-source Python framework                           │  │
│  │  • Multi-agent orchestration patterns                     │  │
│  │  • Built-in tool ecosystem                                │  │
│  │  • Deployment to Cloud Run or GKE                         │  │
│  │                                                           │  │
│  │  Vertex AI Agent Engine                                   │  │
│  │  • Managed runtime for agents                             │  │
│  │  • Session and state management                           │  │
│  │  • Automatic scaling                                      │  │
│  │                                                           │  │
│  │  Supporting Services:                                     │  │
│  │  • Vertex AI Search (enterprise RAG)                      │  │
│  │  • Cloud Workflows (orchestration)                        │  │
│  │  • Apigee (API management)                                │  │
│  │  • Dialogflow CX (conversational AI)                      │  │
│  │                                                           │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │  MICROSOFT AZURE                                          │  │
│  ├───────────────────────────────────────────────────────────┤  │
│  │                                                           │  │
│  │  Azure AI Agent Service                                   │  │
│  │  • Managed agent hosting                                  │  │
│  │  • Tool and function calling                              │  │
│  │  • File and code interpreter                              │  │
│  │  • Enterprise security integration                        │  │
│  │                                                           │  │
│  │  Azure AI Foundry                                         │  │
│  │  • Unified AI development platform                        │  │
│  │  • Model catalog and fine-tuning                          │  │
│  │  • Prompt flow for agent logic                            │  │
│  │  • Evaluation and monitoring                              │  │
│  │                                                           │  │
│  │  Microsoft Copilot Studio                                 │  │
│  │  • Low-code agent builder                                 │  │
│  │  • Pre-built connectors (1000+)                           │  │
│  │  • Microsoft 365 integration                              │  │
│  │  • Autonomous agent capabilities                          │  │
│  │                                                           │  │
│  │  Semantic Kernel                                          │  │
│  │  • Open-source SDK (C#, Python, Java)                     │  │
│  │  • Plugin architecture for tools                          │  │
│  │  • Memory and planning abstractions                       │  │
│  │  • Process framework for workflows                        │  │
│  │                                                           │  │
│  │  AutoGen                                                  │  │
│  │  • Multi-agent conversation framework                     │  │
│  │  • Human-in-the-loop patterns                             │  │
│  │  • Code execution sandboxing                              │  │
│  │                                                           │  │
│  │  Supporting Services:                                     │  │
│  │  • Azure Durable Functions (durable execution)            │  │
│  │  • Azure API Management (exposition)                      │  │
│  │  • Microsoft Entra ID (identity)                          │  │
│  │  • Azure AI Content Safety (guardrails)                   │  │
│  │                                                           │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

```

---

### 11.2 Data Platform Agent Offerings

Data platforms are extending into the agentic space, leveraging their governance and data management capabilities.

```
┌─────────────────────────────────────────────────────────────────┐
│              DATA PLATFORM AGENT OFFERINGS                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │  DATABRICKS                                               │  │
│  ├───────────────────────────────────────────────────────────┤  │
│  │                                                           │  │
│  │  Mosaic AI Agent Framework                                │  │
│  │  • Agent development with LangChain/LlamaIndex            │  │
│  │  • Unity Catalog tool integration                         │  │
│  │  • Retrieval with Vector Search                           │  │
│  │  • Model serving on Databricks                            │  │
│  │                                                           │  │
│  │  Agent Evaluation (MLflow Integration)                    │  │
│  │  • Automated quality assessment                           │  │
│  │  • Judge-based evaluation                                 │  │
│  │  • Regression detection                                   │  │
│  │  • A/B testing framework                                  │  │
│  │                                                           │  │
│  │  Genie                                                    │  │
│  │  • Natural language data querying                         │  │
│  │  • Semantic layer integration                             │  │
│  │  • Self-service analytics agent                           │  │
│  │                                                           │  │
│  │  Governance & Security:                                   │  │
│  │  • Unity Catalog (unified governance)                     │  │
│  │  • Row/column-level security                              │  │
│  │  • Lineage tracking                                       │  │
│  │  • Audit logging                                          │  │
│  │                                                           │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │  SNOWFLAKE                                                │  │
│  ├───────────────────────────────────────────────────────────┤  │
│  │                                                           │  │
│  │  Cortex AI                                                │  │
│  │  • LLM functions in SQL                                   │  │
│  │  • Document AI and extraction                             │  │
│  │  • Cortex Search (semantic retrieval)                     │  │
│  │  • Cortex Analyst (data Q&A agent)                        │  │
│  │                                                           │  │
│  │  Snowflake Notebooks + Streamlit                          │  │
│  │  • Agent development environment                          │  │
│  │  • Interactive agent UIs                                  │  │
│  │  • Native Python support                                  │  │
│  │                                                           │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

```

---

### 11.3 Enterprise Software Agent Platforms

Major enterprise software vendors are embedding agent capabilities within their platforms.

```
┌─────────────────────────────────────────────────────────────────┐
│              ENTERPRISE SOFTWARE AGENTS                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  SALESFORCE                                                     │
│  ─────────────────────────────────────────────────────────────  │
│  Agentforce                                                     │
│  • Autonomous agents for sales, service, marketing              │
│  • Pre-built agent templates                                    │
│  • Atlas Reasoning Engine                                       │
│  • Data Cloud integration                                       │
│                                                                 │
│  Agent Builder                                                  │
│  • Low-code agent customization                                 │
│  • Topic and action configuration                               │
│  • Guardrail definition                                         │
│  • Testing and deployment                                       │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  SERVICENOW                                                     │
│  ─────────────────────────────────────────────────────────────  │
│  Now Assist                                                     │
│  • AI agents across ITSM, HR, CSM                               │
│  • Workflow automation integration                              │
│  • Knowledge management                                         │
│                                                                 │
│  AI Agent Orchestrator                                          │
│  • Multi-agent coordination                                     │
│  • Process automation                                           │
│  • Enterprise workflow integration                              │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  SAP                                                            │
│  ─────────────────────────────────────────────────────────────  │
│  Joule                                                          │
│  • Embedded AI assistant                                        │
│  • Cross-SAP application actions                                │
│  • Business context awareness                                   │
│                                                                 │
│  SAP Build Process Automation                                   │
│  • Agent-augmented workflows                                    │
│  • RPA integration                                              │
│  • Decision automation                                          │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  ORACLE                                                         │
│  ─────────────────────────────────────────────────────────────  │
│  Oracle AI Agents                                               │
│  • Fusion Applications integration                              │
│  • ERP/HCM/SCM automation                                       │
│  • Oracle Database AI Vector Search                             │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  IBM                                                            │
│  ─────────────────────────────────────────────────────────────  │
│  watsonx Orchestrate                                            │
│  • Skills-based agent architecture                              │
│  • Pre-built automation catalog                                 │
│  • Enterprise application connectors                            │
│                                                                 │
│  watsonx.ai                                                     │
│  • Foundation model hosting                                     │
│  • Agent development toolkit                                    │
│  • Governance and compliance                                    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

```

---

### 11.4 Agent Development Frameworks

Open-source and commercial frameworks for building agent logic.

| Framework | Primary Language | Key Strengths | Best For |
| --- | --- | --- | --- |
| **LangChain / LangGraph** | Python, JS | Largest ecosystem, composable chains, graph-based workflows | Complex multi-step agents |
| **LlamaIndex** | Python | Data ingestion, advanced RAG patterns | Knowledge-intensive agents |
| **CrewAI** | Python | Role-based multi-agent, simple API | Team-of-agents patterns |
| **AutoGen** | Python | Conversational multi-agent, human-in-loop | Research, collaborative agents |
| **Google ADK** | Python | Google Cloud native, orchestration patterns | GCP deployments |
| **Semantic Kernel** | C#, Python, Java | Enterprise .NET integration, process framework | Microsoft ecosystem |
| **Haystack** | Python | Production NLP pipelines, modular | Document processing agents |
| **Pydantic AI** | Python | Type-safe, structured outputs | Reliability-focused agents |
| **Instructor** | Python | Structured extraction, validation | Data extraction agents |
| **DSPy** | Python | Programmatic prompt optimization | Research, optimization |
| **Swarm** | Python | Lightweight multi-agent (OpenAI) | Simple coordination |
| **BeeAI** | TypeScript | Type-safe, observability-first | TypeScript teams |
| **Mastra** | TypeScript | AI-native development framework | Full-stack AI apps |

---

### 11.5 Protocols & Standards

```
┌─────────────────────────────────────────────────────────────────┐
│              PROTOCOLS & STANDARDS                              │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  TOOL & DATA ACCESS                                             │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  MCP (Model Context Protocol)                                   │
│  • Origin: Anthropic                                            │
│  • Purpose: Universal tool/resource interface                   │
│  • Adoption: Growing ecosystem (100+ servers)                   │
│  • Implementations: TypeScript SDK, Python SDK                  │
│                                                                 │
│  OpenAPI / Function Calling                                     │
│  • Native support in OpenAI, Anthropic, Google models           │
│  • Schema-based tool definition                                 │
│  • Wide existing adoption                                       │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  AGENT COLLABORATION                                            │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  A2A (Agent-to-Agent Protocol)                                  │
│  • Origin: Google                                               │
│  • Purpose: Multi-agent discovery and delegation                │
│  • Status: Emerging standard                                    │
│  • Key concepts: Agent Cards, task delegation, capabilities     │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  USER INTERFACE                                                 │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  AG-UI (Agent-User Interface Protocol)                          │
│  • Origin: CopilotKit                                           │
│  • Purpose: Streaming agent-to-UI communication                 │
│  • Features: State events, tool visibility, rich content        │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  PAYMENTS                                                       │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  AP2 (Agent Payment Protocol)                                   │
│  • Purpose: Autonomous agent transactions                       │
│  • Status: Early development                                    │
│  • Concepts: Mandates, limits, settlement                       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

```

---

### 11.6 Infrastructure Components

### Runtime & Orchestration

| Component | Technologies |
| --- | --- |
| **Durable Execution** | Temporal, Azure Durable Functions, AWS Step Functions, Inngest, Restate |
| **Kubernetes-Native** | Kagent, Argo Workflows, Kubeflow Pipelines |
| **Serverless** | AWS Lambda, Google Cloud Functions, Azure Functions, Cloudflare Workers |
| **Container Runtime** | Docker, containerd, gVisor (sandboxing), Firecracker |

### API & Exposition

| Component | Technologies |
| --- | --- |
| **API Gateway** | Kong, AWS API Gateway, Apigee, Azure API Management, Envoy |
| **GraphQL** | Apollo, Hasura, AWS AppSync |
| **Real-time** | WebSockets, Server-Sent Events, Socket.io |
| **Channel SDKs** | Slack Bolt, Microsoft Bot Framework, Twilio, Discord.js |

### Knowledge & Memory

| Component | Technologies |
| --- | --- |
| **Vector Databases** | Pinecone, Weaviate, Milvus, Qdrant, Chroma, pgvector |
| **Knowledge Graphs** | Neo4j, Amazon Neptune, TigerGraph |
| **Search** | Elasticsearch, OpenSearch, Vertex AI Search, Azure AI Search |
| **Caching** | Redis, Memcached, DragonflyDB |

### Observability & Evaluation

| Component | Technologies |
| --- | --- |
| **Tracing & Monitoring** | LangSmith, Langfuse, Arize Phoenix, Weights & Biases, Helicone |
| **Evaluation** | Promptfoo, DeepEval, Ragas, TruLens, MLflow |
| **APM Integration** | Datadog, New Relic, Dynatrace, OpenTelemetry |
| **Logging** | Elasticsearch, Splunk, Grafana Loki |

### Security & Governance

| Component | Technologies |
| --- | --- |
| **Guardrails** | Guardrails AI, NeMo Guardrails (NVIDIA), Rebuff, LLM Guard |
| **Content Safety** | Azure AI Content Safety, AWS Bedrock Guardrails, Perspective API |
| **Identity** | Okta, Auth0, Microsoft Entra ID, AWS IAM |
| **Secrets** | HashiCorp Vault, AWS Secrets Manager, Azure Key Vault |

---

### 11.7 Technology Selection by Need

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
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  NEED 2: SECURITY & TRUST                                       │
│  ─────────────────────────────────────────────────────────────  │
│  Isolation      → gVisor, Firecracker, container sandboxing     │
│  Access Control → Cloud IAM, Vault, service mesh                │
│  Threat Detect  → Guardrails AI, content safety APIs            │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  NEED 3: GOVERNANCE & COMPLIANCE                                │
│  ─────────────────────────────────────────────────────────────  │
│  Policy         → NeMo Guardrails, custom policy engines        │
│  Audit          → Unity Catalog, cloud audit logs               │
│  Model Registry → MLflow, Vertex AI Model Registry              │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  NEED 4: INTELLIGENCE & REASONING                               │
│  ─────────────────────────────────────────────────────────────  │
│  Reasoning      → LangGraph, Semantic Kernel, ADK               │
│  Memory         → Vector DBs, Redis, custom stores              │
│  Knowledge      → Vertex AI Search, Azure AI Search, RAG        │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  NEED 5: INTEGRATION & CONNECTIVITY                             │
│  ─────────────────────────────────────────────────────────────  │
│  Tools          → MCP servers, function calling                 │
│  Agents         → A2A protocol, custom federation               │
│  Payments       → Stripe, payment APIs, AP2                     │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  NEED 6: AGENT EXPOSITION & ACCESS                              │
│  ─────────────────────────────────────────────────────────────  │
│  API            → Kong, Apigee, API Gateway                     │
│  Channels       → Slack Bolt, Bot Framework, AG-UI              │
│  Enterprise     → Salesforce SDK, SAP BTP, ServiceNow APIs      │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  NEED 7: DEVELOPER PRODUCTIVITY                                 │
│  ─────────────────────────────────────────────────────────────  │
│  Development    → LangChain, framework SDKs                     │
│  Testing        → Promptfoo, DeepEval, Ragas                    │
│  Deployment     → GitOps, CI/CD, feature flags                  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

```

---

### 11.8 Reference Architectures by Cloud Provider

```
┌─────────────────────────────────────────────────────────────────┐
│              AWS REFERENCE ARCHITECTURE                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  EXPOSITION: API Gateway, AppSync, Lex                  │    │
│  └─────────────────────────────────────────────────────────┘    │
│                           │                                     │
│                           ▼                                     │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  AGENTS: Bedrock Agents, Lambda, ECS                    │    │
│  └─────────────────────────────────────────────────────────┘    │
│                           │                                     │
│        ┌──────────────────┼──────────────────┐                  │
│        ▼                  ▼                  ▼                  │
│  ┌───────────┐     ┌─────────────┐    ┌───────────┐             │
│  │  Bedrock  │     │    Step     │    │  Bedrock  │             │
│  │  Models   │     │  Functions  │    │ Knowledge │             │
│  └───────────┘     └─────────────┘    │   Bases   │             │
│                                       └───────────┘             │
│                           │                                     │
│                           ▼                                     │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  DATA: S3, OpenSearch, DynamoDB, Aurora pgvector        │    │
│  └─────────────────────────────────────────────────────────┘    │
│                           │                                     │
│                           ▼                                     │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  GOVERNANCE: IAM, CloudTrail, Bedrock Guardrails        │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│              GOOGLE CLOUD REFERENCE ARCHITECTURE                │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  EXPOSITION: Apigee, Cloud Endpoints, Dialogflow CX     │    │
│  └─────────────────────────────────────────────────────────┘    │
│                           │                                     │
│                           ▼                                     │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  AGENTS: Agent Builder, ADK on Cloud Run, GKE           │    │
│  └─────────────────────────────────────────────────────────┘    │
│                           │                                     │
│        ┌──────────────────┼──────────────────┐                  │
│        ▼                  ▼                  ▼                  │
│  ┌───────────┐     ┌─────────────┐    ┌───────────┐             │
│  │  Vertex   │     │    Cloud    │    │  Vertex   │             │
│  │ AI Models │     │  Workflows  │    │ AI Search │             │
│  └───────────┘     └─────────────┘    └───────────┘             │
│                                                                 │
│                           │                                     │
│                           ▼                                     │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  DATA: BigQuery, AlloyDB, Firestore, Cloud Storage      │    │
│  └─────────────────────────────────────────────────────────┘    │
│                           │                                     │
│                           ▼                                     │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  GOVERNANCE: IAM, Cloud Audit Logs, VPC-SC              │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│              AZURE REFERENCE ARCHITECTURE                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  EXPOSITION: API Management, Bot Service, Copilot Studio│    │
│  └─────────────────────────────────────────────────────────┘    │
│                           │                                     │
│                           ▼                                     │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  AGENTS: AI Agent Service, Azure Functions, AKS         │    │
│  └─────────────────────────────────────────────────────────┘    │
│                           │                                     │
│        ┌──────────────────┼──────────────────┐                  │
│        ▼                  ▼                  ▼                  │
│  ┌───────────┐     ┌─────────────┐    ┌───────────┐             │
│  │  Azure    │     │   Durable   │    │  Azure    │             │
│  │ OpenAI    │     │  Functions  │    │ AI Search │             │
│  └───────────┘     └─────────────┘    └───────────┘             │
│                                                                 │
│                           │                                     │
│                           ▼                                     │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  DATA: Cosmos DB, SQL, Blob Storage, Fabric             │    │
│  └─────────────────────────────────────────────────────────┘    │
│                           │                                     │
│                           ▼                                     │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  GOVERNANCE: Entra ID, Defender, Content Safety         │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│              DATABRICKS REFERENCE ARCHITECTURE                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  EXPOSITION: Model Serving Endpoints, Lakehouse Apps    │    │
│  └─────────────────────────────────────────────────────────┘    │
│                           │                                     │
│                           ▼                                     │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  AGENTS: Mosaic AI Agent Framework, Genie               │    │
│  └─────────────────────────────────────────────────────────┘    │
│                           │                                     │
│        ┌──────────────────┼──────────────────┐                  │
│        ▼                  ▼                  ▼                  │
│  ┌───────────┐     ┌─────────────┐    ┌───────────┐             │
│  │  Model    │     │    Agent    │    │  Vector   │             │
│  │ Serving   │     │ Evaluation  │    │  Search   │             │
│  └───────────┘     └─────────────┘    └───────────┘             │
│                                                                 │
│                           │                                     │
│                           ▼                                     │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  DATA: Delta Lake, Unity Catalog, Feature Store         │    │
│  └─────────────────────────────────────────────────────────┘    │
│                           │                                     │
│                           ▼                                     │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  GOVERNANCE: Unity Catalog, MLflow, Lineage             │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

```

---

### 11.9 Emerging & Specialized Players

| Category | Vendors/Projects |
| --- | --- |
| **Agent Platforms** | Fixie, Relevance AI, SuperAGI, AgentGPT, BabyAGI |
| **Agent Infrastructure** | E2B (code sandboxing), Modal (compute), Browserbase (web automation) |
| **Memory/Context** | Mem0, Zep, Letta (MemGPT), Motif |
| **Voice Agents** | Bland AI, Vapi, Retell AI, Play.ai |
| **Workflow Automation** | n8n, Activepieces, Windmill |
| **No-Code Agent Builders** | Voiceflow, Botpress, Flowise |
| **Enterprise Assistants** | Glean, Moveworks, Aisera |
| **Agent Security** | Prompt Security, Lakera, Protect AI |

---

### 11.10 Selection Considerations

When selecting technologies, consider:

**Build vs. Buy vs. Compose**

- **Build:** Maximum flexibility, highest investment, full control
- **Buy:** Fastest time-to-value, vendor lock-in, feature constraints
- **Compose:** Balance of flexibility and speed, integration complexity

**Cloud Strategy Alignment**

- Single-cloud: Use native services (Bedrock, Vertex, Azure AI)
- Multi-cloud: Use portable frameworks (LangChain, Temporal) with cloud-agnostic data
- Hybrid: Combine cloud agent services with on-premises governance

**Maturity & Risk Tolerance**

- Production-critical: Established platforms (AWS, Azure, GCP native)
- Innovation-focused: Emerging frameworks, open-source
- Regulated industries: Enterprise vendors with compliance certifications

**Team Capabilities**

- Python-centric: LangChain, LlamaIndex, ADK
- .NET/Enterprise: Semantic Kernel, Azure AI
- Platform engineering: Kubernetes-native (Kagent, custom)