---
sidebar_position: 2
title: Hyperscaler Agent Platforms
description: AWS, Google Cloud, and Microsoft Azure agent platforms with their supporting services and capabilities.
keywords: [AWS Bedrock, Vertex AI, Azure AI, hyperscaler, cloud agents]
---

# Hyperscaler Agent Platforms

Major cloud providers now offer integrated agent platforms that address multiple needs through managed services.

---

## Amazon Web Services

```
┌───────────────────────────────────────────────────────────────┐
│  AMAZON WEB SERVICES                                          │
├───────────────────────────────────────────────────────────────┤
│                                                               │
│  Amazon Bedrock Agents                                        │
│  • Agent orchestration with tool use                          │
│  • Knowledge bases (RAG)                                      │
│  • Guardrails for governance                                  │
│  • Multi-agent collaboration                                  │
│                                                               │
│  AWS Agent Core                                               │
│  • Low-level agent runtime primitives                         │
│  • State management and checkpointing                         │
│  • Integration with Step Functions                            │
│                                                               │
│  Amazon Q                                                     │
│  • Enterprise assistant platform                              │
│  • Pre-built connectors (40+ data sources)                    │
│  • Business application integration                           │
│                                                               │
│  Supporting Services:                                         │
│  • Step Functions (durable orchestration)                     │
│  • EventBridge (event-driven triggers)                        │
│  • API Gateway (agent exposition)                             │
│  • CloudWatch (observability)                                 │
│  • IAM (identity and access)                                  │
│                                                               │
└───────────────────────────────────────────────────────────────┘
```

### Key AWS Offerings

| Service | Purpose | Needs Addressed |
| --- | --- | --- |
| **Amazon Bedrock Agents** | Managed agent orchestration | Intelligence, Integration |
| **Bedrock Knowledge Bases** | Managed RAG | Data Foundation |
| **Bedrock Guardrails** | Content filtering, topic avoidance | Security, Governance |
| **AWS Agent Core** | Low-level runtime primitives | Operational Reliability |
| **Step Functions** | Durable workflow orchestration | Operational Reliability |
| **Amazon Q** | Enterprise AI assistant | Agent Exposition, Integration |

---

## Google Cloud

```
┌───────────────────────────────────────────────────────────────┐
│  GOOGLE CLOUD                                                 │
├───────────────────────────────────────────────────────────────┤
│                                                               │
│  Vertex AI Agent Builder                                      │
│  • Visual agent development                                   │
│  • Grounding with Google Search and enterprise data           │
│  • Multi-turn conversation management                         │
│  • Integration with Vertex AI models                          │
│                                                               │
│  Google Agent Development Kit (ADK)                           │
│  • Open-source Python framework                               │
│  • Multi-agent orchestration patterns                         │
│  • Built-in tool ecosystem                                    │
│  • Deployment to Cloud Run or GKE                             │
│                                                               │
│  Vertex AI Agent Engine                                       │
│  • Managed runtime for agents                                 │
│  • Session and state management                               │
│  • Automatic scaling                                          │
│                                                               │
│  Supporting Services:                                         │
│  • Vertex AI Search (enterprise RAG)                          │
│  • Cloud Workflows (orchestration)                            │
│  • Apigee (API management)                                    │
│  • Dialogflow CX (conversational AI)                          │
│                                                               │
└───────────────────────────────────────────────────────────────┘
```

### Key Google Cloud Offerings

| Service | Purpose | Needs Addressed |
| --- | --- | --- |
| **Vertex AI Agent Builder** | Visual agent development | Developer Productivity |
| **Agent Development Kit (ADK)** | Open-source framework | Developer Productivity, Intelligence |
| **Vertex AI Agent Engine** | Managed runtime | Operational Reliability |
| **Vertex AI Search** | Enterprise RAG and search | Data Foundation |
| **Dialogflow CX** | Conversational AI | Agent Exposition |
| **Cloud Workflows** | Orchestration | Operational Reliability |

---

## Microsoft Azure

```
┌───────────────────────────────────────────────────────────────┐
│  MICROSOFT AZURE                                              │
├───────────────────────────────────────────────────────────────┤
│                                                               │
│  Azure AI Agent Service                                       │
│  • Managed agent hosting                                      │
│  • Tool and function calling                                  │
│  • File and code interpreter                                  │
│  • Enterprise security integration                            │
│                                                               │
│  Azure AI Foundry                                             │
│  • Unified AI development platform                            │
│  • Model catalog and fine-tuning                              │
│  • Prompt flow for agent logic                                │
│  • Evaluation and monitoring                                  │
│                                                               │
│  Microsoft Copilot Studio                                     │
│  • Low-code agent builder                                     │
│  • Pre-built connectors (1000+)                               │
│  • Microsoft 365 integration                                  │
│  • Autonomous agent capabilities                              │
│                                                               │
│  Semantic Kernel                                              │
│  • Open-source SDK (C#, Python, Java)                         │
│  • Plugin architecture for tools                              │
│  • Memory and planning abstractions                           │
│  • Process framework for workflows                            │
│                                                               │
│  AutoGen                                                      │
│  • Multi-agent conversation framework                         │
│  • Human-in-the-loop patterns                                 │
│  • Code execution sandboxing                                  │
│                                                               │
│  Supporting Services:                                         │
│  • Azure Durable Functions (durable execution)                │
│  • Azure API Management (exposition)                          │
│  • Microsoft Entra ID (identity)                              │
│  • Azure AI Content Safety (guardrails)                       │
│                                                               │
└───────────────────────────────────────────────────────────────┘
```

### Key Azure Offerings

| Service | Purpose | Needs Addressed |
| --- | --- | --- |
| **Azure AI Agent Service** | Managed agent hosting | Operational Reliability |
| **Azure AI Foundry** | Unified development platform | Developer Productivity |
| **Copilot Studio** | Low-code agent builder | Developer Productivity, Agent Exposition |
| **Semantic Kernel** | Open-source SDK | Intelligence, Integration |
| **AutoGen** | Multi-agent framework | Intelligence |
| **Durable Functions** | Durable execution | Operational Reliability |
| **Content Safety** | Guardrails | Security, Governance |

---

## Hyperscaler Comparison

| Capability | AWS | Google Cloud | Azure |
| --- | --- | --- | --- |
| **Managed Agent Runtime** | Bedrock Agents | Agent Engine | AI Agent Service |
| **Low-Code Builder** | — | Agent Builder | Copilot Studio |
| **Open-Source Framework** | — | ADK | Semantic Kernel, AutoGen |
| **Durable Execution** | Step Functions | Cloud Workflows | Durable Functions |
| **RAG/Search** | Knowledge Bases | Vertex AI Search | Azure AI Search |
| **Guardrails** | Bedrock Guardrails | — | Content Safety |
| **Enterprise Assistant** | Amazon Q | — | Copilot |

:::tip Choosing a Hyperscaler
Your choice of hyperscaler often depends on existing cloud investments, compliance requirements, and team expertise. All three provide capable platforms—differentiation is in developer experience, ecosystem integration, and specific feature availability.
:::
