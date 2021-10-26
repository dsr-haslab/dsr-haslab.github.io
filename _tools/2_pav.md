---
layout: tool
title: PAV
description: Pods-as-Volumes (PAV) Kubernetes plugin.
---

[PAV](https://github.com/albertofaria/pav) is a Kubernetes plugin that simplifies the implementation of storage volume provisioners by allowing all logic underlying the lifecycle and behavior of volumes to be specified as pod templates, which are then instantiated as needed to create, delete, and expose volumes to applications. PaV reduces the effort required to integrate storage systems into Kubernetes and enables the straightforward creation of storage middleware components, improving modularity and Kubernetes’ ability to manage storage stacks.