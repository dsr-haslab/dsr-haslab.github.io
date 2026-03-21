---
title: "Projects"
layout: base
permalink: /projects
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

{% assign active_projects = site.projects | where_exp: "item", "item.status == 'Active'" %}
{% assign active_projects_sorted = active_projects | sort: "duration.start" | reverse %}

{% assign other_projects = site.projects | where_exp: "item", "item.status == 'Finished'" %}
{% assign other_projects_sorted = other_projects | sort: "duration.start" | reverse %}

{% assign sorted_projects = active_projects_sorted | concat: other_projects_sorted %}

<div id="dsr_tools">

{% assign number_printed = 0 %}
{% for project in sorted_projects %}
  {% assign even_odd = number_printed | modulo: 4 %}
  {% if project.visible != false %}
    {% if even_odd == 0 %}
    <div class="card-group">
    {% endif %}
    <div class="card">
      <a href="{{project.permalink}}">
        <div class="card-block">
          <h4 class="card-title">{{ project.excerpt }}</h4>
          <p class="card-tool-text">{{ project.name }}</p>
        </div>
      </a>
        <div class="card_bottom_section">
          <span><i class="fas fa-info"></i>&nbsp; {{project.status}}</span>
        </div>
    </div>
    {% assign number_printed = number_printed | plus: 1 %}
    {% assign even_odd = number_printed | modulo: 4 %}
    {% if even_odd == 0 %}
    </div>
    {% endif %}
  {% endif %}
{% endfor %}


{% if even_odd != 0 %}

{% assign remaining = 4 | minus: even_odd %}

{% for i in (1..remaining) %}
  <div class="card noHover notransition" style="border:0">
  </div>
{% endfor %}

{% endif %}