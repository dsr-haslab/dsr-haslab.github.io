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

{% assign projects_highlighted = site.data.projects | where_exp: "item", "item.status == 'Active'" %}

{% assign other_projects = site.data.projects | where_exp: "item", "item.status == 'Finished'" %}

{% assign sorted_projects = projects_highlighted | concat: other_projects %}

<div id="dsr_tools">

{% assign number_printed = 0 %}
{% for project in sorted_projects %}
{% assign even_odd = number_printed | modulo: 4 %}
{% if even_odd == 0 %}
<div class="card-group">
{% endif %}
  <div class="card">
    <a href="/projects/{{project.alias}}">
      <div class="card-block">
        <h4 class="card-title">{{ project.alias }}</h4>
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
{% endfor %}


{% if even_odd != 0 %}

{% assign remaining = 4 | minus: even_odd %}

{% for i in (1..remaining) %}
  <div class="card noHover notransition" style="border:0">
  </div>
{% endfor %}

{% endif %}


<!-- ## ACTIVE
<hr>

{% for project in site.data.projects %}
{% if project.status == "Active" %}
- **[{{ project.alias }}](/projects/{{project.alias}})**: {{ project.name }}
{% endif %}
{% endfor %}



## FINISHED
<hr>

{% for project in site.data.projects %}
{% if project.status == "Finished" %}
- **[{{ project.alias }}](/projects/{{project.alias}})**: {{ project.name }}
{% endif %}
{% endfor %} -->

<!-- ## OLD -->

<!-- {% assign number_printed = 0 %}
{% for project in site.projects %}
{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
  {% if project.img %}
  <img class="img-responsive"  width="25%" style="float: left" src="{{ site.url }}{{ site.baseurl }}/images/prjpic/{{project.img }}"/>
  {% else %}
  <img class="img-responsive" src=""/>
  {% endif %}
  {% if project.redirect %}
  [{{ project.title }}]({{project.redirect}})
  {% else %}
  [{{ project.title }}]({{project.url}})
  {% endif %}

  **{{ project.type}}**

  {{ project.description }}
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

## Past projects
{% assign number_printed = 0 %}
{% for project in site.past_projects %}
{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
  {% if project.img %}
  <img class="img-responsive"  width="25%" style="float: left" src="{{ site.url }}{{ site.baseurl }}/images/prjpic/{{project.img }}"/>
  {% else %}
  <img class="img-responsive" src=""/>
  {% endif %}
  {% if project.redirect %}
  [{{ project.title }}]({{project.redirect}})
  {% else %}
  [{{ project.title }}]({{project.url}})
  {% endif %}

  **{{ project.type}}**

  {{ project.description }}
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

# Present (and Past) Collaborations

<figure class="fourth">
  <img src="{{ site.url }}{{ site.baseurl }}/images/prjpic/colabs.png" style="width: 800px">
</figure> -->
