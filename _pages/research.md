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


<script
      src="https://code.jquery.com/jquery-3.4.1.min.js"
      integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
      crossorigin="anonymous"
    ></script>


Our research is currently divided in four main domains:

<!-- {% assign number_printed = 0 %}
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
    <p class="card_text_see">See more</p>
  </div>
{% assign number_printed = number_printed | plus: 1 %}
{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 0 %}
</div>
{% endif %}
{% endfor %} -->



{% assign number_printed = 0 %}
{% for domain in site.domains %}


{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 0 %}
<div class="card-group">
{% endif %}
  <div class="card">
    <a href="{{ domain.permalink }}">
      <div class="card-block">
        <h4 class="card-title">{{ domain.excerpt }}</h4>
        <p class="card-text">{{ domain.brief_description }}</p>
      </div>
    </a>
    <p class="card_text_see">See more</p>
  </div>
{% assign number_printed = number_printed | plus: 1 %}
{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 0 %}
</div>
{% endif %}
{% endfor %}