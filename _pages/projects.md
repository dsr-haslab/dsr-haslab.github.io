---
title: "DSR @ HASLab - Projects"
layout: gridlay
sitemap: false
permalink: /projects/
---

# Ongoing projects
{% assign number_printed = 0 %}
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

# Past projects
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
