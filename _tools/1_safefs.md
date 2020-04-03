---
layout: tool
title: SafeFS
description: File system based on a modular architecture featuring stackable layers that can be combined to construct a secure distributed file system.
---

[SafeFS](https://github.com/safecloud-project/safefs) is a software-defined file system based on a modular architecture featuring stackable layers that can be combined to construct a secure distributed file system. SafeFS allows users to specialize their data store to their specific needs by choosing the combination of layers that provide the best safety and performance trade offs. The prototype is implemented in user space using FUSE. The provided layers include mechanisms based on encryption, replication, and coding. TrustFS, currently under development, is an evolution of SafeFS that eases the development of secure content-aware storage functionalities (e.g., compression and deduplication) over Intel SGX.

#### Collaborations

- [Danny Harnik](https://researcher.watson.ibm.com/researcher/view.php?person=il-DANNYH), [IBM Research Haifa](http://www.research.ibm.com/labs/haifa/) - Design and implementation of TrustFS.

- [P. Felber](http://members.unine.ch/pascal.felber/index.html), [V. Schiavoni](http://members.unine.ch/valerio.schiavoni/), and [D. Burihabwa](https://libra.unine.ch/Personnes/Dorian_Burihabwa/L-en), [Université de Neuchâtel](https://www.unine.ch) - Design and implementation of the original SafeFS system.


