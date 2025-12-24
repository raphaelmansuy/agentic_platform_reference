---
sidebar_position: 7
title: Cloud Reference Architectures
description: Complete reference architectures for AWS, Google Cloud, Azure, and Databricks agentic platforms.
keywords: [AWS reference architecture, Azure reference architecture, GCP reference architecture, Databricks]
---

# Cloud Reference Architectures

Complete reference architectures showing how to compose cloud-native services into a coherent agentic platform.

---

## AWS Reference Architecture

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
```

### AWS Service Mapping

| Layer | Services |
| --- | --- |
| **Exposition** | API Gateway, AppSync (GraphQL), Amazon Lex |
| **Agent Runtime** | Bedrock Agents, Lambda, ECS/Fargate |
| **Intelligence** | Bedrock Models, SageMaker endpoints |
| **Orchestration** | Step Functions, EventBridge |
| **Knowledge** | Bedrock Knowledge Bases, OpenSearch, Kendra |
| **Data** | S3, DynamoDB, Aurora (pgvector), RDS |
| **Security** | IAM, Secrets Manager, KMS |
| **Governance** | CloudTrail, Bedrock Guardrails, Config |
| **Observability** | CloudWatch, X-Ray |

---

## Google Cloud Reference Architecture

```
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
```

### Google Cloud Service Mapping

| Layer | Services |
| --- | --- |
| **Exposition** | Apigee, Cloud Endpoints, Dialogflow CX |
| **Agent Runtime** | Agent Builder, Cloud Run, GKE |
| **Intelligence** | Vertex AI Models, Model Garden |
| **Orchestration** | Cloud Workflows, Cloud Tasks |
| **Knowledge** | Vertex AI Search, Vector Search |
| **Data** | BigQuery, AlloyDB, Firestore, Cloud Storage |
| **Security** | IAM, Secret Manager, VPC Service Controls |
| **Governance** | Cloud Audit Logs, Data Catalog |
| **Observability** | Cloud Monitoring, Cloud Trace, Cloud Logging |

---

## Azure Reference Architecture

```
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
```

### Azure Service Mapping

| Layer | Services |
| --- | --- |
| **Exposition** | API Management, Bot Service, Copilot Studio |
| **Agent Runtime** | AI Agent Service, Azure Functions, AKS |
| **Intelligence** | Azure OpenAI, AI Foundry |
| **Orchestration** | Durable Functions, Logic Apps |
| **Knowledge** | Azure AI Search, Cognitive Search |
| **Data** | Cosmos DB, SQL Database, Blob Storage, Fabric |
| **Security** | Entra ID, Key Vault, Defender for Cloud |
| **Governance** | Content Safety, Azure Policy |
| **Observability** | Application Insights, Azure Monitor |

---

## Databricks Reference Architecture

```
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

### Databricks Service Mapping

| Layer | Services |
| --- | --- |
| **Exposition** | Model Serving Endpoints, Lakehouse Apps |
| **Agent Runtime** | Mosaic AI Agent Framework, Notebooks |
| **Intelligence** | Foundation Model APIs, DBRX, fine-tuned models |
| **Evaluation** | Agent Evaluation, MLflow |
| **Knowledge** | Vector Search, Feature Store |
| **Data** | Delta Lake, Unity Catalog tables |
| **Security** | Unity Catalog permissions, row/column security |
| **Governance** | Unity Catalog, Lineage, Audit Logs |
| **Observability** | MLflow, Inference Tables |

---

## Architecture Comparison

| Aspect | AWS | Google Cloud | Azure | Databricks |
| --- | --- | --- | --- | --- |
| **Agent Service** | Bedrock Agents | Agent Builder | AI Agent Service | Mosaic AI |
| **Durable Execution** | Step Functions | Cloud Workflows | Durable Functions | Workflows (on cloud) |
| **RAG/Search** | Knowledge Bases | Vertex AI Search | AI Search | Vector Search |
| **Low-Code** | — | Agent Builder | Copilot Studio | — |
| **Open Framework** | — | ADK | Semantic Kernel | LangChain |
| **Data Governance** | IAM + CloudTrail | Data Catalog | Purview | Unity Catalog |

:::tip Multi-Cloud Considerations
For multi-cloud deployments, consider using cloud-agnostic components:
- **Orchestration:** Temporal (self-hosted)
- **Framework:** LangChain, LlamaIndex
- **Vector DB:** Weaviate, Qdrant (self-hosted)
- **Observability:** OpenTelemetry + Langfuse

This allows portability while still leveraging cloud-specific model APIs and compute.
:::
