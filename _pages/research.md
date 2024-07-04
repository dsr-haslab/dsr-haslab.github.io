---
title: "Research"
layout: base
permalink: /research
classes: wide
sitemap: false
author_profile: false
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
---

Our research is currently divided in four main domains:

{% assign number_printed = 0 %}
{% for domain in site.data.domains %}
{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 0 %}
<div class="card-group">
{% endif %}
<div class="card">
<a href="{{ domain.link }}">
  <div class="card-block">
    <h4 class="card-title">{{ domain.name }}</h4>
    <p class="card-text">{{ domain.brief_description }}</p>
  </div>
</a>
</div>
{% assign number_printed = number_printed | plus: 1 %}
{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 0 %}
</div>
{% endif %}
{% endfor %}
