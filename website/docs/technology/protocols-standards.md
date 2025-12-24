---
sidebar_position: 5
title: Protocols & Standards
description: Emerging protocols and standards for agent interoperability including MCP, A2A, AG-UI, and OpenAPI.
keywords: [MCP, Model Context Protocol, A2A, AG-UI, agent protocols, standards]
---

# Protocols & Standards

Interoperability standards are emerging to enable agents to connect to tools, collaborate with other agents, and communicate with users through consistent interfaces.

---

## Protocol Landscape

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

## MCP (Model Context Protocol)

**Origin:** Anthropic  
**Purpose:** Universal interface for tools, data sources, and context

MCP provides a standardized way for agents to interact with external tools and data sources. It defines:

- **Resources:** Files, database records, API responses that provide context
- **Tools:** Functions the agent can invoke to take actions
- **Prompts:** Reusable prompt templates
- **Sampling:** The ability for servers to request LLM completions

### MCP Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│              MCP ARCHITECTURE                                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   ┌─────────────┐     ┌─────────────┐     ┌─────────────┐       │
│   │   Agent     │     │    MCP      │     │   MCP       │       │
│   │   (Host)    │◄───►│   Client    │◄───►│   Server    │       │
│   └─────────────┘     └─────────────┘     └─────────────┘       │
│                                                 │               │
│                                                 ▼               │
│                           ┌─────────────────────────────────┐   │
│                           │  Tools / Resources / Prompts   │   │
│                           │  • Database queries            │   │
│                           │  • API calls                   │   │
│                           │  • File access                 │   │
│                           │  • Custom functions            │   │
│                           └─────────────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### MCP Ecosystem

- **100+ community MCP servers** for databases, APIs, file systems
- **TypeScript SDK** and **Python SDK** for building servers
- **Growing IDE support** (VS Code, JetBrains, etc.)

:::info MCP Adoption
MCP is rapidly becoming the de facto standard for agent-tool connectivity. Major framework integrations are available for LangChain, LlamaIndex, and Semantic Kernel.
:::

---

## A2A (Agent-to-Agent Protocol)

**Origin:** Google  
**Purpose:** Enable agents to discover, communicate with, and delegate tasks to other agents

A2A provides a standard for multi-agent systems to collaborate without being tightly coupled.

### Key Concepts

| Concept | Description |
| --- | --- |
| **Agent Card** | A JSON-LD document describing an agent's identity, capabilities, and endpoint |
| **Capabilities** | Structured declarations of what an agent can do |
| **Task Delegation** | Standard mechanism for passing work between agents |
| **Discovery** | How agents find other agents they can work with |

### A2A Flow

```
┌─────────────────────────────────────────────────────────────────┐
│              A2A COLLABORATION                                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Agent A                                      Agent B          │
│   ───────                                      ───────          │
│      │                                            │             │
│      │  1. Discover (fetch Agent Card)            │             │
│      │────────────────────────────────────────────►             │
│      │                                            │             │
│      │  2. Agent Card (capabilities, endpoint)    │             │
│      ◄────────────────────────────────────────────│             │
│      │                                            │             │
│      │  3. Delegate Task                          │             │
│      │────────────────────────────────────────────►             │
│      │                                            │             │
│      │  4. Task Result                            │             │
│      ◄────────────────────────────────────────────│             │
│      │                                            │             │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## AG-UI (Agent-User Interface Protocol)

**Origin:** CopilotKit  
**Purpose:** Streaming communication between agents and user interfaces

AG-UI enables rich, real-time agent experiences in web and mobile applications.

### Key Features

| Feature | Description |
| --- | --- |
| **State Events** | Stream agent state changes to the UI |
| **Tool Visibility** | Show users what tools the agent is using |
| **Rich Content** | Support for markdown, code, images, and interactive elements |
| **Streaming** | Real-time updates as the agent works |
| **Human-in-Loop** | Built-in patterns for approval and intervention |

---

## OpenAPI / Function Calling

The original standard for agent-tool connectivity, still widely used.

### Native LLM Support

- **OpenAI:** Function calling, tool use
- **Anthropic:** Tool use with Claude
- **Google:** Function calling with Gemini
- **Open-source:** Support via frameworks

### Relationship to MCP

MCP and OpenAPI/function calling are complementary:

| Aspect | OpenAPI/Function Calling | MCP |
| --- | --- | --- |
| **Scope** | Tool definition and invocation | Tools + Resources + Context |
| **State** | Stateless | Can maintain connection state |
| **Discovery** | Schema-based | Dynamic capability discovery |
| **Adoption** | Universal | Growing |

---

## AP2 (Agent Payment Protocol)

**Status:** Early development  
**Purpose:** Enable agents to make autonomous payments

### Concepts

| Concept | Description |
| --- | --- |
| **Mandate** | Authorization for an agent to spend within limits |
| **Limits** | Per-transaction, per-period, per-recipient caps |
| **Settlement** | How payments are actually executed |
| **Audit** | Record of all agent financial transactions |

:::warning Early Stage
AP2 is in early development. Production use of agent payments typically relies on existing payment APIs (Stripe, etc.) with custom authorization logic.
:::

---

## Protocol Selection

| Need | Recommended Protocol |
| --- | --- |
| **Tool Integration** | MCP (preferred) or OpenAPI function calling |
| **Multi-Agent Collaboration** | A2A for discovery, custom for execution |
| **Rich UI** | AG-UI for web/mobile |
| **Payments** | Existing payment APIs with authorization layer |
