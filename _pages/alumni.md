---
title: "Alumni"
layout: base
permalink: /alumni
classes: wide
sitemap: false
author_profile: false
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
---

<script
      src="https://code.jquery.com/jquery-3.4.1.min.js"
      integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
      crossorigin="anonymous"
    ></script>
<script src="https://unpkg.com/magic-grid/dist/magic-grid.min.js"></script>

<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">

This page highlights past team members who have completed theses or projects aligned with our research topics.

## PhD Theses

- Cláudia Brito - _Towards a Privacy-Preserving Distributed Machine Learning Framework_, 2024.

- Tânia Esteves - _Flexible Tracing and Analysis of Applications' I/O Behavior_, 2024.

- Ricardo Macedo - _User-level Software-Defined Storage Data Planes_, 2023.

- Rogério Pontes - _Trade-offs between privacy and efficiency on databases_, 2021.

<hr>

## MSc Theses

- Bruno Pereira - _Towards Optimized Development and Testing of Ransomware Detection Solutions_, 2024.

- Sara Pereira - _Towards Fine-grained, Holistic Energy Control in Large-Scale Computing Infrastructures_, 2024.

- Rúben Adão - _Co-designing Log-Structured Merge Key-Value Stores with a Non-Volatile Storage Hierarchy_, 2024.

- Maria Ramos - _Reproducible Fault Injection for Local Storage Systems_, 2024.

- Maria Beatriz Moreira - _I/O Optimizations for Distributed Deep Learning Training_, 2024.

- Pedro Rodrigues - _Analysis of I/O patterns for Data Management Systems_, 2023.

- Alexandre Ferreira - _Fault-tolerant and Large-scale Storage for POSIX-compliant Applications_, 2023.

- Alexandre Miranda - _Realistic Assesment of Failures in the SPDK Platform_, 2023.

- João Azevedo - _Realistic Fault Assessment for Distributed Storage Systems_, 2022.

- Marco Dantas - _Accelerating Deep Learning Training on High-Performance Computing with Storage Tiering_, 2022.

- Diogo Leitão - _RSafeFS: Modular File System for Remote Storage_, 2021.

- Carlos Pedrosa - _HIODS: Hybrid Inline and Offline Deduplication System_, 2021.

- Cláudia Correia - _PRISMA: A Prefetching Storage Middleware for Accelerating Deep Learning Frameworks_, 2021.

- Daniel Fernandes - _LSFS: Large-scale fault-tolerant file system_, 2021.

- Mariana Miranda - _S2Dedup: SGX-enabled Secure Deduplication System_, 2020.

- Alexandre Silva - _DEDISBench++: Realistic evaluation of storage systems supporting deduplication and compression_, 2020.

- Tânia Esteves - _Configurable and Secure Storage Systems_, 2018.

<hr>

## Others

- Diogo Costa -  _Research on SPDK and I/O Profiling_, 2024.

- Diogo Leitão - _Research work on I/O optimizations for deep learning and persistent memory_, 2022.

- Alberto Faria - _Research on userspace storage block devices_, 2022.

- César Borges - _Research on fault-injection benchmarking_, 2022.

- Diogo Ribeiro - _Research work on storage tiering_, 2021.

<script>

    const magicProjectsGrid = new MagicGrid({
      container: "#people_section",
      animate: false,
      gutter: 50, // default gutter size
      static: true,
      useMin: false,
      maxColumns: 5,
      useTransform: true
    });

    $("document").ready(() => {
      magicProjectsGrid.listen();
    });



</script>