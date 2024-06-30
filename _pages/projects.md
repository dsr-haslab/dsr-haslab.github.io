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


## Ongoing projects
<hr>

{% for project in site.data.projects %}
{% if project.status == "ongoing" %}
- **[{{ project.alias }}](/project/{{project.alias}})**: {{ project.name }}
{% endif %}
{% endfor %}



## Concluded projects
<hr>

{% for project in site.data.projects %}
{% if project.status == "concluded" %}
- **[{{ project.alias }}](/project/{{project.alias}})**: {{ project.name }}
{% endif %}
{% endfor %}

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
