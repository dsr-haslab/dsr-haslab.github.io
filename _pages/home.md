---
title: "Distributed Storage Research"
layout: splash
permalink: /
date: 2016-03-23T11:48:41-04:00
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
excerpt: "Great power requires great storage!"
intro:
  # - excerpt: 'Distributed storage research at HASLab is focus on distributed storage systems, vital for fields like cloud computing, high-performance computing, internet-of-things, databases, and artificial inteligence. Our research aims to create efficient, scalable, resilient, and secure solutions to handle the exponential growth of digital data and diverse application needs.'
  - excerpt: 'Distributed Storage Research (DSR) group leverages its knowledge of storage, operating, and distributed systems to empower cloud computing, high-performance computing, and AI ecosystems. Our research aims to create efficient, scalable, resilient, and secure storage solutions to handle the rapid growth of digital information and the diverse requirements of various applications and infrastructures.'
feature_row:
  - image_path: assets/images/home/research.png
    alt: "placeholder research topics"
    title: "Research Topics"
    url: "/research/"
    excerpt: "Our research is directed towards building efficient, reliable, and secure storage systems."
    btn_label: "Read More"
    btn_class: "btn--inverse"
  - image_path: /assets/images/home/projects.png
    # image_caption: "Image courtesy of [Unsplash](https://unsplash.com/)"
    alt: "placeholder projects"
    title: "Projects"
    excerpt: "DSR is involved in several research projects aimed at delivering novel storage solutions."
    url: "/projects/"
    btn_label: "Read More"
    btn_class: "btn--inverse"
  - image_path: /assets/images/home/publications.png
    alt: "placeholder publications"
    title: "Publications"
    url: "/publications/"
    excerpt: "Explore DSR groundbreaking publications in distributed storage research."
    btn_label: "Read More"
    btn_class: "btn--inverse"
carousels:
  - images:
    - image: /assets/images/visits/2024_rahma_braga_romana.jpeg
      caption: "Visiting researcher Rahma Nouaji in Braga Romana"
    - image: /assets/images/visits/2024_rahma_last_day.jpeg
      caption: "Visiting researcher Rahma Nouaji on her last day in our lab"
---

{% include feature_row id="intro" type="center" %}

{% include feature_row %}


<h3>About us</h3>

Our team is composed of researchers from the High-Assurance Software Laboratory (HASLab), mainly from the Distributed Systems field. HASLab is one of the integrated R&D centers of [INESC TEC](https://www.inesctec.pt/en), a leading national associate laboratory, and a teaching and research subunit of the [University of Minho](https://www.uminho.pt/EN), where it is headquartered

<a href="/people/" class="btn btn--inverse">Meet the team</a>


<hr>

<h3>Latest news</h3>

{% for article in site.data.news limit:4 %}

  <time datetime="{{ article.date }}" class="catalogue-time">{{ article.date | date: "%B %d, %Y" }}</time>
  <h4 class="catalogue-title">{{ article.title }}</h4>
  <div class="catalogue-line"></div>
  <p>{{article.headline}}</p>
{% endfor %}

<hr>
<h3>Visiting Researchers</h3>

{% include carousel.html height="50" unit="%" duration="7" number="1" %}

<!--
https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg
https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg
https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg
-->


<!-- <hr> -->

<!-- Research at HASLab is anchored on a rigorous approach to three areas of Computer Science: Software Engineering, Distributed Systems and Cryptography and Information Security. The laboratory's contributions to these areas range from fundamental research on formal methods and algorithms to applied research on tools and middleware that address real-world demands stemming from long-term collaborations with industry. -->

<!--**We are looking for PhD students, Postdocs, and Master students to join the team** [(more info)]({{ site.url }}{{ site.baseurl }}/vacancies) **!** -->

<!--We are grateful for funding from-->

<!-- <figure class="fourth">
  <img src="{{ site.url }}{{ site.baseurl }}/images/logopic/inesctec_logo.jpg" style="width: 230px">
  <img src="{{ site.url }}{{ site.baseurl }}/images/logopic/uminho_logo.png" style="width: 180px">
</figure> -->
