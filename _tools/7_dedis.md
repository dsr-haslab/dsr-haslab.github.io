---
layout: tool
title: DEDIS
description: Open-source distributed post-processing deduplication system. 
---

[DEDIS](https://launchpad.net/holeycow/dedis-deduplication-system) is a novel open-source distributed post-processing deduplication system. Its main contribution is a novel optimistic asynchronous mechanism for eliminating duplicated data among virtual machines deployed on several remote hosts. This mechanism along with other optimizations allows achieving nearly native disk I/O throughput for virtual machines even when deduplication is being performed in the background. Additionally, DEDIS is fully distributed, allowing the system to scale, and is resilient to server failures. DEDIS prototype is implemented within XEN by leveraging the Tap:aio Blktap Driver asynchronous I/O block device.