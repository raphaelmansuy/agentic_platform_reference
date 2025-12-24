---
sidebar_position: 1
slug: /
title: Introduction
description: The Agentic Platform Reference Architecture - A needs-driven approach to building production-ready AI agent infrastructure.
keywords: [agentic platform, reference architecture, AI agents, autonomous agents, enterprise AI]
---

# The Agentic Platform Reference Architecture

**A Needs-Driven Approach**

**Author:** Raphaël MANSUY | **Published:** December 2025

---

## Executive Summary

Organizations deploying autonomous AI agents face eight fundamental challenges. The **Agentic Platform** is the infrastructure layer that addresses them systematically.

| Need | Core Question |
| --- | --- |
| **Operational Reliability** | How do agents run continuously, survive failures, and scale cost-efficiently? |
| **Security & Trust** | How do we prevent agents from taking unauthorized actions? |
| **Governance & Compliance** | How do agents operate within policies and regulations with full auditability? |
| **Data Foundation & Factuality** | How do agents access verified, high-quality data to make sound decisions? |
| **Intelligence & Reasoning** | How do agents reason effectively and apply appropriate strategies? |
| **Integration & Connectivity** | How do agents connect to tools, data, other agents, and humans? |
| **Agent Exposition & Access** | How do users and systems invoke and interact with agents? |
| **Developer Productivity** | How do teams build, test, deploy, and improve agents efficiently? |

This reference architecture explores each need in depth, then maps them to a coherent architecture.

---

## Why These Needs Matter Now

Modern LLMs score 86%+ on MMLU, 85%+ on HumanEval, and 90%+ on GSM8K—benchmarks showing they can handle structured analytical tasks.

**But capability ≠ production-readiness.**

Raw LLMs are stateless, insecure, ungoverned, ungrounded, isolated, and invisible. The Agentic Platform bridges this gap.

:::info The Operating System Analogy
A traditional operating system manages CPU cycles, memory allocation, and permissions for software processes. An Agentic Platform manages **Intelligence**, **Data**, **Context**, **Authorization**, and **Exposition** for autonomous AI processes.
:::

```
┌─────────────────────────────────────────────────────────────────┐
│                    THE PLATFORM AS OS                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Traditional OS              │    Agentic Platform             │
│   ──────────────              │    ─────────────────            │
│                               │                                 │
│   CPU Management         ───► │    Intelligence                 │
│   (scheduling, allocation)    │    (routing, reasoning)         │
│                               │                                 │
│   File System            ───► │    Data Foundation              │
│   (storage, retrieval)        │    (structured, unstructured)   │
│                               │                                 │
│   Memory Management      ───► │    Context                      │
│   (RAM, virtual memory)       │    (memory, knowledge)          │
│                               │                                 │
│   Permission Control     ───► │    Authorization                │
│   (file access, isolation)    │    (tool access, boundaries)    │
│                               │                                 │
│   System Calls / APIs    ───► │    Exposition                   │
│   (how programs are invoked)  │    (how agents are accessed)    │
│                               │                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## What's In This Reference Architecture?

<div className="row">
  <div className="col col--6">
    <div className="card" style={{marginBottom: '1rem'}}>
      <div className="card__header">
        <h3>🧠 Core Concepts</h3>
      </div>
      <div className="card__body">
        <p>Understand what an Agentic Platform is and how it differs from agent frameworks.</p>
      </div>
      <div className="card__footer">
        <a className="button button--primary button--block" href="/docs/concepts/what-is-agentic-platform">
          Explore Concepts →
        </a>
      </div>
    </div>
  </div>
  <div className="col col--6">
    <div className="card" style={{marginBottom: '1rem'}}>
      <div className="card__header">
        <h3>📋 The Eight Needs</h3>
      </div>
      <div className="card__body">
        <p>Deep dive into each of the eight fundamental challenges organizations face.</p>
      </div>
      <div className="card__footer">
        <a className="button button--secondary button--block" href="/docs/needs/overview">
          View Needs →
        </a>
      </div>
    </div>
  </div>
</div>

<div className="row">
  <div className="col col--6">
    <div className="card" style={{marginBottom: '1rem'}}>
      <div className="card__header">
        <h3>🏗️ Architecture</h3>
      </div>
      <div className="card__body">
        <p>The seven-layer architecture and thirteen implementation capabilities.</p>
      </div>
      <div className="card__footer">
        <a className="button button--primary button--block" href="/docs/architecture/seven-layers">
          View Architecture →
        </a>
      </div>
    </div>
  </div>
  <div className="col col--6">
    <div className="card" style={{marginBottom: '1rem'}}>
      <div className="card__header">
        <h3>🚀 Implementation</h3>
      </div>
      <div className="card__body">
        <p>Phased approaches for building your own Agentic Platform.</p>
      </div>
      <div className="card__footer">
        <a className="button button--secondary button--block" href="/docs/implementation/phased-approach">
          Implementation Guide →
        </a>
      </div>
    </div>
  </div>
</div>

<div className="row">
  <div className="col col--6">
    <div className="card" style={{marginBottom: '1rem'}}>
      <div className="card__header">
        <h3>🔧 Technology Landscape</h3>
      </div>
      <div className="card__body">
        <p>Hyperscalers, frameworks, protocols, and infrastructure mapped to the eight needs.</p>
      </div>
      <div className="card__footer">
        <a className="button button--primary button--block" href="/docs/technology/overview">
          Explore Technologies →
        </a>
      </div>
    </div>
  </div>
</div>

---

## About This Reference Architecture

This is a **reference architecture**, not a product. It provides:

- **Conceptual Framework** — A structured way to think about agentic infrastructure
- **Pattern Language** — Common patterns and solutions for production agent deployments
- **Implementation Guidance** — Phased approaches for building platform capabilities
- **Technology-Agnostic Design** — Principles that apply across technology choices

:::tip Who Is This For?
This reference architecture is designed for **architects**, **engineering leaders**, and **technical decision-makers** evaluating or building infrastructure for autonomous AI agents.
:::
