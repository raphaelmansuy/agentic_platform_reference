---
sidebar_position: 1
title: Technology Landscape Overview
description: A comprehensive mapping of available technologies to the eight needs and seven architectural layers of an Agentic Platform.
keywords: [agentic platform, technology landscape, hyperscalers, frameworks, protocols, infrastructure]
---

# Technology Landscape Overview

**Author:** Raphaël MANSUY | **Published:** December 2025

---

The agentic platform ecosystem spans hyperscaler offerings, enterprise software vendors, specialized frameworks, and enabling infrastructure. This section maps available technologies to the eight needs and seven architectural layers.

## Technology Categories

```
┌─────────────────────────────────────────────────────────────────┐
│              TECHNOLOGY LANDSCAPE                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  HYPERSCALER PLATFORMS                                  │    │
│  │  AWS Bedrock • Google Vertex AI • Azure AI              │    │
│  └─────────────────────────────────────────────────────────┘    │
│                           │                                     │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  DATA PLATFORMS                                         │    │
│  │  Databricks • Snowflake                                 │    │
│  └─────────────────────────────────────────────────────────┘    │
│                           │                                     │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  ENTERPRISE SOFTWARE                                    │    │
│  │  Salesforce • ServiceNow • SAP • Oracle • IBM           │    │
│  └─────────────────────────────────────────────────────────┘    │
│                           │                                     │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  FRAMEWORKS                                             │    │
│  │  LangChain • LlamaIndex • CrewAI • Semantic Kernel      │    │
│  └─────────────────────────────────────────────────────────┘    │
│                           │                                     │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  PROTOCOLS & STANDARDS                                  │    │
│  │  MCP • A2A • AG-UI • OpenAPI                            │    │
│  └─────────────────────────────────────────────────────────┘    │
│                           │                                     │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  INFRASTRUCTURE                                         │    │
│  │  Runtime • Observability • Security • Knowledge         │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## In This Section

<div className="row">
  <div className="col col--6">
    <div className="card" style={{marginBottom: '1rem'}}>
      <div className="card__header">
        <h3>☁️ Hyperscaler Platforms</h3>
      </div>
      <div className="card__body">
        <p>AWS, Google Cloud, and Azure agent platforms and supporting services.</p>
      </div>
      <div className="card__footer">
        <a className="button button--primary button--block" href="/docs/technology/hyperscaler-platforms">
          Explore →
        </a>
      </div>
    </div>
  </div>
  <div className="col col--6">
    <div className="card" style={{marginBottom: '1rem'}}>
      <div className="card__header">
        <h3>📊 Data & Enterprise Platforms</h3>
      </div>
      <div className="card__body">
        <p>Databricks, Snowflake, Salesforce, ServiceNow, SAP, Oracle, and IBM offerings.</p>
      </div>
      <div className="card__footer">
        <a className="button button--secondary button--block" href="/docs/technology/data-enterprise-platforms">
          Explore →
        </a>
      </div>
    </div>
  </div>
</div>

<div className="row">
  <div className="col col--6">
    <div className="card" style={{marginBottom: '1rem'}}>
      <div className="card__header">
        <h3>🔧 Frameworks</h3>
      </div>
      <div className="card__body">
        <p>Open-source and commercial frameworks for building agent logic.</p>
      </div>
      <div className="card__footer">
        <a className="button button--primary button--block" href="/docs/technology/frameworks">
          Explore →
        </a>
      </div>
    </div>
  </div>
  <div className="col col--6">
    <div className="card" style={{marginBottom: '1rem'}}>
      <div className="card__header">
        <h3>🔌 Protocols & Standards</h3>
      </div>
      <div className="card__body">
        <p>MCP, A2A, AG-UI, and other protocols enabling agent interoperability.</p>
      </div>
      <div className="card__footer">
        <a className="button button--secondary button--block" href="/docs/technology/protocols-standards">
          Explore →
        </a>
      </div>
    </div>
  </div>
</div>

<div className="row">
  <div className="col col--6">
    <div className="card" style={{marginBottom: '1rem'}}>
      <div className="card__header">
        <h3>🏗️ Infrastructure Components</h3>
      </div>
      <div className="card__body">
        <p>Runtime, observability, security, and knowledge infrastructure technologies.</p>
      </div>
      <div className="card__footer">
        <a className="button button--primary button--block" href="/docs/technology/infrastructure">
          Explore →
        </a>
      </div>
    </div>
  </div>
  <div className="col col--6">
    <div className="card" style={{marginBottom: '1rem'}}>
      <div className="card__header">
        <h3>🗺️ Cloud Reference Architectures</h3>
      </div>
      <div className="card__body">
        <p>Complete reference architectures for AWS, Azure, GCP, and Databricks.</p>
      </div>
      <div className="card__footer">
        <a className="button button--secondary button--block" href="/docs/technology/cloud-reference-architectures">
          Explore →
        </a>
      </div>
    </div>
  </div>
</div>

<div className="row">
  <div className="col col--6">
    <div className="card" style={{marginBottom: '1rem'}}>
      <div className="card__header">
        <h3>📋 Selection Guide</h3>
      </div>
      <div className="card__body">
        <p>How to choose technologies based on needs, cloud strategy, and team capabilities.</p>
      </div>
      <div className="card__footer">
        <a className="button button--primary button--block" href="/docs/technology/selection-guide">
          Explore →
        </a>
      </div>
    </div>
  </div>
</div>

---

## Quick Reference: Technology Mapping to Needs

| Need | Key Technologies |
| --- | --- |
| **Operational Reliability** | Temporal, Step Functions, Durable Functions, LangSmith, Datadog |
| **Security & Trust** | gVisor, Firecracker, Guardrails AI, Cloud IAM, Vault |
| **Governance & Compliance** | NeMo Guardrails, Unity Catalog, MLflow, Cloud Audit Logs |
| **Data Foundation & Factuality** | Vertex AI Search, Azure AI Search, Vector DBs, RAG frameworks |
| **Intelligence & Reasoning** | LangGraph, Semantic Kernel, ADK, Vector DBs, Redis |
| **Integration & Connectivity** | MCP servers, A2A protocol, function calling, Stripe |
| **Agent Exposition & Access** | Kong, Apigee, API Gateway, Slack Bolt, Bot Framework, AG-UI |
| **Developer Productivity** | LangChain, Promptfoo, DeepEval, GitOps, CI/CD |

:::info Rapidly Evolving Landscape
The agentic platform ecosystem is evolving rapidly. New frameworks, services, and standards emerge frequently. This reference captures the landscape as of December 2025.
:::
