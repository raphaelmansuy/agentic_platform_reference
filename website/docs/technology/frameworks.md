---
sidebar_position: 4
title: Agent Development Frameworks
description: Open-source and commercial frameworks for building agent logic, from LangChain to Semantic Kernel.
keywords: [LangChain, LlamaIndex, CrewAI, AutoGen, Semantic Kernel, agent frameworks]
---

# Agent Development Frameworks

Open-source and commercial frameworks provide the building blocks for constructing agent logic, orchestration, and tool integration.

---

## Framework Comparison

| Framework | Language | Key Strengths | Best For |
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

## Framework Categories

### Orchestration Frameworks

**LangChain / LangGraph**
- The most widely adopted framework
- LangGraph provides graph-based workflows for complex agents
- Strong ecosystem of integrations and tools
- LangSmith for observability and evaluation

**Semantic Kernel**
- Microsoft's open-source SDK
- First-class support for C#, Python, and Java
- Plugin architecture for extensibility
- Process framework for durable workflows

**Google ADK (Agent Development Kit)**
- Google's open-source Python framework
- Native integration with Vertex AI
- Built-in multi-agent patterns
- Easy deployment to Cloud Run/GKE

### RAG & Knowledge Frameworks

**LlamaIndex**
- Specialized for data ingestion and retrieval
- Advanced RAG patterns (recursive, graph-based)
- Strong indexing capabilities
- Agent mode for tool use

**Haystack**
- Production-ready NLP pipelines
- Modular component architecture
- Strong document processing
- Enterprise deployment focus

### Multi-Agent Frameworks

**CrewAI**
- Role-based agent design
- Simple, intuitive API
- Task delegation patterns
- Production-ready with monitoring

**AutoGen**
- Microsoft Research project
- Conversational multi-agent patterns
- Strong human-in-the-loop support
- Code execution sandboxing

**Swarm**
- OpenAI's lightweight framework
- Simple agent coordination
- Handoff patterns
- Good for learning and prototyping

### Type-Safe & Reliability Frameworks

**Pydantic AI**
- Type-safe agent development
- Structured outputs with validation
- Strong error handling
- Focus on production reliability

**Instructor**
- Structured data extraction
- Schema validation
- Works with multiple LLM providers
- Focus on reliability

### Research & Optimization

**DSPy**
- Programmatic prompt optimization
- Compiler-like approach to prompts
- Automated prompt tuning
- Research-oriented

---

## Framework Selection Guide

```
┌─────────────────────────────────────────────────────────────────┐
│              FRAMEWORK SELECTION                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  What's your primary language?                                  │
│                                                                 │
│  Python ──────┬──► Complex orchestration? ──► LangChain/LangGraph
│               │                                                 │
│               ├──► Knowledge-intensive? ────► LlamaIndex        │
│               │                                                 │
│               ├──► Multi-agent team? ───────► CrewAI            │
│               │                                                 │
│               ├──► Human-in-loop focus? ────► AutoGen           │
│               │                                                 │
│               ├──► GCP deployment? ─────────► Google ADK        │
│               │                                                 │
│               └──► Type-safety priority? ───► Pydantic AI       │
│                                                                 │
│  C# / .NET ───────────────────────────────► Semantic Kernel     │
│                                                                 │
│  TypeScript ──┬──► Type-safe? ──────────────► BeeAI             │
│               └──► Full-stack? ─────────────► Mastra            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Combining Frameworks

Many production systems combine frameworks for different needs:

| Combination | Use Case |
| --- | --- |
| **LangGraph + LlamaIndex** | Complex orchestration with advanced RAG |
| **CrewAI + LangChain** | Multi-agent teams with rich tooling |
| **Semantic Kernel + LangChain** | .NET core with Python LangChain tools |
| **LangGraph + Instructor** | Orchestration with reliable extraction |

:::tip Framework Maturity
LangChain/LangGraph, LlamaIndex, and Semantic Kernel have the largest communities and most production deployments. Newer frameworks like CrewAI, Pydantic AI, and Google ADK are rapidly maturing. Consider ecosystem size, documentation quality, and enterprise support when choosing.
:::

---

## Emerging & Specialized Players

Beyond the major frameworks, specialized tools address specific needs:

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
