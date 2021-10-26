---
layout: tool
title: CaT
description: Content-aware tracing and analysis framework
---

[CaT](https://github.com/dsrhaslab/cat) is a black-box content-aware tracing and analysis framework. It analyzes distributed systems in a non-intrusive way, highlighting how their components interact with each other and how data flows through the system. Its design enables the capture of detailed information related to I/O network and disk events, such as the context of the request and the data processed by the event. With this information, CaT proposes an analysis of the event's content based on their similarity, allowing the detection of data flow patterns that are not visible when inspecting only the context of events.