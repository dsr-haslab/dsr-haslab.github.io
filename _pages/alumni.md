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
<hr>

{% assign phd_theses = site.data.alumni | where_exp: "item", "item.type == 'phdthesis'" %}

{% for pub in phd_theses %}
<ul>
    <li>{{ pub.author }} - <em>{{ pub.title }}</em>, {{ pub.year }}.<div class="social-links" display="inline-block">
    {% if pub.link.url %}<a href={{ pub.link.url }}><i class="fas fa-fw fa-link zoom"></i></a>{% endif %}
  </div></li>
</ul>
{% endfor %}


## MSc Theses
<hr>

{% assign msc_theses = site.data.alumni | where_exp: "item", "item.type == 'mscthesis'" %}

{% for pub in msc_theses %}
<ul>
    <li>{{ pub.author }} - <em>{{ pub.title }}</em>, {{ pub.year }}.<div class="social-links" display="inline-block">
    {% if pub.link.url %}<a href={{ pub.link.url }}><i class="fas fa-fw fa-link zoom"></i></a>{% endif %}
  </div></li>
</ul>
{% endfor %}


## Others
<hr>

{% assign others = site.data.alumni | where_exp: "item", "item.type == 'other'" %}

{% for pub in others %}
<ul>
    <li>{{ pub.author }} - <em>{{ pub.title }}</em>, {{ pub.year }}.<div class="social-links" display="inline-block">
    {% if pub.link.url %}<a href={{ pub.link.url }}><i class="fas fa-fw fa-link zoom"></i></a>{% endif %}
  </div></li>
</ul>
{% endfor %}

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