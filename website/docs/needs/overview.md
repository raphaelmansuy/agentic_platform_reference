---
sidebar_position: 1
title: Overview of the Eight Needs
description: Summary of the eight fundamental challenges that an Agentic Platform must address.
keywords: [agentic platform, needs, challenges, requirements]
---

# Overview of the Eight Needs

Organizations deploying autonomous AI agents face eight fundamental challenges. The Agentic Platform addresses them systematically.

## The Eight Needs at a Glance

| # | Need | Core Question |
|---|------|---------------|
| 1 | **Operational Reliability** | How do agents run continuously, survive failures, and scale cost-efficiently? |
| 2 | **Security & Trust** | How do we prevent agents from taking unauthorized actions? |
| 3 | **Governance & Compliance** | How do agents operate within policies and regulations with full auditability? |
| 4 | **Data Foundation & Factuality** | How do agents access verified, high-quality data to make sound decisions? |
| 5 | **Intelligence & Reasoning** | How do agents reason effectively and apply appropriate strategies? |
| 6 | **Integration & Connectivity** | How do agents connect to tools, data, other agents, and humans? |
| 7 | **Agent Exposition & Access** | How do users and systems invoke and interact with agents? |
| 8 | **Developer Productivity** | How do teams build, test, deploy, and improve agents efficiently? |

## Relationship Between Needs

The eight needs are interconnected. Each builds on others to create a complete platform:

```
┌─────────────────────────────────────────────────────────────────┐
│                    NEEDS RELATIONSHIP                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                   ┌────────────────────┐                        │
│                   │   8. DEVELOPER     │                        │
│                   │   PRODUCTIVITY     │                        │
│                   └─────────┬──────────┘                        │
│                             │ enables                           │
│                             ▼                                   │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │                                                          │   │
│  │   ┌────────────┐    ┌────────────┐    ┌────────────┐     │   │
│  │   │ 7. AGENT   │◄──►│ 6. INTEG-  │◄──►│ 5. INTEL-  │     │   │
│  │   │ EXPOSITION │    │ RATION     │    │ LIGENCE    │     │   │
│  │   └──────┬─────┘    └──────┬─────┘    └──────┬─────┘     │   │
│  │          │                 │                 │           │   │
│  │          └─────────────────┼─────────────────┘           │   │
│  │                            │                             │   │
│  │                            ▼                             │   │
│  │                   ┌────────────────┐                     │   │
│  │                   │  4. DATA       │                     │   │
│  │                   │  FOUNDATION    │                     │   │
│  │                   └────────┬───────┘                     │   │
│  │                            │                             │   │
│  └────────────────────────────┼─────────────────────────────┘   │
│                               │                                 │
│  ┌────────────────────────────┼─────────────────────────────┐   │
│  │                            ▼                             │   │
│  │   ┌────────────┐    ┌────────────┐    ┌────────────┐     │   │
│  │   │ 1. OPER-   │◄──►│ 2. SECUR-  │◄──►│ 3. GOVERN- │     │   │
│  │   │ ATIONAL    │    │ ITY &      │    │ ANCE &     │     │   │
│  │   │ RELIABILITY│    │ TRUST      │    │ COMPLIANCE │     │   │
│  │   └────────────┘    └────────────┘    └────────────┘     │   │
│  │                                                          │   │
│  │              FOUNDATIONAL LAYER                          │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## Foundational Needs (1-3)

These three needs form the foundation upon which everything else is built:

- **Operational Reliability** ensures agents can run at all
- **Security & Trust** ensures they can run safely
- **Governance & Compliance** ensures they can run within rules

Without these, production deployment is not possible.

## Data Need (4)

**Data Foundation & Factuality** sits at the center. Agents are decision-making systems—the quality of their decisions cannot exceed the quality of the data they reason over.

## Capability Needs (5-7)

These three needs define what agents can do:

- **Intelligence & Reasoning** — How agents think
- **Integration & Connectivity** — What agents can use (outbound)
- **Agent Exposition & Access** — How agents are used (inbound)

## Enabling Need (8)

**Developer Productivity** enables the entire system. Without efficient build/test/deploy cycles, agents remain prototypes rather than production systems.

---

## Deep Dive

Explore each need in detail:

- [Need 1: Operational Reliability](./operational-reliability.md)
- [Need 2: Security & Trust](./security-trust.md)
- [Need 3: Governance & Compliance](./governance-compliance.md)
- [Need 4: Data Foundation & Factuality](./data-foundation.md)
- [Need 5: Intelligence & Reasoning](./intelligence-reasoning.md)
- [Need 6: Integration & Connectivity](./integration-connectivity.md)
- [Need 7: Agent Exposition & Access](./agent-exposition.md)
- [Need 8: Developer Productivity](./developer-productivity.md)
