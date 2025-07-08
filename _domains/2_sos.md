---
layout: domain
title: "Research"
excerpt: "Storage and Operating Systems for Modern Data Centers"
subtitle: "Storage and OSs for Modern Data Centers"
domain_acr: sos
permalink: /research/sos
brief_description: The emergence of novel hardware and the pressing need to decrease the carbon footprint of computing infrastructures are reshaping how data centers are built and managed. DSR is designing a new generation of storage and OS building blocks fitted for the performance, reliability, and energy consumption of modern infrastructures.
summary: Emerging hardware devices and technologies are challenging decades-old assumptions in the design of data-centric computer systems. Byte-addressable, persistent memory enables fast, non-volatile storage with near-DRAM performance. CXL is enabling the expansion of memory and efficient sharing of (disaggregated) resources with low latency. NVMe devices can now deliver millions of IOPS at microsecond scale. However, modern data centers (e.g., cloud, HPC supercomputers) still rely on legacy software stacks (e.g., kernel-based file systems; general-purpose storage, memory, and network systems), thus being unable to reap the performance benefits of these devices.<br><br>At the same time, to accommodate the exponential demand of I/O and GPU-intensive workloads, data centers have been growing in size every year, as well as their carbon footprint and power consumption. In fact, recent studies report that data centers are estimated to consume 8% to 13% of the world’s total electricity usage by 2030.<br><br>The main goal of DSR is to design a new generation of storage and operating system building blocks fitted for the performance, reliability, and energy consumption of modern large-scale infrastructures.
goals:
  - name: Redesign storage building blocks for new hardware devices
    description: We redesign existing storage building blocks (e.g., key-value stores, file systems, caching), which still rely on decades-old assumptions in computer systems, for emerging hardware and storage technologies. By consolidating the applications’ workloads with the inherent characteristics of novel hardware devices, we design specialized storage systems that can fully reap the performance benefits of emerging devices.
  - name: Maximize performance and resource utilization
    description: We research and design new storage and OS primitives to improve modern infrastructures' performance and resource utilization. We are exploring techniques for mitigating resource under and overprovisioning, including resource composability and disaggregation, workload consolidation, and workload-aware scheduling.
  - name: Improve energy efficiency and sustainability
    description: We research and design new sustainable and energy-efficient mechanisms for reducing the energy consumption and carbon footprint of large-scale infrastructures while maintaining the performance of deployed applications. We focus on developing energy-efficient solutions at all levels, from specific compute resources (e.g., CPU, GPU, memory) to the administration and maintenance of large-scale infrastructures (e.g., HPC supercomputers).
highlighted_pubs:
  - adao2025keigo
  - macedo2022paio
  - miranda2021s2dedup
contact: ricardo.g.macedo
classes: wide
sitemap: false
author_profile: false
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
---
