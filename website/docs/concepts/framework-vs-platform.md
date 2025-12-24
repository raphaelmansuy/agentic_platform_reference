---
sidebar_position: 2
title: Framework vs. Platform
description: Understanding the difference between agent frameworks and agentic platforms.
keywords: [framework, platform, LangChain, CrewAI, AutoGen, infrastructure]
---

# Framework vs. Platform

A critical distinction in the agentic ecosystem is the difference between **frameworks** and **platforms**. Understanding this distinction is essential for architectural decisions.

## Frameworks: Building Agent Logic

**Frameworks** (LangChain, CrewAI, AutoGen, Google ADK) are code libraries for building agent logic.

They answer: *How do I write code that makes an LLM behave as an agent?*

Frameworks provide:
- Abstractions for prompt management
- Tool/function calling patterns
- Chain and workflow composition
- Memory management utilities
- Agent orchestration patterns

## Platforms: Running Agent Logic

**Platforms** are infrastructure for running agent logic in production.

They answer: *How do I operate agents reliably, securely, at scale, and accessible to users?*

Platforms provide:
- Durable execution environments
- Security and access controls
- Governance and compliance
- Data access and verification
- Observability and monitoring
- User-facing exposition (APIs, channels)

## The Relationship

```
┌─────────────────────────────────────────────────────────────────┐
│                    FRAMEWORK VS PLATFORM                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  FRAMEWORK (LangChain, CrewAI, AutoGen, ADK)                    │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  • Code libraries                                               │
│  • Agent logic patterns                                         │
│  • Development-time abstractions                                │
│  • "How to build agent behavior"                                │
│                                                                 │
│                          ▼                                      │
│                    [runs on]                                    │
│                          ▼                                      │
│                                                                 │
│  PLATFORM (Agentic Platform)                                    │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  • Infrastructure layer                                         │
│  • Production operations                                        │
│  • Runtime environment                                          │
│  • "How to operate agents in production"                        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Frameworks run *on* platforms.** A team might use LangChain to build agent logic, then deploy that logic to an Agentic Platform that provides durable execution, security, data access, observability, and exposition.

## Scope Comparison

| Concern | Framework | Platform |
|---------|-----------|----------|
| Prompt engineering | ✓ | — |
| Tool calling abstractions | ✓ | — |
| Agent orchestration patterns | ✓ | — |
| Durable execution | — | ✓ |
| Security & isolation | — | ✓ |
| Governance & compliance | — | ✓ |
| Data access & quality | — | ✓ |
| User-facing APIs | — | ✓ |
| Observability & alerting | — | ✓ |
| Multi-tenant isolation | — | ✓ |

## The Eight Needs Are Platform Concerns

The eight needs addressed by this reference architecture are **platform-level concerns**:

1. **Operational Reliability** — How execution survives failures, scales
2. **Security & Trust** — How unauthorized actions are prevented
3. **Governance & Compliance** — How policies are enforced
4. **Data Foundation** — How data quality and provenance are ensured
5. **Intelligence & Reasoning** — How models are routed and reasoned
6. **Integration & Connectivity** — How tools and agents connect
7. **Agent Exposition** — How users and systems access agents
8. **Developer Productivity** — How teams build and improve agents

Frameworks provide building blocks; platforms provide the production environment.

:::info Framework-Agnostic
This reference architecture is framework-agnostic. The platform layer works regardless of whether you use LangChain, CrewAI, AutoGen, custom code, or any combination.
:::

## When You Need Both

Most production deployments need both:

```
┌─────────────────────────────────────────────────────────────────┐
│                    PRODUCTION STACK                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │                    YOUR AGENTS                          │    │
│  │         (Business logic, specialized behavior)          │    │
│  └─────────────────────────────────────────────────────────┘    │
│                            │                                    │
│                            ▼                                    │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │              FRAMEWORK (LangChain, etc.)                │    │
│  │         (Agent patterns, abstractions, tools)           │    │
│  └─────────────────────────────────────────────────────────┘    │
│                            │                                    │
│                            ▼                                    │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │                  AGENTIC PLATFORM                       │    │
│  │     (Security, governance, data, observability,         │    │
│  │      exposition, durability, scaling)                   │    │
│  └─────────────────────────────────────────────────────────┘    │
│                            │                                    │
│                            ▼                                    │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │                   INFRASTRUCTURE                        │    │
│  │         (Compute, storage, network, models)             │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

The framework helps you build; the platform helps you operate.
