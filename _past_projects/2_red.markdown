---
layout: project
title: ReD, Resilient databases
type: National FCT
description: Generic, robust, and inexpensive shared-storage cluster from an off-the-shelf RDBMS.
img: red.png
permalink: /projects/red
---

It might look simple at first sight to extend the shared-nothing protocol to cope with shared storage: If all replicas perform exactly the same write operations, database state would be identical and thus could be shared. Unfortunately, internal non-determinism means that different physical images are produced regardless of logical consistency, leading to corruption. Moreover, such simple approach would not preserve the logical independence of replicas and rule out tolerating Byzantine faults. The [ReD](http://red.lsd.di.uminho.pt/) approach is to combine the replication protocol with a specialized copy-on-write volume management system, that holds transient logically independent partial copies, thus masking internal server non-determinism and isolating multiple logical replicas for resilience. 