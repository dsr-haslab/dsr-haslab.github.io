---
title: "DBR @ HASLab - Research"
layout: textlay
excerpt: "DBR @ HASLab -- Research"
sitemap: false
permalink: /research/
---

# Research

Our research is currently divided in three main topics: 

### Large Scale Data Processing

The work on large scale data processing e focused in develop new solutions to fit current demands in cloud based database solutions. These leverage the scalability and elastic capabilities of this programming model to serve both larger user domains and disruptive data volumes. The developed systems span from middleware solutions either to complement or to fully provide processing semantics over already existing systems or full query engines that incomporate the developed techniques. 


#### Projects

[CloudDBAppliance](http://clouddb.eu) This project aims at producing a European Cloud Database Appliance for providing a Database as a Service able to match the predictable performance, robustness and trustworthiness of on premise architectures such as those based on mainframes. We are particularly involved in tasks related to the load balancing and faul-tolerance of database requests and the orchestration/deployment of database components.

[Accelerated Object Stores]() This project builds a joint atempt with [IBM Research Zurich](https://www.zurich.ibm.com/) to design a middleware system that is able to efficiently handle data from document-based repositories. The system is built from a caching mechanism that leverages a in-house designed columnar format, specifically deisigned for data analytics. Moreover, it integrates RDMA network interconnects to handle seamless distributed execution over the document repository.

[Distributed Window Functions]() 

[Radicalize]() Descrição projeto outsystems. Ana ficou de enviar frase com descrição.

[Lattice Based Optimisations] JNO

[Spark Analytics] Ricardo Macedo (Tese Daniel) ?


#### Collaboration with other researchers

- [C. Bekas](https://researcher.watson.ibm.com/researcher/view.php?person=zurich-bek), [IBM Research Zurich](https://www.zurich.ibm.com/) - Envisioning the architecture for the Accelerated Object Stores project.


#### Selected publications

{% for publi in site.data.publist %}

  {% if publi.highlight == 0 %}

  - {{ publi.authors }} ({{ publi.year }}). <strong>{{ publi.title }}</strong>. {{ publi.where }}.

  {% endif %}

{% endfor %}


#### Funding

This work is being funded by [CloudDBAppliance](http://clouddb.eu) Horizon 2020 DS-2016-12, reference: 732051.

---

### Secure Data Processing



#### Projects

[Dartagnan]()

[SGX]()

[SafeNoSQL]() This project comprehends a generic NoSQL framework, together with a set of libraries supporting data processing cryptographic techniques that can be used with existing NoSQL engines and composed
to meet the privacy and performance requirements of different applications. This is achieved through a modular and extensible design that enables data processing over multiple cryptographic techniques applied on the same database.

[Privacy Aware Web-based query processing]() Tese Diogo


#### Collaboration with other researchers


#### Selected publications

{% for publi in site.data.publist %}

  {% if publi.highlight == 1 %}

  - {{ publi.authors }} ({{ publi.year }}). <strong>{{ publi.title }}</strong>. {{ publi.where }}.

  {% endif %}

{% endfor %}

#### Funding

This work is being funded by [SafeCloud](http://www.safecloud-project.eu) Horizon 2020 DS-2014-1, reference: 653884.

---

### Benchmarking


#### Projects

[HTAPBench](https://github.com/faclc4/HTAPBench) HTAPBench is a benchmarking suite designed for database engines that support hybrid workloads (HTAP) composed of high levels of transactional activity and, at the same time, provide business analytics directly over production data. It provides a unified metric for HTAP systems geared toward the execution of constantly increasing OLAP requests limited by an admissible impact on OLTP performance.

#### Collaboration with other researchers


#### Selected publications

{% for publi in site.data.publist %}

  {% if publi.highlight == 2 %}

  - {{ publi.authors }} ({{ publi.year }}). <strong>{{ publi.title }}</strong>. {{ publi.where }}.

  {% endif %}

{% endfor %}


#### Funding

This work is being funded by [SafeCloud](http://www.safecloud-project.eu) Horizon 2020 DS-2014-1, reference: 653884 and by FCT (Portuguese Funding Agency) Ref:UID/EEA/50014/2013.

---

<!-- ### Blockchain Technology


#### Projects

[]()


#### Collaboration with other researchers



#### Selected publications

{% for publi in site.data.publist %}

  {% if publi.highlight == 3 %}

  - {{ publi.authors }} ({{ publi.year }}). <strong>{{ publi.title }}</strong>. {{ publi.where }}.

  {% endif %}

{% endfor %}


#### Funding -->



<!-- [SafeFS](https://github.com/safecloud-project/safefs) is a software-defined file system based on a modular architecture featuring stackable layers that can be combined to construct a secure distributed file system. SafeFS allows users to specialize their data store to their specific needs by choosing the combination of layers that provide the best safety and performance tradeoffs. The prototype is implemented in user space using FUSE. The provided layers include mechanisms based on encryption, replication, and coding. -->




