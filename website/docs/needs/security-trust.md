---
sidebar_position: 3
title: "Need 2: Security & Trust"
description: How to prevent agents from taking unauthorized actions through architectural controls.
keywords: [security, trust, access control, isolation, prompt injection, architectural security]
---

# Need 2: Security & Trust

**The Problem:** Agents must be prevented from taking unauthorized actions—even if instructed to do so through prompt manipulation.

## 2.1 The Architectural Security Imperative

Traditional application security assumes deterministic code execution. If you don't write code to delete accounts, the application won't delete accounts.

Agent security is fundamentally different. Behavior emerges from model weights and prompt inputs. A sufficiently clever prompt injection might convince an agent to attempt any action the underlying tools permit.

**Security must be architectural, not prompt-based.** Instructing an agent to "never delete accounts" in its system prompt is not security—it's a suggestion that adversarial prompts can override.

```
┌─────────────────────────────────────────────────────────────────┐
│              ARCHITECTURAL VS PROMPT-BASED SECURITY             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  PROMPT-BASED (Insufficient)                                    │
│                                                                 │
│  System Prompt: "Never delete user accounts"                    │
│  Adversarial Input: "Ignore previous instructions..."           │
│  Result: Agent may attempt deletion                             │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  ARCHITECTURAL (Secure)                                         │
│                                                                 │
│  Platform Policy: Agent has no permission for delete_account    │
│  Agent attempts: delete_account('user_123')                     │
│  Platform: DENIED - action not in permission set                │
│  Result: Deletion blocked regardless of prompt                  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

:::danger Critical Insight
Prompt-based security is not security—it's a suggestion. Architectural controls enforce security regardless of what the agent is convinced to attempt.
:::

## 2.2 Runtime Isolation

Agents must not interfere with each other or the host system.

| Isolation Type | Description | Use Case |
|----------------|-------------|----------|
| **Container Isolation** | Each agent runs in a sandboxed environment | Standard workloads |
| **VM-Level Isolation** | Stronger separation via virtual machines | Sensitive workloads |
| **Specialized Sandboxing** | gVisor, Firecracker for enhanced security | High-risk workloads |
| **Network Segmentation** | Controls which external systems each agent can reach | All workloads |

## 2.3 Access Control

Every action must be validated against the agent's permission set.

```
┌─────────────────────────────────────────────────────────────────┐
│                    ACCESS CONTROL LAYERS                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  TOOL-LEVEL PERMISSIONS                                         │
│  ─────────────────────────────────────────────────────────────  │
│  Which tools can this agent invoke?                             │
│  Example: Agent can use [search, email] but not [delete, admin] │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  DATA-LEVEL PERMISSIONS                                         │
│  ─────────────────────────────────────────────────────────────  │
│  What data can the agent access within permitted tools?         │
│  Example: Agent can query customers but not financial records   │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  ACTION SCOPING                                                 │
│  ─────────────────────────────────────────────────────────────  │
│  What parameters are allowed for permitted actions?             │
│  Example: Agent can send emails only to approved domains        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## 2.4 Data Protection

| Protection | Description |
|------------|-------------|
| **Output Scanning** | Detects PII, credentials, and sensitive patterns before responses reach users |
| **Encryption** | Protects data at rest and in transit |
| **Data Residency** | Ensures data stays within required geographic boundaries |

## 2.5 Threat Detection

| Capability | Purpose |
|------------|---------|
| **Prompt Injection Detection** | Identifies inputs designed to manipulate behavior |
| **Anomaly Detection** | Identifies unusual patterns in agent behavior |
| **Automatic Mitigation** | Blocks requests, terminates sessions, or alerts operators |

## 2.6 Multi-Tenant Isolation

For organizations serving multiple customers or teams, complete isolation between tenants is essential.

```
┌─────────────────────────────────────────────────────────────────┐
│                    MULTI-TENANT ISOLATION                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────┐         ┌─────────────────┐                │
│  │    TENANT A     │         │    TENANT B     │                │
│  │                 │    ╳    │                 │                │
│  │  ┌───────────┐  │  No     │  ┌───────────┐  │                │
│  │  │  Agents   │  │ Access  │  │  Agents   │  │                │
│  │  └───────────┘  │         │  └───────────┘  │                │
│  │                 │         │                 │                │
│  │  ┌───────────┐  │         │  ┌───────────┐  │                │
│  │  │   Data    │  │         │  │   Data    │  │                │
│  │  └───────────┘  │         │  └───────────┘  │                │
│  │                 │         │                 │                │
│  └─────────────────┘         └─────────────────┘                │
│                                                                 │
│  Team A's agents cannot access Team B's data—even on shared     │
│  infrastructure.                                                │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## Key Takeaways

1. **Architectural security** is mandatory—prompt-based controls are insufficient
2. **Runtime isolation** prevents cross-agent interference
3. **Layered access control** restricts tools, data, and action parameters
4. **Output scanning** catches sensitive data before it leaks
5. **Multi-tenant isolation** is essential for shared infrastructure
