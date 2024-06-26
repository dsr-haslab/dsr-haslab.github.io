---
title: "DSR - People"
layout: gridlay
excerpt: "DSR - People"
sitemap: false
permalink: /people/
---

<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">

# People

We are looking for new Postdocs, PhD students and Master/Bachelor students to join HASLab and work on storage research topics.<br>
If you are interested in working with us, please send me an [email](mailto:jtpaulo@inesctec.pt).

HASLab members involved in distributed storage research:

{% assign number_printed = 0 %}
{% for member in site.data.team_members %}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="25%" style="float: left" />
  <h4>{{ member.name }}</h4>
  <i>{{ member.info }}</i><br>
  <span><a href="mailto:{{ member.email }}"><i class="fas fa-envelope fa-lg"></i></a></span>
  {% if member.git %} <span><a href="{{ member.git }}"><i class="fab fa-github fa-lg"></i></a></span> {% endif %}
  {% if member.ldin %} <span><a href="{{ member.ldin }}"><i class="fab fa-linkedin-in fa-lg"></i></a></span> {% endif %}
  <ul style="overflow: hidden">
  
  {% if member.number_educ == 1 %}
  <li> {{ member.education1 }} </li>
  {% endif %}
  
  {% if member.number_educ == 2 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  {% endif %}
  
  {% if member.number_educ == 3 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  {% endif %}
  
  {% if member.number_educ == 4 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  <li> {{ member.education4 }} </li>
  {% endif %}
 
  {% if member.number_educ == 5 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  <li> {{ member.education4 }} </li>
  <li> {{ member.education5 }} </li>
  {% endif %}
  
  </ul>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}


## Alumni

- Tânia Esteves, PhD Thesis - Flexible Tracing and Analysis of Applications’ I/O Behavior, 2024.

- Rúben Adão, MSc Thesis - Co-designing Log-Structured Merge Key-Value Stores with a Non-Volatile Storage Hierarchy, 2024.

- Maria Ramos, MSc Thesis - Reproducible Fault Injection for Local Storage Systems, 2024.

- Maria Beatriz Moreira, MSc Thesis - I/O Optimizations for Distributed Deep Learning Training, 2024.

- Ricardo Macedo, PhD Thesis - User-level Software-Defined Storage Data Planes, 2023.

- Pedro Rodrigues, MSc Thesis - Analysis of I/O patterns for Data Management Systems, 2023.

- Alexandre Ferreira, MSc Thesis - Fault-tolerant and Large-scale Storage for POSIX-compliant Applications, 2023.

- Alexandre Miranda, MSc Thesis - Realistic Assesment of Failures in the SPDK Platform, 2023.

- João Azevedo, MSc Thesis - Realistic Fault Assessment for Distributed Storage Systems, 2022.

- Marco Dantas, MSc Thesis - Accelerating Deep Learning Training
on High-Performance Computing with Storage Tiering, 2022.

- Diogo Leitão, Research work on I/O optimizations for deep learning and persistent memory, 2022.   

- Alberto Faria, Research on userspace storage block devices, 2022.

- César Borges, Research on fault-injection benchmarking, 2022.

- Diogo Ribeiro, Research work on storage tiering, 2021.

- Rogério Pontes, PhD Thesis - Trade-offs between privacy and efficiency on databases, 2021.

- Diogo Leitão, MSc Thesis - RSafeFS: Modular File System for Remote Storage, 2021.   

- Carlos Pedrosa, MSc Thesis - HIODS: Hybrid Inline and Offline Deduplication System, 2021.

- Cláudia Correia, MSc Thesis - PRISMA: A Prefetching Storage Middleware for Accelerating Deep Learning Frameworks, 2021.

- Daniel Fernandes, MSc Thesis - LSFS: Large-scale fault-tolerant file system, 2021.

- Mariana Miranda, MSc Thesis - S2Dedup: SGX-enabled Secure Deduplication System, 2020.

- Alexandre Silva, MSc Thesis - DEDISBench++: Realistic evaluation of storage systems supporting deduplication and compression, 2020.

- Tânia Esteves, MSc Thesis - Configurable and Secure Storage Systems, 2018.



<!--
## Previous Members
<table align="center" style="width:100%">
<tr><th>Visitors</th>
    <th>Master Students</th> 
    <th>Bachelor Students</th>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td>Pedro Reis, 2012/2013</td>
  </tr>
</table> 

-->





