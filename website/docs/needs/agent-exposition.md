---
sidebar_position: 8
title: "Need 7: Agent Exposition & Access"
description: How users and systems invoke and interact with agents.
keywords: [exposition, API, AG-UI, channels, enterprise integration, accessibility]
---

# Need 7: Agent Exposition & Access

**The Problem:** Agents must be accessible through the channels and systems where users work—as web services, in messaging platforms, embedded in applications, and as participants in workflows.

This need addresses how agents are **exposed and consumed**—the inbound connections from users and systems to agents.

## 7.1 The Exposition Challenge

An agent that can reason, use tools, and access data is useless if users cannot reach it. Exposition is the bridge between agent capabilities and user access.

```
┌─────────────────────────────────────────────────────────────────┐
│              THE COMPLETE INTEGRATION PICTURE                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  NEED 6: WHAT AGENTS CONSUME          NEED 7: HOW AGENTS        │
│  (Outbound from Agent)                ARE ACCESSED              │
│                                       (Inbound to Agent)        │
│                                                                 │
│       ┌───────┐                            ┌───────┐            │
│       │ Tools │◄───┐                  ┌───►│ Users │            │
│       └───────┘    │                  │    └───────┘            │
│                    │                  │                         │
│       ┌───────┐    │    ┌───────┐     │    ┌───────┐            │
│       │Agents │◄───┼────│ AGENT │─────┼───►│  Apps │            │
│       └───────┘    │    └───────┘     │    └───────┘            │
│                    │                  │                         │
│       ┌───────┐    │                  │    ┌───────┐            │
│       │  Pay  │◄───┘                  └───►│Systems│            │
│       └───────┘                            └───────┘            │
│                                                                 │
│  Protocols: MCP, A2A, AP2             Protocols: AG-UI, REST,   │
│                                       GraphQL, Webhooks         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## 7.2 Agent as Web Service

The most fundamental exposition pattern: agents callable via standard HTTP APIs.

### Invocation Patterns

| Pattern | Description | Use Case |
|---------|-------------|----------|
| **Synchronous** | Request/response within HTTP timeout | Fast agents, simple tasks |
| **Streaming** | Progressive output via SSE | Better UX for longer responses |
| **Async with Webhooks** | Return immediately, callback when done | Long-running tasks |
| **Polling** | Client checks status periodically | When webhooks aren't feasible |

### API Resource Model

```
┌─────────────────────────────────────────────────────────────────┐
│                    AGENT API RESOURCES                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  /agents                                                        │
│  └── /{agent_id}                                                │
│      ├── GET           → Agent metadata & capabilities          │
│      ├── /invoke       → Synchronous execution                  │
│      ├── /stream       → Streaming execution                    │
│      ├── /schema       → Input/output JSON schema               │
│      │                                                          │
│      ├── /runs                                                  │
│      │   ├── POST      → Async execution                        │
│      │   └── /{run_id}                                          │
│      │       ├── GET      → Status & output                     │
│      │       ├── DELETE   → Cancel                              │
│      │       ├── /events  → SSE stream                          │
│      │       └── /actions                                       │
│      │           └── /{action_id}                               │
│      │               └── POST → Submit HITL decision            │
│      │                                                          │
│      └── /conversations                                         │
│          ├── POST      → Start conversation                     │
│          └── /{conv_id}                                         │
│              ├── GET      → History                             │
│              ├── POST     → Continue                            │
│              └── DELETE   → End                                 │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## 7.3 Agent in Channels: AG-UI Protocol

Messaging platforms, web widgets, and interactive UIs need richer agent communication than simple request/response.

**AG-UI (Agent-User Interface Protocol)** standardizes how agents communicate their state and outputs to user interfaces.

```
┌─────────────────────────────────────────────────────────────────┐
│                    AG-UI MESSAGE TYPES                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  STATE                                                          │
│  • AgentStateChange    → thinking / acting / waiting            │
│                                                                 │
│  CONTENT                                                        │
│  • TextDelta           → Streaming text chunk                   │
│  • RichContent         → Table, chart, code, file               │
│                                                                 │
│  TOOL VISIBILITY                                                │
│  • ToolCallStart       → Invoking tool X with args Y            │
│  • ToolCallProgress    → Execution 50% complete                 │
│  • ToolCallResult      → Tool returned Z                        │
│                                                                 │
│  DATA GROUNDING                                                 │
│  • DataSourceUsed      → Which data sources inform response     │
│  • ConfidenceScore     → Factual confidence level               │
│  • Citation            → Link to source data                    │
│                                                                 │
│  INTERACTION                                                    │
│  • ActionRequest       → Need user approval/input               │
│  • ActionResponse      → User submitted decision                │
│                                                                 │
│  ERRORS                                                         │
│  • ErrorOccurred       → Agent encountered error                │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## 7.4 Channel Adapters

Each platform requires translation between AG-UI and platform-specific APIs.

```
┌─────────────────────────────────────────────────────────────────┐
│                    CHANNEL ADAPTER LAYER                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐    │
│  │  Slack  │ │  Teams  │ │  Web    │ │ Discord │ │WhatsApp │    │
│  │   Bot   │ │   Bot   │ │ Widget  │ │   Bot   │ │Business │    │
│  └────┬────┘ └────┬────┘ └────┬────┘ └────┬────┘ └────┬────┘    │
│       │          │          │          │          │            │
│       └──────────┴──────────┴────┬─────┴──────────┘            │
│                                  │                              │
│                                  ▼                              │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │                   CHANNEL ADAPTERS                       │   │
│  │                                                          │   │
│  │  • Protocol translation (platform API ↔ AG-UI)           │   │
│  │  • Authentication (OAuth, tokens)                        │   │
│  │  • Rate limiting & retry                                 │   │
│  │  • Rich content adaptation (markdown → Slack blocks)     │   │
│  │  • Approval mapping (reactions → confirmations)          │   │
│  └────────────────────────┬─────────────────────────────────┘   │
│                           │                                     │
│                           ▼                                     │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │                      AG-UI LAYER                         │   │
│  └────────────────────────┬─────────────────────────────────┘   │
│                           │                                     │
│                           ▼                                     │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │                   AGENT SERVICE API                      │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Adapter Responsibilities

| Responsibility | Description |
|----------------|-------------|
| **Protocol Translation** | Convert platform messages to/from AG-UI |
| **Authentication** | Handle platform-specific auth (OAuth, tokens) |
| **Rate Limiting** | Respect platform API limits |
| **Content Adaptation** | Transform rich content for each platform |
| **Approval Mapping** | Convert platform interactions to agent confirmations |

## 7.5 Enterprise System Integration

Agents embed within enterprise applications as assistants, automation actors, or process participants.

| Integration Pattern | Description |
|---------------------|-------------|
| **Embedded Widget** | Agent UI component within existing application |
| **API Backend** | Agent powers features in existing apps |
| **Event-Driven** | Agent responds to system events |
| **Scheduled** | Agent runs on defined schedules |

## 7.6 Workflow & Process Participation

Agents participate as actors in business processes and automation workflows.

```
┌─────────────────────────────────────────────────────────────────┐
│                    WORKFLOW PARTICIPATION                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  WORKFLOW ENGINE                                                │
│  (Temporal, Airflow, Power Automate, etc.)                      │
│                                                                 │
│       ┌─────┐      ┌─────┐      ┌─────┐      ┌─────┐           │
│       │Step │ ───► │Step │ ───► │AGENT│ ───► │Step │           │
│       │  1  │      │  2  │      │     │      │  4  │           │
│       └─────┘      └─────┘      └──┬──┘      └─────┘           │
│                                    │                            │
│                                    ▼                            │
│                            ┌─────────────┐                      │
│                            │  Receives   │                      │
│                            │  context    │                      │
│                            │  Returns    │                      │
│                            │  structured │                      │
│                            │  output     │                      │
│                            └─────────────┘                      │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## Key Takeaways

1. **Exposition is essential** — Agents without access points are useless
2. **Multiple invocation patterns** suit different latency and complexity needs
3. **AG-UI** standardizes rich agent-to-UI communication
4. **Channel adapters** enable presence across platforms
5. **Enterprise integration** embeds agents where users already work
6. **Workflow participation** makes agents first-class process actors
