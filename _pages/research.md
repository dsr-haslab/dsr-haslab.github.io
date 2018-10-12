---
title: "Research"
layout: page
sitemap: false
permalink: /research/
---

Our research is currently divided in three main topics:

### Database Dependability

With a strong background in fault-tolerant agreement and group communication protocols the natural application of the team's knowledge in databases was research to improve databases dependability.
Some years ago, the team coordinated the [GORDA](/projects/gorda) project on scalable relational database replication that involved the extension of several open source relational databases to be integrated in a scalable replication middleware. In this project we develop the [ESCADA Toolkit](/tools/escada_toolkit) and [GAPI](/tools/gapi) tools.  We also coordinated a national research project, [ReD](/projects/red), proposing a new approach that combines the benefits of the two distinct approaches for
database server scalability and dependability: shared nothing and shared storage clusters. ReD runs shared
nothing server software on a shared storage cluster, while also tolerating byzantine failures.

More recently, in the context of the [CloudDB Appliance](/projects/cloudb) the team is involved in tasks related to the load balancing and fault-tolerance of database requests and the orchestration/deployment of database components.

### Large Scale Data Processing

The work on large scale data processing is focused in developing new solutions to fit current demands in cloud based database solutions. These leverage the scalability and elastic capabilities of this programming model to serve both larger user domains and disruptive data volumes. The developed systems span from middleware solutions either to complement or to fully provide processing semantics over already existing systems or full query engines that incorporate the developed techniques.

In the [Stratus](/projects/stratus) project we research on the trade-off of early NoSQL databases, defining a two-layer architecture that allows to provide additional consistency guarantees and higher level data processing primitives that ease the migration from relational DBMS. Stratus led to the design and development of two main tools: DataDroplets and DataFlasks. DataDroplets is a flexible, efficient, dependable and fully decentralized key-value store for the management of data in a Cloud environment while DataFlasks is an epidemic store for massive scale systems. Recent work on DataFlasks achieved totally ordered replication for massive scale key-value stores.

Data management is moving from traditional relational and transactional database management systems (i.e., SQL) to a variety of systems that address different aspects of big data challenges (i.e., NoSQL). The gap between both systems makes it harder to develop and operate new applications, and forces developers to cope with multiple tools in a single application. In the  [CumuloNimbo](/projects/cn), [CoherentPaaS](/projects/cpaas) and [LeanBigData](/projects/lbd) research projects we had been researching on bridging the gap between SQL and NoSQL technologies without compromising scalability or flexibility.
In CumuloNimbo’s we designed and developed the query engine layer that is responsible for taking an SQL query and generating an efficient execution plan for the query, to be executed over the NoSQL storage layer. In CoherentPaaS we had research on data lakes support in SQL query engines to ingest data from external stores, such as Hadoop files, MongoDB, Neo4J, and data generated from or transformed with embedded scripting languages. In LeanBigData we defined novel strategies for parallel Hybrid transaction/analytical processing (HTAP) engines for real time analytical queries, enabling several workers to split and share query execution. More recently, we had research on extending this parallel engine for the parallel execution of analytical window functions queries.  In order to commercially explore key results of those three projects, in 2015 the [LeanXcale](https://www.leanxcale.com/) startup was born with former and current members of this team. In [RADicalize](/projects/radicalize) we are leveraging polyglot research done in the [CoherentPaaS](/projects/cpaas) project in order to enable developers using a low code platform to interact with different NoSQL data sources through the platform's unified visual query model.

Jointly with IBM Research Zurich, in the [Accelerated Object Stores](/projects/ibmaos) we are working on the
 design of a middleware system that is able to efficiently handle data from document-based repositories for real-time processing.

### Secure Data Processing

The work on secure data processing aims at building practical database systems that follow a privacy-by-design methodology. Current work explores the security, functionality and performance tradeoffs provided by current cryptographic primitives (e.g., standard, deterministic, order-preserving, searchable encryption) and secure hardware platforms (e.g., Intel SGX) when integrated with state-of-the-art NoSQL, SQL and Analytical database engines.

In the context of the [SafeCloud](/projects/safecloud) project we had work on a secure and resilient Cloud architecture, and particularly providing different database solutions that provide private data storage and processing while being practical and usable in real-world deployments. This solution comprehends a generic NoSQL framework [SafeNoSQL](/tools/safenosql), together with a set of libraries supporting data processing cryptographic techniques.  In order to commercially explore key results of the project, in 2017 the [SafeCloud Technologies Sàrl](https://safecloudtech.com/), a spin-off of INESC TEC, was born with former and current members of this team.

We are also researching on scalable database design, exporting an ansi-SQL interface, that contemplates novel database systems for analytical and web-based query processing that leverage multiple cryptographic primitives and the Intel SGX platform to enable privacy-aware processing.
