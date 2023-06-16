---
layout: tool
title: DIO
description: A tool for diagnosing applications I/O behavior through system call observability
---

[DIO](https://github.com/dsrhaslab/dio) DIO is a generic tool for observing and diagnosing applications storage I/O. It is designed to be used by applications developers and users to understand how applications interact with storage systems. By combining system call tracing with a customizable data analysis and visualization pipeline, DIO provide non-intrusive and comprehensive I/O diagnosis for applications using in-kernel POSIX storage systems (e.g., ext4, linux block device).