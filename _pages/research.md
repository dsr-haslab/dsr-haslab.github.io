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

The work on software-defined storage (SDS) aims at building a new generation of adaptable and programmable storage solutions that can automatically and efficiently leverage the storage of heterogeneous clusters, IoT devices, as well as cloud, HPC and AI storage services. These solutions, built along a control and a data plane, need to support multiple combinations of well-known distinct storage specializations such as load balancing, caching, replication, security, data reduction (data plane). These combinations need to be automatically configured and managed in order to suit different application performance, energy, security, and dependability requirements (control plane). Namely, we are working on novel:

- architectures and designs for SDS data and control planes,
- stackable and programmable storage solutions,
- user space frameworks for easing the implementation of complex storage solutions. 

#### Selected publications

{% for publi in site.data.publist %}
   <ul>
   {% for pub in publi.list %}
        {% if pub.highlight == 2 %}
   	        <li><strong>{{ pub.title }}</strong>. {{ pub.authors }}. {{ pub.where }}. {{ publi.year}}</li>
   	    {% endif %}
   {% endfor %}
	</ul>
{% endfor %}

---

### Storage Benchmarking and Diagnosing

As the complexity of current storage solutions grows, it becomes increasingly harder to find proper benchmarking and diagnosis tools to assess these systems' performance, resiliency and security. Our goals for this topic are to design:

- benchmarking solutions that can accurately evaluate storage systems by providing features such as realistic content generation, storage access patterns, data integrity validation, and fault injection,
- benchmarking tools that ease the setup, reproducibility and analysis of experiments,
- scalable black-box monitoring and diagnosis solutions for complex data-centric applications and systems.   

#### Selected publications

{% for publi in site.data.publist %}
   <ul>
   {% for pub in publi.list %}
        {% if pub.highlight == 3 %}
   	        <li><strong>{{ pub.title }}</strong>. {{ pub.authors }}. {{ pub.where }}. {{ publi.year}}</li>
   	    {% endif %}
   {% endfor %}
	</ul>
{% endfor %}

---

### Storage Optimization

With the exponential increase of digital information it becomes critical to find novel designs and storage optimizations that can cope with the storage and retrieval of large amounts of data in a efficient, secure and dependable fashion. Our main research interests include:

- efficient, dependable and secure data reduction techniques, 
- large-scale storage solutions,
- storage optimizations tailored for HPC and AI workloads.


#### Selected publications

{% for publi in site.data.publist %}
   <ul>
   {% for pub in publi.list %}
        {% if pub.highlight == 4 %}
   	        <li><strong>{{ pub.title }}</strong>. {{ pub.authors }}. {{ pub.where }}. {{ publi.year}}</li>
   	    {% endif %}
   {% endfor %}
	</ul>
{% endfor %}

