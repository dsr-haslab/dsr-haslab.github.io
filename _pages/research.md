---
title: "DSR @ HASLab - Research"
layout: textlay
excerpt: "DSR @ HASLab -- Research"
sitemap: false
permalink: /research/
---

# Research

Our research is currently divided in three main topics: 

### Software-Defined Storage

The work on software-defined storage aims at building a new generation of adaptable and programmable storage solutions that can automatically and efficiently leverage the storage of heterogeneous clusters, IoT devices, and cloud storage services. These solutions, built along a control and a data plane, neeed to support multiple combinations of well-known distinct storage specializations such as load balancing, caching, replication, security, compression, and deduplication (data plane). These combinations need to be automatically configured and managed in order to suit different application performance, energy, security, and dependability requirements (control plane).

#### Projects

[SafeFS](https://github.com/safecloud-project/safefs) is a software-defined file system based on a modular architecture featuring stackable layers that can be combined to construct a secure distributed file system. SafeFS allows users to specialize their data store to their specific needs by choosing the combination of layers that provide the best safety and performance tradeoffs. The prototype is implemented in user space using FUSE. The provided layers include mechanisms based on encryption, replication, and coding.

#### Collaboration

This work is the result of a collaboration with researchers from:
- [Université de Neuchâtel](https://www.unine.ch) - Design and implementation of the original SafeFS system.
- [IBM Research Haifa](http://www.research.ibm.com/labs/haifa/) - Current work on improving the security of SafeFS.

#### Selected publications

{% for publi in site.data.publist %}

  {% if publi.highlight == 2 %}

  - {{ publi.authors }} ({{ publi.year }}). <strong>{{ publi.title }}</strong>. {{ publi.where }}.

  {% endif %}

{% endfor %}

#### Funding

This work is being funded by [SafeCloud](http://www.safecloud-project.eu) Horizon 2020 DS-2014-1, reference: 653884.

---

### Storage Benchmarking

Current storage benchmarking tools lack realistic features in order to properly assess the performance and resiliency of nowadays solutions. The goal of this work is to provide novel features such as realistic content generation, data integrity validation, among others. 

#### Projects

[DEDISbench](https://github.com/jtpaulo/dedisbench) is an open source micro I/O benchmark suitable for evaluating deduplication systems by generating blocks with a realistic content distribution. The benchmark also allows running tests with different load intensities and introduces a novel hotspot access pattern for I/O requests.

[qemu-Disksim](https://github.com/jopereira/qemu-disksim) is a version of QEMU that includes a block device (disksim) that introduces I/O delays according to a simulator. This allows you to use a ramdisk while obtaining performance consistent with what a real disk would produce.

#### Collaboration

- [IBM Research Haifa](http://www.research.ibm.com/labs/haifa/) - Current work on improving the realism of DEDISbench content generation.

#### Selected publications

{% for publi in site.data.publist %}

  {% if publi.highlight == 3 %}

  - {{ publi.authors }} ({{ publi.year }}). <strong>{{ publi.title }}</strong>. {{ publi.where }}.

  {% endif %}
  
{% endfor %}

#### Funding

This work was partially funded by FEDER through FCT by projects [Pastramy](http://pastramy.gsd.inesc-id.pt) (PTDC/EIA/72405/2006) and [ReD](http://red.lsd.di.uminho.pt) (PDTC/EIA-EIA/109044/2008), and by Bolsa de Doutoramento (SFRH/BD/31114/2006).

---

### Storage Optimization

With the exponential increase of digital information it becomes critical to find novel storage optimizations that can cope with the storage and retrieval of large amounts of data in a efficient and dependable fashion. 

#### Projects

[DEDIS](https://launchpad.net/holeycow/dedis-deduplication-system) is a novel open source distributed post-processing deduplication system. Its main contribution is a novel optimistic asynchronous mechanism for eliminating duplicated data among virtual machines deployed on several remote hosts. This mechanism along with other optimizations allows achieving nearly native disk I/O throughput for virtual machines even when deduplication is being performed in the background. Additionally, DEDIS is fully distributed, allowing the system to scale, and is resilient to server failures. DEDIS prototype is implemented within XEN by leveraging the Tap:aio Blktap Driver asynchronous I/O block device.

#### Selected publications

{% for publi in site.data.publist %}

  {% if publi.highlight == 4 %}

  - {{ publi.authors }} ({{ publi.year }}). <strong>{{ publi.title }}</strong>. {{ publi.where }}.

  {% endif %}
  
{% endfor %}

#### Funding

This work was partially funded by FEDER through FCT by projects [Pastramy](http://pastramy.gsd.inesc-id.pt) (PTDC/EIA/72405/2006) and [ReD](http://red.lsd.di.uminho.pt) (PDTC/EIA-EIA/109044/2008), and by Bolsa de Doutoramento (SFRH/BD/31114/2006).

