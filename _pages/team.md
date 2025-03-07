---
title: "People"
layout: base
permalink: /people
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

<!-- # People -->

We are looking for new Postdocs, PhD students and Master/Bachelor students to join HASLab and work on storage research topics.<br>
If you are interested in working with us, please send me an [email](mailto:jtpaulo@inesctec.pt).

<!-- HASLab members involved in distributed storage research: -->
<div class="row">
        <div class="col-sm-12 rel pb80 tit">
          <h3 style="text-align: center;"><span>Meet the team</span></h3>
        </div>
      </div>

<div class="people" id="people_section">
  {% for member in site.data.team_members %}
  <div class="container-fluid rel icons team pt50 pb0">
          <div class="col-sm-12 text-center contIt rel shSec it5">
            <div class="item pb50">
              <div class="lineBox pb10">
                <div class="img bgi lazyload" data-src="{{ site.url }}{{ site.baseurl }}/assets/images/teampic/{{ member.photo }}" style="background-image: url(&quot;{{ site.url }}{{ site.baseurl }}/assets/images/teampic/{{ member.photo }}&quot;);"></div>
                <div class="cont sh" style="height: 118px;">
                  <div class="int">
                    <h5>{{ member.name }}</h5>
                    <p>{{ member.info }}</p>
                    <div class="social-links">
                      <a href="mailto:{{ member.email }}"><i class="fas fa-envelope"></i></a>
                      {% if member.git %} <a href="{{ member.git }}"><i class="fab fa-github"></i></a>{% endif %}
                      {% if member.ldin %} <a href="{{ member.ldin }}"><i class="fab fa-linkedin"></i></a>{% endif %}
                    </div>
                  </div>
                </div>
              </div>
      </div>
    </div>
  </div>
  {% endfor %}
</div>


<hr>


## Alumni

- Bruno Pereira (MSc Thesis) - _Towards Optimized Development and Testing of Ransomware Detection Solutions_, 2024.

- Sara Pereira (MSc Thesis) - _Towards Fine-grained, Holistic Energy Control in Large-Scale Computing Infrastructures_, 2024.

- Diogo Costa -  _Research on SPDK and I/O Profiling_, 2024.

- Cláudia Brito (PhD Thesis) - _Towards a Privacy-Preserving Distributed Machine Learning Framework_, 2024.

- Tânia Esteves (PhD Thesis) - _Flexible Tracing and Analysis of Applications' I/O Behavior_, 2024.

- Rúben Adão (MSc Thesis) - _Co-designing Log-Structured Merge Key-Value Stores with a Non-Volatile Storage Hierarchy_, 2024.

- Maria Ramos (MSc Thesis) - _Reproducible Fault Injection for Local Storage Systems_, 2024.

- Maria Beatriz Moreira (MSc Thesis) - _I/O Optimizations for Distributed Deep Learning Training_, 2024.

- Ricardo Macedo (PhD Thesis) - _User-level Software-Defined Storage Data Planes_, 2023.

- Pedro Rodrigues (MSc Thesis) - _Analysis of I/O patterns for Data Management Systems_, 2023.

- Alexandre Ferreira (MSc Thesis) - _Fault-tolerant and Large-scale Storage for POSIX-compliant Applications_, 2023.

- Alexandre Miranda (MSc Thesis) - _Realistic Assesment of Failures in the SPDK Platform_, 2023.

- João Azevedo (MSc Thesis) - _Realistic Fault Assessment for Distributed Storage Systems_, 2022.

- Marco Dantas (MSc Thesis) - _Accelerating Deep Learning Training on High-Performance Computing with Storage Tiering_, 2022.

- Diogo Leitão - _Research work on I/O optimizations for deep learning and persistent memory_, 2022.

- Alberto Faria - _Research on userspace storage block devices_, 2022.

- César Borges - _Research on fault-injection benchmarking_, 2022.

- Diogo Ribeiro - _Research work on storage tiering_, 2021.

- Rogério Pontes (PhD Thesis) - _Trade-offs between privacy and efficiency on databases_, 2021.

- Diogo Leitão (MSc Thesis) - _RSafeFS: Modular File System for Remote Storage_, 2021.

- Carlos Pedrosa (MSc Thesis) - _HIODS: Hybrid Inline and Offline Deduplication System_, 2021.

- Cláudia Correia (MSc Thesis) - _PRISMA: A Prefetching Storage Middleware for Accelerating Deep Learning Frameworks_, 2021.

- Daniel Fernandes (MSc Thesis) - _LSFS: Large-scale fault-tolerant file system_, 2021.

- Mariana Miranda (MSc Thesis) - _S2Dedup: SGX-enabled Secure Deduplication System_, 2020.

- Alexandre Silva (MSc Thesis) - _DEDISBench++: Realistic evaluation of storage systems supporting deduplication and compression_, 2020.

- Tânia Esteves (MSc Thesis) - _Configurable and Secure Storage Systems_, 2018.





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