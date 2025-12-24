---
sidebar_position: 5
title: "Need 4: Data Foundation & Factuality"
description: How agents access verified, high-quality data to make sound decisions.
keywords: [data foundation, factuality, data quality, provenance, grounding, hallucination prevention]
---

# Need 4: Data Foundation & Factuality

**The Problem:** Agents make autonomous decisions based on data. Unlike human analysts who apply judgment to questionable information, agents may act on bad data without hesitation. The quality, structure, provenance, and verifiability of data directly determines decision quality—and therefore business outcomes.

## 4.1 The Data Imperative for Autonomous Agents

Traditional software processes data according to explicit logic. Traditional analytics presents data for human interpretation. Agentic systems are different: they interpret data *and* act on that interpretation autonomously.

This creates a critical dependency: **agent decision quality cannot exceed data quality**.

```
┌─────────────────────────────────────────────────────────────────┐
│                    DATA → DECISION CHAIN                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  TRADITIONAL ANALYTICS                                          │
│                                                                 │
│  Data ──► Analysis ──► Report ──► HUMAN ──► Decision ──► Action │
│                                     │                           │
│                              (applies judgment,                 │
│                               questions anomalies,              │
│                               seeks clarification)              │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  AGENTIC SYSTEMS                                                │
│                                                                 │
│  Data ──► AGENT ──► Decision ──► Action                         │
│              │                                                  │
│       (no human filter;                                         │
│        bad data = bad decisions = bad actions)                  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

:::danger Critical Implication
Data quality is not just important—it's existential for agentic systems. Bad data leads directly to bad autonomous actions.
:::

### Business Consequences of Data Failures

| Data Problem | Agent Behavior | Business Impact |
| --- | --- | --- |
| Stale pricing data | Quotes wrong prices | Revenue loss, customer disputes |
| Incomplete customer records | Misclassifies customer tier | Service failures, churn |
| Conflicting inventory data | Promises unavailable stock | Order cancellations, reputation damage |
| Unverified third-party data | Makes claims as facts | Compliance violations, liability |
| Missing context | Draws incorrect conclusions | Wrong decisions, escalations |

## 4.2 Data Taxonomy for Agents

Agents must navigate multiple data types, each with distinct access patterns, quality challenges, and verification requirements.

```
┌─────────────────────────────────────────────────────────────────┐
│                    DATA TAXONOMY                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  STRUCTURED DATA                                                │
│  ─────────────────────────────────────────────────────────────  │
│  Format: Schemas, tables, defined relationships                 │
│  Sources: Databases, ERP, CRM, data warehouses                  │
│  Strengths: Queryable, typed, validated                         │
│  Challenges: Staleness, sync issues, schema drift               │
│                                                                 │
│  Examples: Customer records, orders, inventory, transactions    │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  UNSTRUCTURED DATA                                              │
│  ─────────────────────────────────────────────────────────────  │
│  Format: Free-form, no predefined schema                        │
│  Sources: Documents, emails, PDFs, images, audio, video         │
│  Strengths: Rich context, captures nuance                       │
│  Challenges: Extraction accuracy, interpretation variance       │
│                                                                 │
│  Examples: Contracts, policies, support tickets, recordings     │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  SEMI-STRUCTURED DATA                                           │
│  ─────────────────────────────────────────────────────────────  │
│  Format: Flexible schemas, nested structures                    │
│  Sources: JSON/XML documents, logs, API responses               │
│  Strengths: Flexible, self-describing                           │
│  Challenges: Schema evolution, inconsistent nesting             │
│                                                                 │
│  Examples: API responses, application logs, configurations      │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## 4.3 The Six Dimensions of Data Quality

Data quality for agentic systems must be measured, monitored, and enforced across six dimensions.

| Dimension | Question | Enforcement |
|-----------|----------|-------------|
| **Accuracy** | Does the data correctly represent reality? | Validation against authoritative sources |
| **Completeness** | Is all required data present? | Required field enforcement, gap detection |
| **Consistency** | Do multiple sources agree? | Cross-system reconciliation |
| **Timeliness** | Is the data current enough? | Freshness tracking, staleness thresholds |
| **Validity** | Does data conform to expected formats? | Schema validation, business rules |
| **Uniqueness** | Are duplicates identified? | Deduplication, entity resolution |

### Quality Thresholds by Decision Type

| Decision Type | Accuracy Required | Freshness Required | Completeness Required |
|---------------|-------------------|--------------------|-----------------------|
| Financial transactions | 99.99% | Real-time | 100% of required fields |
| Customer recommendations | 95% | < 24 hours | 80% of profile data |
| Inventory decisions | 99% | < 1 hour | 100% of SKU data |
| Content summarization | 90% | Contextual | Variable |
| Research assistance | 85% | < 7 days | Best available |

## 4.4 Data Provenance & Lineage

Agents must know where data came from, how it was transformed, and how much to trust it.

```
┌─────────────────────────────────────────────────────────────────┐
│                    PROVENANCE & LINEAGE                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  PROVENANCE: Where did this data originate?                     │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  Source Identifier ──► Source system, API, document, user input │
│         │                                                       │
│         ▼                                                       │
│  Extraction Metadata ──► When extracted, by what process        │
│         │                                                       │
│         ▼                                                       │
│  Trust Score ──► Source reliability (internal vs. web scrape)   │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  LINEAGE: How was this data transformed?                        │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  Raw Data ──► ETL Process ──► Enrichment ──► Aggregation        │
│     │             │              │               │              │
│     ▼             ▼              ▼               ▼              │
│  [logged]     [logged]       [logged]        [logged]           │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Trust Scoring by Source Type

| Source Type | Default Trust | Verification Method |
|-------------|---------------|---------------------|
| Internal system of record | High | Schema validation |
| Verified partner API | High | Contract + SLA |
| User-provided input | Medium | Validation rules |
| Third-party data vendor | Medium | Sampling audits |
| Web scraping | Low | Multiple source corroboration |
| User-generated content | Low | Verification flow |

## 4.5 Factuality & Verification

Autonomous agents must distinguish verified facts from inferences, opinions, and hallucinations.

```
┌─────────────────────────────────────────────────────────────────┐
│                    FACT CLASSIFICATION                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  VERIFIED FACTS                                                 │
│  • Data from authoritative sources                              │
│  • Cross-referenced and validated                               │
│  • Agent can state with high confidence                         │
│  Example: "Customer X has 47 orders in the last year"           │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  DERIVED INFORMATION                                            │
│  • Calculated or inferred from verified facts                   │
│  • Logic is auditable                                           │
│  • Agent should show derivation                                 │
│  Example: "Based on order history, Customer X is likely         │
│           in the top 10% by volume"                             │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  UNVERIFIED CLAIMS                                              │
│  • From lower-trust sources                                     │
│  • Cannot be cross-referenced                                   │
│  • Agent must qualify with uncertainty                          │
│  Example: "According to [source], competitor Y may              │
│           be launching a new product (unverified)"              │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  KNOWLEDGE GAPS                                                 │
│  • Data not available                                           │
│  • Agent must explicitly acknowledge                            │
│  • Preferable to hallucination                                  │
│  Example: "I don't have data on competitor pricing              │
│           for Q4. Should I search external sources?"            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## 4.6 Hallucination Prevention Through Data Grounding

LLMs can generate plausible but false information. Data grounding forces agents to anchor responses in verified data.

```
┌─────────────────────────────────────────────────────────────────┐
│                    GROUNDING ARCHITECTURE                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  1. RETRIEVAL-AUGMENTED GENERATION (RAG)                        │
│                                                                 │
│     Query ──► Retrieve Relevant Data ──► Generate with Context  │
│                      │                          │               │
│                      ▼                          ▼               │
│               [actual data]            [response grounded       │
│               [from verified            in retrieved data]      │
│                sources]                                         │
│                                                                 │
│  2. FACT VERIFICATION LOOP                                      │
│                                                                 │
│     Generate Draft ──► Extract Claims ──► Verify Each Claim     │
│                                                │                │
│                                         ┌──────┴──────┐         │
│                                         ▼             ▼         │
│                                    Verified      Unverified     │
│                                    (keep)        (remove or     │
│                                                   qualify)      │
│                                                                 │
│  3. CONFIDENCE SCORING                                          │
│                                                                 │
│     • High: Multiple verified sources                           │
│     • Medium: Single verified source                            │
│     • Low: Inference or single unverified source                │
│     • None: Cannot verify (trigger "I don't know")              │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

:::tip "I Don't Know" as a Feature
Agents must be configured to acknowledge knowledge gaps. A well-designed agent says "I don't have data on that" rather than fabricating an answer.
:::

## 4.7 Data Access Architecture

Agents need efficient, governed access to data across diverse systems and freshness requirements.

| Access Pattern | When to Use | Trade-offs |
|----------------|-------------|------------|
| **Real-time** | Current state critical, data changes frequently | Higher latency, source system load |
| **Cached** | Slight staleness acceptable, high read volume | Staleness risk, cache invalidation |
| **Batch/Materialized** | Complex aggregations, historical analysis | Higher staleness, compute cost |
| **Federated** | Data distributed across many sources | Query complexity, performance variance |

## Key Takeaways

1. **Data quality is existential** — Agent decisions cannot exceed data quality
2. **Six dimensions** define data quality for agentic systems
3. **Provenance and lineage** establish trust in data sources
4. **Factuality classification** distinguishes verified facts from inferences
5. **Data grounding** prevents hallucination through RAG and verification
6. **"I don't know"** is a feature, not a failure
