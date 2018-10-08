---
title: "DBR @ HASLab - Projects"
layout: gridlay
sitemap: false
permalink: /projects/
---

# Ongoing projects

|---|---|--| {% for project in site.projects %}
  |{% if project.img %} <img class="img-responsive"  width="300px" src="{{ site.url }}{{ site.baseurl }}/images/prjpic/{{project.img }}"/> {% else %} <img class="img-responsive" src=""/> {% endif %} | {{ project.type}} | {% if project.redirect %} [{{ project.title }}]({{project.redirect}}) {% else %}[{{ project.title }}]({{project.url}}) {% endif %}  <br/>{{ project.description }} |{% endfor %}

# Past projects
{% for project in site.past_projects %}
  |{% if project.img %} <img class="img-responsive"  width="300px" src="{{ site.url }}{{ site.baseurl }}/images/prjpic/{{project.img }}"/> {% else %} <img class="img-responsive" src=""/> {% endif %} |  {{ project.type}} | {% if project.redirect %} [{{ project.title }}]({{project.redirect}}) {% else %}[{{ project.title }}]({{project.url}}) {% endif %}  <br/>{{ project.description }} |{% endfor %}
